import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const AlienList = styled.div`
    border: 0.5px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 10;
    background: white;
    color: black;
    max-height: 100%; 
    margin: 1%;
    opacity: 1;
    padding: 1%;
    p{
      font-size: 1.4rem;
    }
`;

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
      <AlienList>
      {data.map( props => (
        <CharacterCard 
        key={props.id} 
        name={props.name} 
        status={props.status} 
        species={props.species} 
        type={props.type}
        gender={props.gender} 
        image={props.image} 
        created={props.created}/>
        )
      )}
      </AlienList>
    </section>
  );
}