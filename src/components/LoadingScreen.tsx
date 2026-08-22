import React from 'react';

interface LoadingScreenProps {
  progress?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Loading dots */}
        <div className="mb-4 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-3 w-3 rounded-full bg-blue-600 animate-bounce"
              style={{
                animationDelay: `${i * 120}ms`,
                animationDuration: '0.9s',
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <p className="text-sm font-semibold text-blue-600 lg:text-base">
          Loading products...
        </p>

        {/* Optional progress */}
        {progress > 0 && progress < 100 && (
          <div className="mt-3 h-1 w-32 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-200"
              style={{
                width: `${Math.min(100, Math.max(0, progress))}%`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
