
import React, { useState, useEffect } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Card } from '@material-ui/core';
import axios from 'axios';

export default function Steam(props) {
  const [str, setStr] = useState([]);

  useEffect(() => {
     setInterval(handleSubmit, 10000)
     //handleSubmit()
  // Met à jour le titre du document via l’API du navigateur
});
function handleSubmit() {
      axios.get(('http://localhost:8080/steamNews'), res => {

     })
     .then((res) => {
         console.log(res);
         console.log(res.data.appnews.newsitems.length);
         setStr(res.data.appnews.newsitems)
     })
  }
  handleSubmit();
  return (
    <div className="Steam">
    <h1> Most recent steam News : </h1>

        {str.map((val) => {
            return (
                <Card style={{ width: '70%' }}>
                    <h1>{val.title}</h1>
                    <h1>{val.url}</h1>
                    <h1> </h1>
                </Card>
            )})
        }

    </div>
  );
}
