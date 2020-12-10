import React from 'react';
import { Link } from 'react-router-dom';

import Ghosts from '../assets/ghosts.gif';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Hmmm, interesting! I do not own that game! </h1>
      <img className="ghosts" src={Ghosts} alt="pacman ghosts" />
      <Link className="back-link" to="/">
        <h2> BACK TO GAMES LIBRARY </h2>
      </Link>
    </div>
  );
};