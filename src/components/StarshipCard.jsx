const BASE_URL = 'https://swapi.dev/api/'
import { useState } from 'react';

const StarshipCard = () => {
    return (
        <>
        {props.starships.map((starship, index) => {
            return (
                <div key={index}>
                    <h2>{starship.name}</h2>
                    <p>Class: {starship.starship_class}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Model: {starship.model}</p>
                </div>
            )

        console.log(props.starships)})}
        </>
        
    )
  }


export default {StarshipCard};