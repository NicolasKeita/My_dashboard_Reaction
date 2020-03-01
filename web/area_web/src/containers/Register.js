import React, { useState } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, Card, TextField } from '@material-ui/core';
import {
  Route,
} from "react-router-dom";
import "./Register.css";
import axios from 'axios';
import Home from './Home'

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
      console.log("lol")
      return (
      axios.post('/register', {
          email: email,
          password: password
       })
       .then(res => {
         console.log(res);
         console.log(res.data);
         if (res.data === 'succes') {
             window.location.href='/Home';
         }
       })
   )
  }

  function handleChangeEmail(Email)  {
    setEmail(Email)
  }

  function handleChangePassword(Password)  {
    setPassword(Password)
  }

  return (
    <div className="register">
        <Card style={{ width: '18rem' }}>
            <TextField id="email" label="email" onChange={input => handleChangeEmail(input.target.value)}/>
            <TextField id="password" label="password" onChange={input => handleChangePassword(input.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>

        </Card>
        <Route path="/Home" component={Home} />

    </div>
  );
}
