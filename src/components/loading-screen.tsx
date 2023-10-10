import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center" style={{ height: '100vh' }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center animate-pulse">
        <div className="text-center text-xl">Loading</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
