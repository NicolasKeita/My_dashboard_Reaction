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

public class PollutionActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView indiceGlobal;
    private TextView indiceNo2;
    private TextView indiceO3;
    private TextView indicePm10;
    private TextView date;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pollution);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        indiceGlobal = (TextView) findViewById(R.id.indice1);
        indiceNo2 = (TextView) findViewById(R.id.indice2);
        indiceO3 = (TextView) findViewById(R.id.indice3);
        indicePm10 = (TextView) findViewById(R.id.indice4);
        date = (TextView) findViewById(R.id.indice5);

        final OkHttpClient httpClient = new OkHttpClient();
        final Request request = new Request.Builder()
                .url("http://10.0.2.2:3000/pollution")
                .build();
        Response response = null;
        try {
            response = httpClient.newCall(request).execute();
            String jsonData = response.body().string();
            JSONObject object = new JSONObject(jsonData);
            String aDate = object.getString("date");
            JSONObject object2 = object.getJSONObject("global");
            //JSONObject subObject = (JSONObject) object2.get(0);
            int indice11 = object2.getInt("indice");
            String url = object2.getString("url_carte");
            object2 = object.getJSONObject("no2");
            int indice22 = object2.getInt("indice");
            object2 = object.getJSONObject("o3");
            int indice33 = object2.getInt("indice");
            object2 = object.getJSONObject("pm10");
            int indice44 = object2.getInt("indice");
            indiceGlobal.setText("Date : "+aDate);
            indiceNo2.setText("indice global : "+indice11);
            indiceO3.setText("indice no2 : "+indice22);
            indicePm10.setText("indice o3 : "+indice33);
            date.setText("indice pm10 : " +indice44 + "\n\n Pour plus d'informations, rensignez-vous ici : "+url);
        } catch (Exception e) {
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
                                    Response response = httpClient.newCall(request).execute();
                                    String jsonData = response.body().string();
                                    JSONObject object = new JSONObject(jsonData);
                                    String aDate = object.getString("date");
                                    JSONObject object2 = object.getJSONObject("global");
                                    //JSONObject subObject = (JSONObject) object2.get(0);
                                    int indice11 = object2.getInt("indice");
                                    String url = object2.getString("url_carte");
                                    object2 = object.getJSONObject("no2");
                                    int indice22 = object2.getInt("indice");
                                    object2 = object.getJSONObject("o3");
                                    int indice33 = object2.getInt("indice");
                                    object2 = object.getJSONObject("pm10");
                                    int indice44 = object2.getInt("indice");
                                    indiceGlobal.setText("Date : "+aDate);
                                    indiceNo2.setText("indice global : "+indice11);
                                    indiceO3.setText("indice no2 : "+indice22);
                                    indicePm10.setText("indice o3 : "+indice33);
                                    date.setText("indice pm10 : " +indice44 + "\n\n Pour plus d'informations, rensignez-vous ici : "+url);
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