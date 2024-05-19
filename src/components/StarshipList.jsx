import {useState, useEffect} from 'react';
import StarshipCard from './StarshipCard.jsx';

const starShipList = (props) => {
    return (
        <>
        {props.starships.map((starship, index) => {
            return (
                <div key={index}>
                    <h2>{starship.name}</h2>
                    <p>Class: {starship.starship_class}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Model: {starship.model}</p>
                    {/* <StarshipCard starship={starship} index={index} /> */}
                </div>
            )

        console.log(props.starships)})}
        </>
        
    )
  }




export default starShipList;