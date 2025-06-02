
import { useState } from "react";

const ProfileSection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative flex justify-center mb-8 lg:mb-0">
      <div className="relative">
        {/* Animated border container */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-spin-slow opacity-75 blur-sm"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"></div>
        
        {/* Profile image container */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-md bg-white/10 shadow-2xl transform hover:scale-105 transition-all duration-500">
          {!imageError ? (
            <img
              src="/placeholder.svg"
              alt="Sanjana Priya Darshini"
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-purple-600">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👩‍💻</div>
                <p className="font-semibold">Sanjana Priya Darshini</p>
                <p className="text-sm opacity-80">Aspiring Developer</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Floating tech icons */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0s' }}>
          <span className="text-white text-xl">💻</span>
        </div>
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
          <span className="text-white text-xl">🚀</span>
        </div>
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
          <span className="text-white text-xl">🧠</span>
        </div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}>
          <span className="text-white text-xl">⚙️</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
