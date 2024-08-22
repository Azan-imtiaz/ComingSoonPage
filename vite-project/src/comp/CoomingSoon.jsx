import React from 'react';

function ComingSoonPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-700 text-white px-4">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Replace the text logo with an image logo */}
        <div className="mb-6 lg:mb-8">
          <img src="/logo.png" alt="Logo" className="h-20 sm:h-24 lg:h-32" />
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
