import { GamePage } from 'components/GamePage';
import { GamesLibrary } from 'components/GamesLibrary';
import { Header } from 'components/Header';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <GamesLibrary />
        </Route>
        <Route path="/games/:slug" exact>
          <GamePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
