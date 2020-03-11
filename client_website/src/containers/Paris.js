
import React, { useState, useEffect } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import axios from 'axios';

export default function Paris(props) {
  const [str, setStr] = useState("loading");
  const [str2, setStr2] = useState("loading");
  const [str3, setStr3] = useState("loading");
  const [str4, setStr4] = useState("loading");
  const [str5, setStr5] = useState("loading");
  const [str6, setStr6] = useState("loading");



  useEffect(() => {
     setInterval(handleSubmit, 100000)
     //handleSubmit()
  // Met à jour le titre du document via l’API du navigateur
});
function handleSubmit() {
      axios.get(('http://localhost:8080/weather'), res => {

     })
     .then((res) => {
         console.log(res);
         console.log(res.data);
         setStr(res.data.weather[0].main)
     })
     axios.get(('/pollution'), res => {

    }).then((res) => {
        console.log(res);
        console.log(res.data);
        setStr2(res.data.global.indice)
        setStr3(res.data.no2.indice)
        setStr4(res.data.o3.indice)
        setStr5(res.data.pm10.indice)
        setStr6(res.data.global.url_carte)

    })
  }
  handleSubmit();
  return (
    <div className="Paris">
    <h1> Actual weather on Paris : {str}</h1>
    <h1> Actual polution on Paris :</h1>
    <h1> global : {str2}</h1>
    <h1> no2 : {str3}</h1>
    <h1> o3 : {str4}</h1>
    <h1> pm10 : {str5}</h1>
    <h1> For more information, visit this website</h1>
    <h1> {str6}</h1>




    </div>
  );
}
