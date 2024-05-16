// src/App.jsx
import StarshipSearch from './components/StarshipSearch.jsx';
import StarshipList from './components/StarshipList.jsx';
import starshipCard from './components/StarshipCard.jsx';
import starshipService from './services/StarshipService.js';
import { useEffect, useState } from 'react';

const App = () => {
  const [starships, setStarships] = useState([]);

useEffect(() => {
  const dataFetch = async () => {
    const data = await starshipService.index();
      // while (index=0 index <= data.length; index++){
      //   setStarships(data[index]);
      // }
    // setStarships({
    //   name: starshipCard.name,
    //   model: starshipCard.model,
    //   class: starshipCard.starship_class,
      
    // })
    console.log(data)
  }
  dataFetch();
}, []);
//^dependency array, use with useEffect


const handleInputChange = (e) => {
  setStarships(e.target.value);
}

  return (
    <>
    <h1>Star Wars API</h1>
    <p> Search Term:
      <input type='text' onChange={handleInputChange}/>
      <button onClick={fetch}>Search</button>
    </p>
    <p> Number of Results:</p>
    <section>
      {starships.map((starship, index) => {
        return (
          <StarshipList
          key={index}
          />
        )
      
      })}
   
    </section>
    //
    </>
  );
}


export default App;