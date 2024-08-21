import React from 'react';

function ComingSoonPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-700 text-white px-4">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8">
          <span className="text-yellow-400">COMFORT</span>TRIP
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold animate-fade-in">
          Coming Soon
        </h1>
        <div className="mt-4 text-base sm:text-lg lg:text-xl animate-fade-in-delay">
          We're working hard to launch something amazing. Stay tuned!
        </div>
      </div>
    </div>
  );
}

export default ComingSoonPage;
