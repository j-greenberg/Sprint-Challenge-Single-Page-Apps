import React from "react";
import styled from "styled-components";

const AlienCard = styled.div`
    border: 0.5px solid black;
    border-radius: 10;
    background: white;
    color: black;
    width: 300px; 
    max-height: 400px; 
    margin: 1%;
    opacity: 1;
`;

const CharacterTitle = styled.div`
    font-size: 3.2rem;
`;

const CharacterSubTitle = styled.div`
    font-size: 2.6rem;
`;


export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.image}/>
      <h1>Name: {props.name}</h1>
      <h2>Status: {props.status}</h2>
      <p>Species: {props.species}</p>
      <p>Type{props.type}</p>
      <p>Gender{props.gender}</p>]
      {/* <p>Origin{props.origin.name}</p>
      <p>Location{props.location.name}</p> */}
      <p>URL: {props.url}</p>
      <p>Created: {props.created}</p>
    </div>
    )
}
