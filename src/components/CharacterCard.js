import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <img src={props.image}/>
      <h1>Name: {props.name}</h1>
      <h2>Status: {props.status}</h2>
      <p>Species: {props.species}</p>
      <p>Type{props.type}</p>
      <p>Gender{props.gender}</p>]
      <p>Origin{props.origin.name}</p>
      <p>Location{props.location.name}</p>
      <p>URL: {props.url}</p>
      <p>Created: {props.created}</p>
    </div>
    )
}
