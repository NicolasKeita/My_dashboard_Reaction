import React from "react";
import "./Home.css";

import { Button } from '@material-ui/core';


export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
      <Button onClick={() => {window.location.href='/Bitcoin'}}>Bitcoin</Button>
      <Button onClick={() => {window.location.href='/Lol'}}>Lol</Button>
      <Button onClick={() => {window.location.href='/Steam'}}>Steam</Button>
      <Button onClick={() => {window.location.href='/Paris'}}>Paris</Button>
      <Button onClick={() => {window.location.href='/New-york-time'}}>New-york time</Button>
      <Button onClick={() => {window.location.href='/Nasa'}}>Nasa</Button>
      <Button onClick={() => {window.location.href='/Trello'}}>Trello</Button>
      <Button onClick={() => {window.location.href='/Weather'}}>Weather</Button>
      <Button onClick={() => {window.location.href='/Google'}}>Google</Button>


     {/* <Route path="/Bitcoin" component={Bitcoin} />
      <Route path="/Lol" component={Lol} />
      <Route path="/Steam" component={Steam} />
      <Route path="/Paris" component={Paris} />
      <Route path="/New-york-time" component={Newyorktime} />
      <Route path="/Nasa" component={Nasa} />
      <Route path="/Trello" component={Trello} />*/}

      </div>
    </div>
  );
}
