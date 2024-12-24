import React from 'react';

function StartTrading() {
  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden flex flex-col items-center justify-center px-4 py-8 w-full">
      
      <div className="text-center mb-10 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold glow-text mb-6">
          Ready to Start Trading?
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Join us today and begin trading with the best. Discover the power of advanced trading tools and a vibrant community.
        </p>
      
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg sm:text-xl font-semibold rounded-lg shadow-lg transform hover:scale-110 transition duration-300 ease-in-out hover:shadow-xl">
          Start Trading Now
        </button>
      </div>

      {/* Water Drop Effect for Name */}
      <div className="relative w-full flex flex-col items-center justify-center mb-16">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          <span className="falling-text glow-text">@tejaskawarkhe</span>
        </div>
      </div>

      {/* Trading Images Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
        {/* First Image (Trading Charts) */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.0nLrQx18mggKxqhk_yjuRwHaE7&pid=Api&P=0&h=180"
            alt="Trading Charts"
            className="w-3/4 sm:w-3/5 md:w-1/2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <p className="text-white text-center mt-4">Real-Time Trading Charts</p>
        </div>

        {/* Second Image (Market Data) */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.7PdvB4HwimojVSmVJa06kwHaE7&pid=Api&P=0&h=180"
            alt="Market Data"
            className="w-3/4 sm:w-3/5 md:w-1/2 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
          <p className="text-white text-center mt-4">Live Market Data</p>
        </div>
      </div>

      {/* Dynamic Floating Particles (Background Animation) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {Array(100)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
              }}
            />
          ))}
      </div>

      {/* Floating Animation Style */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @keyframes glow {
            0% {
              text-shadow: 0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000;
              color: #ff0000;
            }
            25% {
              text-shadow: 0 0 5px #ff9900, 0 0 10px #ff9900, 0 0 15px #ff9900;
              color: #ff9900;
            }
            50% {
              text-shadow: 0 0 5px #33cc33, 0 0 10px #33cc33, 0 0 15px #33cc33;
              color: #33cc33;
            }
            75% {
              text-shadow: 0 0 5px #3399ff, 0 0 10px #3399ff, 0 0 15px #3399ff;
              color: #3399ff;
            }
            100% {
              text-shadow: 0 0 5px #ff00cc, 0 0 10px #ff00cc, 0 0 15px #ff00cc;
              color: #ff00cc;
            }
          }

          .glow-text {
            animation: glow 3s ease-in-out infinite;
            color: #ffffff; /* Default text color */
          }

          @keyframes waterDrop {
            0% {
              transform: translateY(-100%);
            }
            50% {
              transform: translateY(50%);
            }
            100% {
              transform: translateY(100%);
            }
          }

          .falling-text {
            animation: waterDrop 5s ease-in-out infinite, glow 3s ease-in-out infinite;
            color: white;
            position: absolute;
            top: 0;
          }
        `}
      </style>
    </div>
  );
}

export { StartTrading };
