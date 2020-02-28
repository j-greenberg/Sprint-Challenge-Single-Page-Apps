import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  
  // TODO: Add useState to track data from useEffect
  
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  
  useEffect(() => {
  
    const getCharacters = () => {  
      axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')

      .then(response => {
          console.log(response.data.results);
      
          const characters = response.data.results.filter(object =>
          object.name.toLowerCase().includes(query.toLowerCase())
          );
          setData(characters);
      })

      .catch(error => {
        console.log("Error retrieving API: ", error);
      })
    }
    getCharacters();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  return (
    <section className="character-list">
      <SearchForm setQuery={setQuery}/>
      {data.map( props => (
        <CharacterCard 
        key={props.id} 
        name={props.name} 
        status={props.status} 
        species={props.species} 
        type={props.type}
        gender={props.gender} 
        //origin={props.origin.name} 
        //location={props.location.name} 
        image={props.image} 
        url={props.url} 
        created={props.created}/>
        )
      )}
    </section>
  );
}