import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50 animate-fadeIn">
      <div className="flex items-center justify-center space-x-2 relative">
        {/* Glow background */}
        <div className="absolute -inset-6 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>

        {/* Dot 1 */}
        <div 
          className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-600 rounded-full animate-bounce"
          style={{
            animationDelay: '0ms',
            animationDuration: '1.4s'
          }}
        ></div>
        
        {/* Dot 2 */}
        <div 
          className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-600 rounded-full animate-bounce"
          style={{
            animationDelay: '160ms',
            animationDuration: '1.4s'
          }}
        ></div>
        
        {/* Dot 3 */}
        <div 
          className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-600 rounded-full animate-bounce"
          style={{
            animationDelay: '320ms',
            animationDuration: '1.4s'
          }}
        ></div>
      </div>
      
      {/* Loading text with shimmer */}
      <div className="absolute bottom-1/3 text-center">
        <p className="text-gray-700 text-sm lg:text-base font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">
          Product Catalog Loading...
        </p>
      </div>

      {/* Extra keyframes */}
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