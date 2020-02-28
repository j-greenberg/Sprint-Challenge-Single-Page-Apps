import React from "react";
import CharacterList from "./CharacterList";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <h2><Link to="/">Home</Link></h2>
      <h2><Link to="/characters">Characters</Link></h2>
        </header>
  );
}
