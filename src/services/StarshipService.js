//the one page that talks to APIasync 
import { useState } from 'react';
import StarshipSearch from '../components/StarshipSearch';
const BASE_URL = 'https://swapi.dev/api/'
const index = async () => {
    const res = await fetch(BASE_URL + '/starships');
    const data = await res.json();
    console.log(data);
    return data.results
}

export default {index};