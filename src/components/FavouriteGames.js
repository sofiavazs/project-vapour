import React, { useEffect, useState } from 'react';
import { GameCard } from './GameCard';

export const FavouriteGames = () => {
  const [favoritesList, setFavoritesList] = useState([]);

  useEffect(() => {
    const FAVORITES_URL = 'https://express-vapour.herokuapp.com/favorites';
    fetch(FAVORITES_URL)
      .then((response) => response.json())
      .then((json) => {
        setFavoritesList(json.results)
      })
      .catch((error) => {
        console.error('Request failed', error)
      })
  }, []);

  return (
    <>
      <h1 className="favorites-header-text">Favourite Games</h1>
      <section className="favorites-container">
        {favoritesList.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </section>
    </>
  )
}
