
import React, { useState, useEffect } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Card } from '@material-ui/core';

import axios from 'axios';

export default function Trello(props) {
  const [str, setStr] = useState([]);

  useEffect(() => {
     setInterval(handleSubmit, 10000)
     //handleSubmit()
  // Met à jour le titre du document via l’API du navigateur
});
function handleSubmit() {
      axios.get(('http://localhost:8080/trello'), res => {

     })
     .then((res) => {
         console.log(res);
         console.log(res.data.length);
         setStr(res.data)
     })
  }
  handleSubmit();
  return (
    <div className="Trello">
    <h1> All actual trello board : </h1>

        {str.map((val) => {
            return (
                <Card style={{ width: '18rem' }}>
                    <h1>{val.name}</h1>
                </Card>
            )})
        }

    </div>
  );
}
