import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <p className="text-red-600 text-xl">{message}</p>
        <button
          onClick={onRetry}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Retry
        </button>
      </div>
    </div>
  );
}