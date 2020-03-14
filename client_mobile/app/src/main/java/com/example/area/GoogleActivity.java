package com.example.area;

import android.os.Build;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import org.json.JSONObject;

import java.util.Objects;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class GoogleActivity extends AppCompatActivity implements View.OnClickListener {

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bitcoin);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        final OkHttpClient httpClient = new OkHttpClient();
        final Request request = new Request.Builder()
                .url("http://10.0.2.2:8080/connectThroughGoogle")
                .build();
        Response response;
        Thread t=new Thread(){
            @Override
            public void run(){
                while(!isInterrupted()){
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            try {
                                Response response = httpClient.newCall(request).execute();
                            } catch (Exception ignored) {
                            }
                        }
                    });

                }
            }
        };
        t.start();
        try {
            OkHttpClient httpClient2 = new OkHttpClient();
            Request request2 = new Request.Builder()
                    .url("http://10.0.2.2:8080/getURL_toConnectToGoogle")
                    .build();
            Response response2 = httpClient.newCall(request2).execute();
            String url = response2.toString();
            Toast.makeText(getApplicationContext(), url, Toast.LENGTH_LONG).show();
            OkHttpClient httpClient3 = new OkHttpClient();
            Request request3 = new Request.Builder()
                    .url(url)
                    .build();
            Response response3 = httpClient.newCall(request3).execute();

            /*String jsonData = Objects.requireNonNull(response2.body()).string();
            JSONObject object = new JSONObject(jsonData);*/
        } catch (Exception ignored) {
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
