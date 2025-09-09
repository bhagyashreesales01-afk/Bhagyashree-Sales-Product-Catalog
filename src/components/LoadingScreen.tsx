import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="flex items-center justify-center space-x-2">
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
      
      {/* Optional: Loading text */}
      <div className="absolute bottom-1/3 text-center">
        <p className="text-gray-600 text-sm lg:text-base font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;