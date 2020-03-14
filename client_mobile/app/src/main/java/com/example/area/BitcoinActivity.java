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

import org.json.JSONObject;

import java.util.Objects;

import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class BitcoinActivity extends AppCompatActivity implements View.OnClickListener {

    private TextView testBitcoin;

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bitcoin);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        testBitcoin = findViewById(R.id.dispBitcoin);
        final OkHttpClient httpClient = new OkHttpClient();
        final Request request = new Request.Builder()
                .url("http://10.0.2.2:8080/bitcoin")
                .build();
        final Response[] response = new Response[1];
        try {
            response[0] = httpClient.newCall(request).execute();
            String jsonData = Objects.requireNonNull(response[0].body()).string();
            JSONObject object = new JSONObject(jsonData);
            String quantity = object.getString("to_quantity");
            testBitcoin.setText("1€ = "+quantity+" btc");
            final int last = Integer.parseInt(quantity);
        } catch (Exception ignored) {
        }
        Thread t=new Thread(){


            @Override
            public void run(){
                final float[] nb = {0};
                while(!isInterrupted()){
                    final float[] last = {nb[0]};
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
                                    String quantity = object.getString("to_quantity");
                                    testBitcoin.setText("1€ = "+quantity+" btc");
                                    nb[0] = Integer.parseInt(quantity);
                                    if (((nb[0] - last[0]) > 50 && (nb[0] > last[0])) || ((last[0] - nb[0]) > 50 && (last[0] > nb[0]))) {
                                        final OkHttpClient httpClient2 = new OkHttpClient();
                                        final Request request = new Request.Builder()
                                                .url("http://10.0.2.2:8080/send-mail")
                                                .build();
                                        RequestBody formBody = new FormBody.Builder()
                                                .add("messageToSend", "La valeur du bitcoin a changé : "+ quantity + " !")
                                                .add("subject_of_the_mail", "BITCOIN")
                                                .add("receiver_mail", "lilian.brun@epitech.eu")
                                                .build();
                                        Response response2 = null;
                                        response2 = httpClient2.newCall(request).execute();
                                    }
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
