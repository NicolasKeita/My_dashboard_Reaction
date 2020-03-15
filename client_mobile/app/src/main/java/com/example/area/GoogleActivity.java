package com.example.area;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import org.json.JSONObject;

import java.util.Objects;
import java.util.concurrent.TimeUnit;

import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class GoogleActivity extends AppCompatActivity implements View.OnClickListener
{
    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bitcoin);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        // First request to /getURL_toConnectToGoogle
        OkHttpClient httpClient = new OkHttpClient();
        String REQ_url_getURL_toConnectToGoogle = "http://my-area-server2.com:8080/getURL_toConnectToGoogle";
        Request request = new Request.Builder()
                .url(REQ_url_getURL_toConnectToGoogle)
                .build();
        Call call = httpClient.newCall(request);
        String RES_url_getURL_toConnectToGoogle = "";
        try {
                Response response = call.execute();
                RES_url_getURL_toConnectToGoogle = Objects.requireNonNull(response.body()).string();
            } catch (Exception e) {
                System.err.println("Is the server Online ?");
                System.err.println(e.toString());
            }

        Thread t = new Thread() {
            public void run() {
                try {
                    // Second request to /getURL_toConnectToGoogle
                    OkHttpClient httpClient2 = new OkHttpClient.Builder()
                            .connectTimeout(10, TimeUnit.MINUTES)
                            .writeTimeout(10, TimeUnit.MINUTES)
                            .readTimeout(10, TimeUnit.MINUTES)
                            .build();
                    String REQ_url_connectThroughGoogle = "http://my-area-server2.com:8080/connectThroughGoogle";
                    Request request2 = new Request.Builder()
                            .url(REQ_url_connectThroughGoogle)
                            .build();
                    Call call2 = httpClient2.newCall(request2);
                    Response response = call2.execute();
                    String jsonData = Objects.requireNonNull(response.body()).string();
                    JSONObject Jobject = new JSONObject(jsonData);
                    System.out.println("Credentials to google to GOOGLE APIs : ");
                    System.out.println(jsonData); // TODO : put those credentials in global to use them in future requests
                } catch (Exception e) {
                    System.err.println("Is the server Online ?");
                    System.err.println(e.toString());
                }
            }
        };
        t.start();

        // Open URL received
        if (RES_url_getURL_toConnectToGoogle.equals(""))
            System.err.println("[DEBUG AREA] REQUEST FAIL");
        Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(RES_url_getURL_toConnectToGoogle));
        startActivity(browserIntent);
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
