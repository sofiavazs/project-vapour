import React from 'react';
import { Link } from 'react-router-dom';

export const GameCard = ({ game }) => {
  return (
    <>
      <Link to={`/games/${game.slug}`}>
        <div className="game-card">
          <h2>{game.name}</h2>
          <div className="card-cover">
            <img className="game-card-image" src={game.background_image} alt="game-cover" />
          </div>
        </div>
      </Link>
    </>
  );
};