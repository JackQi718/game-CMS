import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { GameFeed, Game } from '../types/game';

export function useGames(page: number, searchQuery: string = '') {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await axios.get<GameFeed>(
          `https://feeds.gamepix.com/v2/json?sid=8YWA7&pagination=96&page=${page}`
        );
        setGames(response.data.items);
        setHasNextPage(!!response.data.next_url);
        setHasPreviousPage(!!response.data.previous_url);
        setError(null);
      } catch (err) {
        setError('Failed to load games. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [page]);

  const filteredGames = useMemo(() => {
    if (!searchQuery) return games;
    const query = searchQuery.toLowerCase();
    return games.filter(game => 
      game.title.toLowerCase().includes(query) || 
      game.description.toLowerCase().includes(query) ||
      game.category.toLowerCase().includes(query)
    );
  }, [games, searchQuery]);

  return { 
    games: filteredGames, 
    loading, 
    error, 
    hasNextPage, 
    hasPreviousPage 
  };
}