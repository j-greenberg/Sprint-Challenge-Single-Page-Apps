import React, { useState, useEffect} from "react";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";

export default function SearchForm (props) {

    const [query, setQuery] = useState("");

    const handleChanges = (event) => {
      props.setQuery(event.target.value);
      setQuery(event.target.value);
      console.log("Search Query: ", query);
    }
  
    return (
     <section className="search-form">
      <form>
        <label>Search</label> 
        <input type="text" name="search" placeholder="Search" value={query} onChange={handleChanges}/>
      </form>
     </section>
    );
}