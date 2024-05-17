// src/App.jsx
import StarshipSearch from './components/StarshipSearch.jsx';
import StarshipList from './components/StarshipList.jsx';
import starshipCard from './components/StarshipCard.jsx';
import starshipService from './services/StarshipService.js';
import { useEffect, useState } from 'react';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [search, setSearch] = useState ('');


//V for starshipList
useEffect(() => {
        
  const dataFetch = async () => {
  const data = await starshipService.index();
  setStarships(data);
  console.log(data);
  }
  dataFetch();
}, []);
//^dependency array, use with useEffect


const handleInputChange = (e) => {
  console.log(e.target.value);
  setSearch(e.target.value);
  
}

const searchInq = async () => {
  const URL = `https://swapi.dev/api/starships/?search=${search}`;
    //todo use an array to iterate through the string to put a %20 in every space involved
  const res = await fetch (URL);
  console.log (URL);
  const returnData = await res.json();
  console.log(returnData);
}

  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch handleInputChange={handleInputChange} searchInq = {searchInq} />
    <p> Number of Results:</p>
    <section>
      <starshipCard starships={starships} />
      <StarshipList starships={starships} />

      
    </section>
    //
    </>
  );
}


export default App;