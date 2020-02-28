import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import axios from "axios";
import {Link} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";

export default function App() {
 
  return (
    <main>
      <Header/>
      <Switch>
        <Route path="/characters" component={SearchForm}/>
        <Route path="/" component={WelcomePage}/>
      </Switch>
      
    </main>
  );
}
