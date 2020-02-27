package com.example.testarea;

import android.os.Build;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.Objects;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class TrelloActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView aName;
    private TextView title;



    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_trello);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        title = findViewById(R.id.title_id);
        aName = findViewById(R.id.name_id);

        final OkHttpClient httpClient = new OkHttpClient();
        final Request request = new Request.Builder()
                .url("http://10.0.2.2:3000/trello")
                .build();
        Response response;
        try {
            response = httpClient.newCall(request).execute();
            String jsonData = Objects.requireNonNull(response.body()).string();
            JSONArray object = new JSONArray(jsonData);
            int size = object.length();
            int i = 0;
            title.setText("Liste des tableaux Trello : ");
            String all = null;
            while (i < size) {
                JSONObject object2 = object.getJSONObject(i);
                String name = object2.getString("name");
                if (all == null)
                    all = name+"\n";
                else
                    all += name+"\n";
                i++;
            }
            aName.setText(all);
        } catch (Exception e) {
            title.setText("errror");
        }
        Thread t=new Thread(){


            @Override
            public void run(){
                while(!isInterrupted()){
                    try {
                        Thread.sleep(60000);  //1000ms = 1 sec
                        runOnUiThread(new Runnable() {

                            @Override
                            public void run() {
                                //request
                                try {
                                    Response response = httpClient.newCall(request).execute();String jsonData = response.body().string();
                                    String jsonData2 = response.body().string();
                                    JSONArray object = new JSONArray(jsonData2);
                                    int size = object.length();
                                    int i = 0;
                                    title.setText("Liste des tableaux Trello : ");
                                    String all = new String();
                                    while (i < size) {
                                        JSONObject object2 = object.getJSONObject(i);
                                        String name = object2.getString("name");
                                        if (all == null)
                                            all = name+"\n";
                                        else
                                            all += name+"\n";
                                        i++;
                                    }
                                    aName.setText(all);
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
