import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { GamePage } from './components/GamePage';
import { GamesLibrary } from './components/GamesLibrary';
import { Header } from './components/Header';
import { FavouriteGames } from './components/FavouriteGames'
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';

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
        <Route path="/404">
          <Loading />
        </Route>
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
