package com.example.area;

//import android.icu.util.TimeUnit;
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

import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;

import java.io.IOException;
import java.util.Objects;
import java.util.concurrent.TimeUnit;

import okhttp3.Call;
import okhttp3.Callback;
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

        // First request to /getURL_toConnectToGoogle
        OkHttpClient httpClient = new OkHttpClient();
        String REQ_url_getURL_toConnectToGoogle = "http://10.0.2.2:8080/getURL_toConnectToGoogle";
        Request request = new Request.Builder()
                .url(REQ_url_getURL_toConnectToGoogle)
                .build();
        Call call = httpClient.newCall(request);
        String RES_url_getURL_toConnectToGoogle = "";
        try {
                Response response = call.execute();
                RES_url_getURL_toConnectToGoogle = Objects.requireNonNull(response.body()).string();
            } catch (Exception e) {
                System.err.println(e.toString());
            }
            System.out.println("La reponse : " + RES_url_getURL_toConnectToGoogle); // TODO (Debug) Remove

        // Second request to /getURL_toConnectToGoogle
        OkHttpClient httpClient2 = new OkHttpClient.Builder()
                .connectTimeout(10, TimeUnit.MINUTES)
                .writeTimeout(10, TimeUnit.MINUTES)
                .readTimeout(10, TimeUnit.MINUTES)
                .build();
        String REQ_url_connectThroughGoogle = "http://10.0.2.2:8080/connectThroughGoogle";
        Request request2 = new Request.Builder()
                .url(REQ_url_connectThroughGoogle)
                .build();
        Call call2 = httpClient2.newCall(request2);
        try {
            call2.enqueue(new Callback() {
                @Override
                public void onFailure(@NotNull Call call, @NotNull IOException e) {
                    e.printStackTrace();
                }

                @Override
                public void onResponse(@NotNull Call call, @NotNull final Response response) throws IOException {
                    if (!response.isSuccessful()) {
                        throw new IOException("unexpected code " + response);
                    } else {
                        System.out.println("Debut");
                        System.out.println(response.body());
                    }
                }
            });
        } catch (Exception e) {
            System.err.println(e.toString());
        }
            /*
            String url = response2.toString();
            Toast.makeText(getApplicationContext(), url, Toast.LENGTH_LONG).show();
            OkHttpClient httpClient3 = new OkHttpClient();
            Request request3 = new Request.Builder()
                    .url(url)
                    .build();
            Response response3 = httpClient2.newCall(request3).execute();
            */
            /*String jsonData = Objects.requireNonNull(response2.body()).string();
            JSONObject object = new JSONObject(jsonData);*/
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
