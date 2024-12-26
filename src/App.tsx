import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { GameGrid } from './components/GameGrid';
import { Pagination } from './components/Pagination';
import { SearchBar } from './components/SearchBar';
import { GameModal } from './components/GameModal';
import { useGames } from './hooks/useGames';
import { Game } from './types/game';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const { games, loading, error, hasNextPage, hasPreviousPage } = useGames(currentPage, searchQuery);

  if (error) {
    return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <GameGrid 
              games={games} 
              onPlayGame={setSelectedGame}
            />
            <Pagination
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              hasNextPage={hasNextPage}
              hasPreviousPage={hasPreviousPage}
            />
          </>
        )}
      </main>

      <Footer />

      {selectedGame && (
        <GameModal 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
        />
      )}
    </div>
  );
}

export default App;