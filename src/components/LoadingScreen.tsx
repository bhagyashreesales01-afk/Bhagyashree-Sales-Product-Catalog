import React from 'react';

interface LoadingScreenProps {
  progress?: number; // optional progress percentage
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress = 0 }) => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 animate-fadeIn">
      <div className="flex items-center justify-center space-x-2 relative mb-4">
        <div className="absolute -inset-6 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-600 rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 160}ms`,
              animationDuration: '1.4s',
            }}
          ></div>
        ))}
      </div>

      <p className="text-gray-700 text-sm lg:text-base font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">
  Product Catalog Loading...
</p>


      {/* <p className="text-gray-500 text-xs lg:text-sm">{progress}%</p> */}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out forwards;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
