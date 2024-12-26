import React, { useEffect } from 'react';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import { Game } from '../types/game';
import { generateGameMetaTags } from '../utils/seo';

interface GameModalProps {
  game: Game;
  onClose: () => void;
}

export function GameModal({ game, onClose }: GameModalProps) {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  // Update meta tags when game modal opens
  useEffect(() => {
    const metaTags = generateGameMetaTags(game);
    document.title = metaTags.title;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaDescription) metaDescription.setAttribute('content', metaTags.description);
    if (metaKeywords) metaKeywords.setAttribute('content', metaTags.keywords);
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogTitle) ogTitle.setAttribute('content', metaTags.ogTitle);
    if (ogDescription) ogDescription.setAttribute('content', metaTags.ogDescription);
    if (ogImage) ogImage.setAttribute('content', metaTags.ogImage);

    // Restore original meta tags on cleanup
    return () => {
      document.title = 'GamePix Arena - Play Free Online Games';
      // ... restore other meta tags
    };
  }, [game]);

  const modalClass = isFullscreen 
    ? "fixed inset-0 z-50 bg-black"
    : "fixed inset-4 md:inset-16 z-50 bg-white rounded-lg shadow-xl";

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />
      <div className={modalClass}>
        {/* Control Bar */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4 flex justify-between items-center z-10">
          <h2 className="text-white text-lg font-semibold truncate">{game.title}</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? 
                <Minimize2 className="w-5 h-5 text-white transition-transform group-hover:scale-110" /> : 
                <Maximize2 className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
              }
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black/75 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              </span>
            </button>
            <button
              onClick={onClose}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 transition-colors"
              title="Close Game"
            >
              <X className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black/75 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
                Close Game
              </span>
            </button>
          </div>
        </div>

        <iframe
          src={game.url}
          title={game.title}
          className="w-full h-full"
          allow="fullscreen"
        />
      </div>
    </>
  );
}