import React from 'react';

import Ghosts from '../assets/ghosts.gif'

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Loading...</h1>
      <img className="ghosts" src={Ghosts} alt="pacman ghosts" />
    </div>
  );
};