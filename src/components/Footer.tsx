import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-500">
          Powered by GamePix © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}