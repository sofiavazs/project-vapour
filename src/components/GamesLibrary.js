import React, { useEffect, useState } from 'react';

import { GameCard } from './GameCard';

export const GamesLibrary = () => {
  const [gamesList, setGamesList] = useState([]);

  useEffect(() => {
    const GAMES_URL = 'https://express-vapour.herokuapp.com/games';
    fetch(GAMES_URL)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setGamesList(json.results)
      })
      .catch((error) => {
        console.error('Request failed', error)
      })
  }, []);

  return (
    <>
      <section className="game=list-container">
        {gamesList.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </section>
    </>
  );
};
