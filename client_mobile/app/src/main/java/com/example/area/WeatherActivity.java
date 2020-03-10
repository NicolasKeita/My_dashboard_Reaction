package com.example.area;

import android.os.Build;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Objects;

import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class WeatherActivity extends AppCompatActivity implements View.OnClickListener {

    private EditText city;
    private Button checkbool;
    private Button getWeather;
    private EditText getMail;
    private Boolean aBoolean = false;

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_weather);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        city = (EditText) findViewById(R.id.mycity);
        checkbool = (Button) findViewById(R.id.checkBox);
        getWeather = (Button) findViewById(R.id.submit_id);
        getMail = (EditText) findViewById(R.id.mail_id);

        checkbool.setOnClickListener(this);
        getWeather.setOnClickListener(this);
    }

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    public void onClick(View v) {
        if (v == checkbool) {
            aBoolean = true;
        } else if (v == getWeather) {
            final OkHttpClient httpClient = new OkHttpClient();
            RequestBody formBody = new FormBody.Builder()
                    .add("city", city.getText().toString())
                    .add("send_mail", aBoolean.toString())
                    .add("receiver_mail", getMail.getText().toString())
                    .build();
            final Request request = new Request.Builder()
                    .addHeader("ContentType", "application/x-www-form-urlencoded")
                    .url("http://10.0.2.2:8080/weather")
                    .post(formBody)
                    .build();
            Response response = null;
            try {
                response = httpClient.newCall(request).execute();
            } catch (Exception ignored) {
            }
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }
        return super.onOptionsItemSelected(item);
    }
}

