import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import Bitcoin from "./containers/Bitcoin"
import Lol from "./containers/Lol"
import Steam from "./containers/Steam"
import Paris from "./containers/Paris"
import Newyorktime from "./containers/Newyork"
import Nasa from "./containers/Nasa"
import Trello from "./containers/Trello"
import Weather from "./containers/Weather"
import Google from "./containers/Google"



export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/Bitcoin" component={Bitcoin} />
      <Route path="/Lol" component={Lol} />
      <Route path="/Steam" component={Steam} />
      <Route path="/Paris" component={Paris} />
      <Route path="/New-york-time" component={Newyorktime} />
      <Route path="/Nasa" component={Nasa} />
      <Route path="/Weather" component={Weather} />
      <Route path="/Home" component={Home} />
      <Route path="/Google" component={Google} />
      <Route path="/Trello" component={Trello} />


    </Switch>
  );
}
