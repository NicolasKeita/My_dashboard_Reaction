package com.example.area;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import org.json.JSONObject;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class NYActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView NYDay;
    private TextView NYTime;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ny);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        NYDay = (TextView) findViewById(R.id.ny_day);
        NYTime = (TextView) findViewById(R.id.ny_time);

        final OkHttpClient httpClient = new OkHttpClient();
        final Request request = new Request.Builder()
                .url("http://10.0.2.2:8080/time")
                .build();
        Response response = null;
        try {
            response = httpClient.newCall(request).execute();
            String jsonData = response.body().string();
            JSONObject object = new JSONObject(jsonData);
            String day = object.getString("dayOfTheWeek");
            String time = object.getString("currentDateTime");
            NYDay.setText("DAY : "+day);
            NYTime.setText("TIME : "+time);
        } catch (Exception e) {
        }
        Thread t=new Thread(){


            @Override
            public void run(){
                while(!isInterrupted()){
                    try {
                        Thread.sleep(10000);  //1000ms = 1 sec
                        runOnUiThread(new Runnable() {

                            @Override
                            public void run() {
                                //request
                                try {
                                    Response response = httpClient.newCall(request).execute();
                                    String jsonData = response.body().string();
                                    JSONObject object = new JSONObject(jsonData);
                                    String day = object.getString("dayOfTheWeek");
                                    String time = object.getString("currentDateTime");
                                    NYDay.setText("DAY : "+day);
                                    NYTime.setText("TIME : "+time);
                                } catch (Exception e) {
                                }
                            }
                        });

                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }

                }
            }
        };
        t.start();
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
