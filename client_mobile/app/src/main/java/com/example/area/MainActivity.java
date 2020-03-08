package com.example.area;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.os.StrictMode;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private EditText editTextMail;
    private EditText editTextMdp;
    private Button btnSubmit;
    private Button btnRegister;
    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        editTextMail = findViewById(R.id.editTextMail);
        editTextMdp = findViewById(R.id.editTextMdp);
        btnSubmit = findViewById(R.id.btnSubmit);
        btnRegister = findViewById(R.id.btnRegister);
        textView = findViewById(R.id.textView);

        btnSubmit.setOnClickListener(this);
        btnRegister.setOnClickListener(this);
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

    @Override
    public void onClick(View v) {
        if (v == btnRegister) {
            Intent registerArea = new Intent(this, RegisterActivity.class);
            this.startActivity(registerArea);
        } else {
            StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
            StrictMode.setThreadPolicy(policy);

            String mail = editTextMail.getText().toString();
            String passwd = editTextMdp.getText().toString();


            if (mail.length() > 0 && passwd.length() > 0) {
                //APPEL SERVEUR
                final OkHttpClient httpClient = new OkHttpClient();
                RequestBody formBody = new FormBody.Builder()
                        .add("email", mail)
                        .add("password", passwd)
                        .build();
                final Request request = new Request.Builder()
                        .url("http://10.0.2.2:3000/users")
                        .post(formBody)
                        .build();
                Response response;

                try {
                        //textView.setText("Before exec");
                        response = httpClient.newCall(request).execute();
                        //textView.setText("After exec");
                        //Thread.sleep(5000);
                        //textView.setText(response.body().string());
                        if ("succes".equals(response.body().string())) {
                            Toast.makeText(getApplicationContext(), "CONNECTED", Toast.LENGTH_SHORT).show();
                            Intent intentArea = new Intent(this, SecondActivity.class);
                            this.startActivity(intentArea);
                        } else {
                            Toast.makeText(getApplicationContext(), "FALSE", Toast.LENGTH_SHORT).show();
                        }
                    } catch(Exception e) {
                        e.printStackTrace();
                        Toast.makeText(getApplicationContext(), e.toString(), Toast.LENGTH_LONG).show();
                    }

            }
        }
    }
}
