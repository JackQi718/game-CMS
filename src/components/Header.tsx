import React from 'react';
import { Gamepad2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">GamePix Arena</h1>
        </div>
      </div>
    </header>
  );
}