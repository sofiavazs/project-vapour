import React from 'react';
import { Link } from 'react-router-dom';

import Ghosts from '../assets/ghosts.gif'

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Hmmm... interesting! I do not own that game!<span role="img" aria-label="ups emoji"> 🧐 </span></h1>
      <img className="ghosts" src={Ghosts} alt="pacman ghosts" />
      <Link to="/">
        <h2 className="back-link">
         Back to Games Library
        </h2>
      </Link>
    </div>
  );
};