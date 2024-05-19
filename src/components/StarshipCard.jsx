const BASE_URL = 'https://swapi.dev/api/'
import { useState } from 'react';

const StarshipCard = (props) => {
    return (
        <>
       
            return (
                <>
                <div key={props.index}>
                    <h2>{props.starship.name}</h2>
                    <p>Class: {props.starship.starship_class}</p>
                    <p>Manufacturer: {props.starship.manufacturer}</p>
                    <p>Model: {props.starship.model}</p>
                </div>
                
                
                </>
            )
        </>
        
    )
  }


export default StarshipCard;