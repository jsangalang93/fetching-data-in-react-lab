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

const dataFetch = async () => {
  console.log(dataFetch);
}

  return (
    <>
    <h1>Star Wars API</h1>
    <StarshipSearch handleInputChange={handleInputChange} />
    <p> Number of Results:</p>
    <section>
      <StarshipList dataFetch={dataFetch} starships={starships} />
      
    </section>
    //
    </>
  );
}


export default App;