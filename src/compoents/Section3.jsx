import React from 'react';

const Section3 = () => {
  const stats = [
    { title: "90M+", description: "Traders and investors use our platform." },
    { title: "#1", description: "Top website in the world for all things investing." },
    { title: "1.5M+", description: "Mobile reviews with a 4.9 average rating." },
    { title: "10M+", description: "Custom scripts and ideas shared by users." },
  ];

  const cards = [
    { image: "https://plus.unsplash.com/premium_photo-1682310075673-b408eb1ca6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D", user: "@rajbuzzz", tradingImage: "https://via.placeholder.com/100" },
    { image: "https://plus.unsplash.com/premium_photo-1670249421324-232b654455d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D", user: "@rickwareracing", tradingImage: "https://via.placeholder.com/100" },
    { image: "https://media.istockphoto.com/id/1645923179/photo/stock-market-and-exchange-chart-and-numbers.webp?a=1&b=1&s=612x612&w=0&k=20&c=0kpjzB9f6L8QAvSWhfcwfZJEAFS0kt8-GqmZVy0aMmk=", user: "@marketcapcoin", tradingImage: "https://via.placeholder.com/100" },
    { image: "https://plus.unsplash.com/premium_photo-1683141154082-324d296f3c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D", user: "@TradingView", tradingImage: "https://via.placeholder.com/100" },
    { image: "https://media.istockphoto.com/id/1819878064/photo/buy-sell-gold-stock-market-investment-business-money-finance-exchange-trade-graph-chart-on-3d.webp?a=1&b=1&s=612x612&w=0&k=20&c=f87PQagGnhPS_bCPsJZ3lQ5rIvtKCidOfN4sxSvd4WE=", user: "@tanhef", tradingImage: "https://via.placeholder.com/100" },
  ];

  return (
    <section className="h-screen snap-start flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black py-12">
     
      <div>
      
      <h2 className="text-6xl text-white font-bold mb-6 text-center glow-text">
        Features
      </h2>
      
      <style>
        {`
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
            color: #ffffff;  /* Default text color */
          }
        `}
      </style>
    </div>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 px-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <p className="text-3xl md:text-4xl font-bold text-blue-500">{stat.title}</p>
            <p className="text-sm md:text-base text-gray-400">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Cards Marquee Section */}
      <div className="relative overflow-hidden w-full rounded-full">
        <div
          className="flex gap-6 animate-marquee hover:pause-marquee"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="relative w-48 h-48 flex justify-center items-center rounded-lg">
                <img
                  src={card.image}
                  alt={card.user}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Trading Image */}
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={card.tradingImage}
                    alt="Trading"
                    className="w-24 h-24 object-contain opacity-80"
                  />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 blur-md rounded-lg transition-opacity duration-300"></div>
              </div>
              <p className="absolute bottom-2 left-2 text-sm md:text-base font-medium text-white">
                {card.user}
              </p>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Style for Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
          .hover\\:pause-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export { Section3 };
