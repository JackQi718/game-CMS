import React from 'react';
import { Game } from '../types/game';
import { GameCard } from './GameCard';

interface GameGridProps {
  games: Game[];
  onPlayGame: (game: Game) => void;
}

export function GameGrid({ games, onPlayGame }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard 
          key={game.id} 
          game={game} 
          onPlay={onPlayGame}
        />
      ))}
    </div>
  );
}