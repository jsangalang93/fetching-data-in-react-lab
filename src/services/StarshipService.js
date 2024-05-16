//the one page that talks to APIasync 
import { useState } from 'react';
const BASE_URL = 'https://swapi.dev/api/'

const index = async () => {
    const res = await fetch(BASE_URL + '/starships');
    const data = await res.json();
    const dataArray =[]
    console.log(data);
    return data
}

export default {index};