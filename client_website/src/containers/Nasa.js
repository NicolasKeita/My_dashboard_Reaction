
import React, { useState, useEffect } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';

export default function Nasa(props) {
  const [str, setStr] = useState("loading");
  const [str2, setStr2] = useState("loading");
  const [str3, setStr3] = useState("loading");


  useEffect(() => {
     setInterval(handleSubmit, 100000)
     //handleSubmit()
  // Met à jour le titre du document via l’API du navigateur
});
function handleSubmit() {
      axios.get(('http://localhost:8080/pictures'), res => {

     })
     .then((res) => {
         console.log(res);
         console.log(res.data);
         setStr(res.data.title)
         setStr2(res.data.url)
     })
     axios.get(('/mars'), res => {

    }).then((res) => {
        console.log(res);
        console.log(res.data[445].AT.av);
        setStr3(res.data[445].AT.av)
    })
  }
  handleSubmit();
  return (
    <div className="Nasa">
    <h1> Actual average temperature on mars : {str3} C°</h1>
    <h1> Pictures of the day : {str}</h1>
        <img
          src={str2}
          alt=""
          />

    </div>
  );
}
