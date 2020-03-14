package com.example.area;

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

public class SteamActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView title1;
    private TextView url1;
    private TextView title2;
    private TextView url2;
    private TextView title3;
    private TextView url3;

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_steam);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        title1 = findViewById(R.id.title1_id);
        url1 = findViewById(R.id.url1_id);
        title2 = findViewById(R.id.title2_id);
        url2 = findViewById(R.id.url2_id);
        title3 = findViewById(R.id.title3_id);
        url3 = findViewById(R.id.url3_id);

        final OkHttpClient httpClient = new OkHttpClient();
        final Request request = new Request.Builder()
                .url("http://10.0.2.2:8080/steamNews")
                .build();
        Response response;
        try {
            response = httpClient.newCall(request).execute();
            String jsonData = Objects.requireNonNull(response.body()).string();
            JSONObject object = new JSONObject(jsonData);
            JSONObject object2 = object.getJSONObject("appnews");
            JSONArray object3 = object2.getJSONArray("newsitems");
            JSONObject subObject1 = (JSONObject) object3.get(0);
            JSONObject subObject2 = (JSONObject) object3.get(1);
            JSONObject subObject3 = (JSONObject) object3.get(2);
            String title1Split = "Title : " + subObject1.getString("title");
            String title2Split = "Title : " + subObject2.getString("title");
            String title3Split = "Title : " + subObject3.getString("title");
            String url1Split = "URL : " + subObject1.getString("url");
            String url2Split = "URL : " + subObject2.getString("url");
            String url3Split = "URL : " + subObject3.getString("url");
            title1.setText(title1Split);
            title2.setText(title2Split);
            title3.setText(title3Split);
            url1.setText(url1Split);
            url2.setText(url2Split);
            url3.setText(url3Split);
        } catch (Exception ignored) {
        }
        Thread t=new Thread(){


            @Override
            public void run(){
                while(!isInterrupted()){
                    try {
                        Thread.sleep(600000);  //1000ms = 1 sec and 600 000ms = 10minutes
                        runOnUiThread(new Runnable() {

                            @Override
                            public void run() {
                                //request
                                try {
                                    Response response = httpClient.newCall(request).execute();
                                    String jsonData = Objects.requireNonNull(response.body()).string();

                                    JSONObject object = new JSONObject(jsonData);
                                    JSONObject object2 = object.getJSONObject("appnews");
                                    JSONArray object3 = object2.getJSONArray("newsItems");
                                    JSONObject subObject1 = (JSONObject) object3.get(0);
                                    JSONObject subObject2 = (JSONObject) object3.get(1);
                                    JSONObject subObject3 = (JSONObject) object3.get(2);
                                    String title1Split = "Title : " + subObject1.getString("title");
                                    String title2Split = "Title : " + subObject2.getString("title");
                                    String title3Split = "Title : " + subObject3.getString("title");
                                    String url1Split = "URL : " + subObject1.getString("url");
                                    String url2Split = "URL : " + subObject2.getString("url");
                                    String url3Split = "URL : " + subObject3.getString("url");
                                    title1.setText(title1Split);
                                    title2.setText(title2Split);
                                    title3.setText(title3Split);
                                    url1.setText(url1Split);
                                    url2.setText(url2Split);
                                    url3.setText(url3Split);
                                } catch (Exception ignored) {
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
