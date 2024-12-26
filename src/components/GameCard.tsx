import React from 'react';
import { Star, PlayCircle } from 'lucide-react';
import { Game } from '../types/game';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
}

export function GameCard({ game, onPlay }: GameCardProps) {
  const qualityPercentage = Math.round(game.quality_score * 100);

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl">
      <div className="relative aspect-video">
        <img
          src={game.banner_image}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={() => onPlay(game)}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transform scale-90 group-hover:scale-100 transition-all"
          >
            <PlayCircle className="w-5 h-5" />
            Play Now
          </button>
        </div>
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>{qualityPercentage}%</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-1">{game.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{game.description}</p>
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
          {game.category}
        </span>
      </div>
    </div>
  );
}