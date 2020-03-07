
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
      axios.get(('/lol'), res => {

     })
     .then((res) => {
         console.log(res);
         console.log(res.data.services[0].status);
         setStr(res.data.services[0].status)
     })
  }
  handleSubmit();
  return (
    <div className="Lol">
    <h1> league of legend serveur's status in EUW : </h1>

        <Card style={{ width: '18rem' }}>
            <h1>{
                str
            }</h1>

        </Card>

    </div>
  );
}
