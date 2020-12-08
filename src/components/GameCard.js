import React from 'react';
import { Link } from 'react-router-dom';

export const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <Link to={`/games/${game.slug}`} />
      <div className="game-cover">
        <img src={game.background_image} alt="game-cover" />
      </div>
    </div>
  )
}