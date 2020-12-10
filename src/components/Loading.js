import React from 'react';

import Ghosts from '../assets/ghosts.gif'

export const Loading = () => {
  return (
    <div className="loading">
      <h1>Loading...</h1>
      <img className="ghosts" src={Ghosts} alt="pacman ghosts" />
    </div>
  );
};