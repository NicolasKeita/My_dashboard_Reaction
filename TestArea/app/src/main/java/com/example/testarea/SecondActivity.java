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

import org.json.JSONObject;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class SecondActivity extends AppCompatActivity implements View.OnClickListener {

    private Button launchBitcoin;
    private Button launchLol;
    private Button launchNY;
    private Button launchWeather;
    private Button launchPollution;
    private Button launchSteam;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        launchBitcoin = (Button) findViewById(R.id.buttonBitcoin);
        launchLol = (Button) findViewById(R.id.buttonLol);
        launchNY = (Button) findViewById(R.id.buttonNY);
        launchWeather = (Button) findViewById(R.id.buttonWeather);
        launchPollution = (Button) findViewById(R.id.buttonPollution);
        launchSteam = (Button) findViewById(R.id.buttonSteam);

        launchBitcoin.setOnClickListener(this);
        launchLol.setOnClickListener(this);
        launchNY.setOnClickListener(this);
        launchWeather.setOnClickListener(this);
        launchPollution.setOnClickListener(this);
        launchSteam.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        if (v == launchBitcoin) {
            Intent intentArea = new Intent(this, BitcoinActivity.class);
            this.startActivity(intentArea);
        } else if (v == launchLol) {
            Intent intentArea = new Intent(this, LolActivity.class);
            this.startActivity(intentArea);
        } else if (v == launchNY) {
            Intent intentArea = new Intent(this, NYActivity.class);
            this.startActivity(intentArea);
        } else if (v == launchWeather) {
            Intent intentArea = new Intent(this, WeatherActivity.class);
            this.startActivity(intentArea);
        } else if (v == launchPollution) {
            Intent intentArea = new Intent(this, PollutionActivity.class);
            this.startActivity(intentArea);
        } else if (v == launchSteam) {
            Intent intentArea = new Intent(this, SteamActivity.class);
            this.startActivity(intentArea);
        }
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
