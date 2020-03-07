
import React, { useState, useEffect } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {  Card } from '@material-ui/core';
import axios from 'axios';

export default function Bitcoin(props) {
  const [str, setStr] = useState("loading");

  useEffect(() => {
     setInterval(handleSubmit, 1000)
     //handleSubmit()
  // Met à jour le titre du document via l’API du navigateur
});
function handleSubmit() {
      axios.get(('/bitcoin'), res => {

     })
     .then((res) => {
         console.log(res);
         console.log(res.data.to_quantity);
         setStr(res.data.to_quantity)
     })
  }
  handleSubmit();
  return (
    <div className="Bitcoin">
    <h1> 1 bitcoin value in eur : </h1>

        <Card style={{ width: '18rem' }}>
            <h1>{
                str
            }</h1>

        </Card>

    </div>
  );
}
