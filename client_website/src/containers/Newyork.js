
import React, { useState, useEffect } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {  Card } from '@material-ui/core';

import axios from 'axios';

export default function Newyork(props) {
  const [str, setStr] = useState("loading");
  const [str2, setStr2] = useState("loading");

  useEffect(() => {
     setInterval(handleSubmit, 5000)
     //handleSubmit()
  // Met à jour le titre du document via l’API du navigateur
});
function handleSubmit() {
      axios.get(('http://localhost:8080/time'), res => {

     })
     .then((res) => {
         console.log(res);
         console.log(res.data.currentDateTime);
         setStr(res.data.currentDateTime)
         console.log(res.data.dayOfTheWeek);
         setStr2(res.data.dayOfTheWeek)
     })
  }
  handleSubmit();
  return (
    <div className="Newyork">
    <h1> curentlly day at New york : {str2} </h1>

        <Card style={{ width: '30rem' }}>
            <h1>{
                str
            }</h1>

        </Card>

    </div>
  );
}
