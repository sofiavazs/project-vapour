import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const GamePage = () => {
  const { slug } = useParams();
  const [game, setGame] = useState([]);

  useEffect(() => {
    const GAME_URL = `https://express-vapour.herokuapp.com/games/${slug}`;
    fetch(GAME_URL)
      .then((response) => response.json())
      .then((json) => {
        setGame(json)
        console.log(json)
      })
      .catch((error) => {
        console.error('Request Failed', error)
      })
  }, [slug]);

  return (
    <>
      <section className="game-page">
        <div className="details-container">
          <h1>{game.name}</h1>
          <img className="game-screenshot" src={game.background_image} alt={game.name} />
          <p className="release-date">{`Release date: ${game.released}`}</p>
          <p className="game-rating">{`Community rating: ${game.community_rating} /10`}</p>
        </div>
      </section>
    </>
  );
};