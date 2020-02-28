import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  
  console.log(props, props.query);
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState(props.query);

  
  useEffect(() => {
 
    const getCharacters = () => {  
      axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
        })
      .catch(error => {
        console.log("Error retrieving API: ", error);
      })
    }

    getCharacters();
 
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, characters);


  return (
    <section className="character-list">
      <SearchForm characters={characters}/>
    </section>
  );
}