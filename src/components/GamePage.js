import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const GamePage = () => {
  const { gameSlug } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    const GAME_URL = `https://express-vapour.herokuapp.com/games/${gameSlug}`;
    fetch(GAME_URL)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setGame(json)
      })
      .catch((error) => {
        console.error('Request Failed', error)
      })
  }, [gameSlug]);

  return (
    <>
      <section className="game-page">
        <div className="details-container">
          <h1>{game.name}</h1>
        </div>
      </section>
    </>
  );
};