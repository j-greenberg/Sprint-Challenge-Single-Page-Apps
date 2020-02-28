import React, { useState } from "react";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props)
 
    const [characters, setCharacters] = useState(props);
    const [query, setQuery] = useState([]);

    const handleChanges = (event) => {
      console.log(event.target.value);
      setQuery(event.target.value);
    }

    const newCharacters = characters.filter(object =>{
      object.name.toLowerCase().includes(query.toLowerCase())
    });
      setCharacters(newCharacters);

  return (
    <section className="search-form">
    <form>
      <label>Search</label> 
      <input type="text" name="search" onChange={handleChanges}></input>
    </form>
      {characters.map( props => (
        <CharacterCard key={props.id} name={props.name} status={props.status} species={props.species} type={props.type}
        gender={props.gender} origin={props.origin.name} location={props.location.name} image={props.image} 
        url={props.url} created={props.created}/>
        )
      )}
    </section>
  );
}
