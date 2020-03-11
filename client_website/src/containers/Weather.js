
import React, { useState } from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, TextField, Checkbox } from '@material-ui/core';

import axios from 'axios';

export default function Weather(props) {
  const [city, setCity] = useState("loading");
  //const [send_mail, setMail1] = useState("true");
  const send_mail = "true"
  const [receiver_mail, setMail2] = useState("loading");


  function handleChangeCity(City)  {
    setCity(City)
  }

  function handleChangeMail2(Mail)  {
    setMail2(Mail)
  }


function handleSubmit() {
      axios.post(('http://localhost:8080/weather'), {
          city: city,
          receiver_mail: receiver_mail,
          send_mail: send_mail

     })
     .then((res) => {
         console.log(res);
         console.log(res.data);
     })
  }
  return (
    <div className="Paris">
            <TextField id="city" label="city" onChange={input => handleChangeCity(input.target.value)}/>
            {/*<Checkbox
                  value="send_mail"
                  inputProps={{ 'aria-label': 'Checkbox A' }}
                />*/}
            <TextField id="receiver_mail" label="receiver_mail" onChange={input => handleChangeMail2(input.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>




    </div>
  );
}
