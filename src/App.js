import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import axios from "axios";
import {Link} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import {Switch, Route} from "react-router-dom";

export default function App() {
 
  return (
    <main>
      <Switch>
        <Route path="/">
           <WelcomePage/>
        </Route>
  
         <Header />
      </Switch>
      
    </main>
  );
}
