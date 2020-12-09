import React from 'react';
import { Link } from 'react-router-dom';

export const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <Link to={`/games/${game.slug}`} />
      <h2>{game.name}</h2>
      <div className="game-cover">
        <img className="game-card-image" src={game.background_image} alt="game-cover" />
      </div>
    </div>
  )
}