import React, { useEffect, useState } from 'react';

import { GameCard } from './GameCard';

export const GamesLibrary = () => {
  const [gamesList, setGamesList] = useState([]);
  const [gamesCount, setGamesCount] = useState(0);

  useEffect(() => {
    const GAMES_URL = 'https://express-vapour.herokuapp.com/games';
    fetch(GAMES_URL)
      .then((response) => response.json())
      .then((json) => {
        setGamesList(json.results);
        setGamesCount(json.total);
      })
      .catch((error) => {
        console.error('Request failed', error);
      });
  }, []);

  return (
    <>
      <section className="stats-card">
        <div className="stats-card-container">
          <h1>Games Owned</h1>
          <h2>{gamesCount}</h2>
        </div>
      </section>
      <h1 className="library-title">Library</h1>
      <section className="game-list-container">
        {gamesList.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </section>
    </>
  );
};
