import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GamePage } from 'components/GamePage';
import { GamesLibrary } from 'components/GamesLibrary';
import { Header } from 'components/Header';
import { FavouriteGames } from 'components/FavouriteGames'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <FavouriteGames />
          <GamesLibrary />
        </Route>
        <Route path="/games/:slug" exact>
          <GamePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
