package com.example.testarea;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.json.JSONArray;
import org.json.JSONObject;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class LolActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView lolRegion;
    private TextView lolStatus;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lol);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        lolRegion = (TextView) findViewById(R.id.lolRegion);
        lolStatus = (TextView) findViewById(R.id.lolStatus);

        final OkHttpClient httpClient = new OkHttpClient();
        final Request request = new Request.Builder()
                .url("http://10.0.2.2:3000/lol")
                .build();
        Response response = null;
        try {
            response = httpClient.newCall(request).execute();
            String jsonData = response.body().string();
            JSONObject object = new JSONObject(jsonData);
            String region = object.getString("name");
            JSONArray object2 = object.getJSONArray("services");
            JSONObject subObject = (JSONObject) object2.get(0);
            String status = subObject.getString("status");
            lolRegion.setText("REGION : "+region);
            lolStatus.setText("STATUS : "+status);
        } catch (Exception e) {
        }
    }

    @Override
    public void onClick(View v) {
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
