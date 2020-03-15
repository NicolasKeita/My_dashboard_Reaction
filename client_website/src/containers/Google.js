
import React, { useState, useEffect } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Card } from '@material-ui/core';

import axios from 'axios';

export default function Lol(props) {
  const [str, setStr] = useState("loading");

  useEffect(() => {
     setInterval(handleSubmit, 10000)
     //handleSubmit()
  // Met à jour le titre du document via l’API du navigateur
});
function handleSubmit() {
      axios.get(('http://localhost:8080/getURL_toConnectToGoogle'), res => {

     })
     .then((res) => {
         console.log(res);
         console.log(res.data);
         setStr(res.data)
     })
  }
  handleSubmit();
  return (
    <div className="Google">
    <h1> follow this link : </h1>
            <h1>{
                str
            }</h1>

    </div>
  );
}
