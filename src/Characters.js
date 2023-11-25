import React from 'react';
import { Link } from 'react-router-dom';

const Character = () => {
  const [items, setItems] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((json) => {
        const randomIndex = Math.floor(Math.random() * json.results.length);
        setItems([json.results[randomIndex]]);
        setIsDataLoaded(true);
      })
      .catch((error) => {
        console.error('Failure fetching data: ', error);
        setIsDataLoaded(true);
      });
  }, []);

  if (!isDataLoaded) {
    return (
      <div>
        <h1> LOADING DATA .... </h1>
      </div>
    );
  }

  return (
    <>
    <Link to="/">
        <button>TicTacToe</button>
    </Link>
    <Link to="/api">
        <button>Characters API</button>
    </Link>

    
    <div className="App">
      <h1>RANDOM Rick and Morty Character</h1>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <p>Name: {item.name}</p>
          <p>Status: {item.status}</p>
          <p>Species: {item.species}</p>
        </div>
      ))}
      
    </div>
    </>
    
  );
};

export default Character;
