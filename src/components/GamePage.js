import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// eslint-disable-next-line import/named
import { Loading } from './Loading';
import { NotFound } from './NotFound';

export const GamePage = () => {
  const { slug } = useParams();
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const GAME_URL = `https://express-vapour.herokuapp.com/games/${slug}`;
    fetch(GAME_URL)
      .then((response) => response.json())
      .then((json) => {
        setGame(json)
        setTimeout(() => setLoading(false), 1800)
      })
      .catch((error) => {
        console.error('Request Failed', error)
      })
  }, [slug]);

  if (!game.slug) {
    return (
      <NotFound />
    );
  }

  return (
    <>
      {loading === false ? (
        <section className="game-page">
          <div className="details-container">
            <h1>{game.name}</h1>
            <img className="game-screenshot" src={game.background_image} alt={game.name} />
            <h1>{`Release date: ${game.released}`}</h1>
            <h2>{`Community rating: ${game.community_rating} /10`}</h2>
          </div>
          <Link className="back-link" to="/">
            <h2> BACK TO GAMES LIBRARY </h2>
          </Link>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};