package com.example.testarea;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.squareup.picasso.Picasso;

import org.json.JSONArray;
import org.json.JSONObject;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class NasaActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView title;
    private TextView explanation;
    //private TextView copyright;
    private ImageView url;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_nasa);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        title = (TextView) findViewById(R.id.title_id);
        explanation = (TextView) findViewById(R.id.desc_id);
        //copyright = (TextView) findViewById(R.id.copyright_id);
        url = (ImageView) findViewById(R.id.image_id);

        final OkHttpClient httpClient = new OkHttpClient();
        final Request request = new Request.Builder()
                .url("http://10.0.2.2:3000/pictures")
                .build();
        Response response = null;
        try {
            response = httpClient.newCall(request).execute();
            String jsonData = response.body().string();
            JSONObject object = new JSONObject(jsonData);
            String titre = object.getString("title");
            String description = object.getString("explanation");
            //String droits = object.getString("copyright");
            String pic = object.getString("url");
            title.setText("Title : "+titre);
            explanation.setText("Explanation : "+description);
            //copyright.setText("Copyrights : "+droits);
            Picasso.with(this).load(pic).into(url);
        } catch (Exception e) {
        }
        Thread t=new Thread(){


            @Override
            public void run(){
                while(!isInterrupted()){
                    try {
                        Thread.sleep(600000);  //1000ms = 1 sec
                        runOnUiThread(new Runnable() {

                            @Override
                            public void run() {
                                //request
                                try {
                                    Response response = httpClient.newCall(request).execute();
                                    String jsonData = response.body().string();
                                    JSONObject object = new JSONObject(jsonData);
                                    String titre = object.getString("title");
                                    String description = object.getString("explanation");
                                    //String droits = object.getString("copyright");
                                    String pic = object.getString("url");
                                    title.setText("Title : "+titre);
                                    explanation.setText("Explanation : "+description);
                                    //copyright.setText("Copyrights : "+droits);
                                    //Picasso.with().load(pic).into(url);
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
