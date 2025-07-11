import { useEffect, useState } from "react";

interface Rose {
  id: number;
  color: string;
  height: string;
  bgColor: string;
  innerColors: string[];
  title: string;
}

const roses: Rose[] = [
  {
    id: 1,
    color: "rose-bright",
    height: "h-32",
    bgColor: "bg-red-500",
    innerColors: ["bg-red-400", "bg-red-300", "bg-red-200"],
    title: "Red Rose"
  },
  {
    id: 2,
    color: "rose-pink",
    height: "h-36",
    bgColor: "bg-pink-500",
    innerColors: ["bg-pink-400", "bg-pink-300", "bg-pink-200"],
    title: "Pink Rose"
  },
  {
    id: 3,
    color: "rose-deep",
    height: "h-40",
    bgColor: "bg-pink-600",
    innerColors: ["bg-pink-500", "bg-pink-400", "bg-pink-300"],
    title: "Deep Pink Rose"
  },
  {
    id: 4,
    color: "white",
    height: "h-32",
    bgColor: "bg-white",
    innerColors: ["bg-gray-50", "bg-white", "bg-yellow-50"],
    title: "White Rose"
  },
  {
    id: 5,
    color: "pink-light",
    height: "h-28",
    bgColor: "bg-pink-300",
    innerColors: ["bg-pink-200", "bg-pink-100", "bg-pink-50"],
    title: "Light Pink Rose"
  },
  {
    id: 6,
    color: "red",
    height: "h-28",
    bgColor: "bg-red-500",
    innerColors: ["bg-red-400", "bg-red-300", "bg-red-200"],
    title: "Red Rose 2"
  },
  {
    id: 7,
    color: "rose-pink",
    height: "h-32",
    bgColor: "bg-pink-500",
    innerColors: ["bg-pink-400", "bg-pink-300", "bg-pink-200"],
    title: "Pink Rose 2"
  }
];

export default function Home() {
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleRoseHover = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const sparkleId = Date.now() + Math.random(); // Make unique IDs
    const newSparkle = {
      id: sparkleId,
      x: rect.left + rect.width / 2,
      y: rect.top - 20
    };
    
    setSparkles(prev => [...prev, newSparkle]);
    
    // Remove sparkle after animation
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== sparkleId));
    }, 1000);
  };

  useEffect(() => {
    // Cleanup function to clear sparkles on unmount
    return () => setSparkles([]);
  }, []);

  return (
    <div className="poppins-font">
      {/* Floating Petals Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-petal absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full opacity-70" style={{ animationDelay: '0s' }}></div>
        <div className="floating-petal absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="floating-petal absolute top-60 left-1/4 w-5 h-5 bg-pink-600 rounded-full opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="floating-petal absolute bottom-40 right-10 w-4 h-4 bg-pink-400 rounded-full opacity-70" style={{ animationDelay: '3s' }}></div>
        <div className="floating-petal absolute bottom-60 left-20 w-3 h-3 bg-red-400 rounded-full opacity-60" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="sparkle absolute top-32 left-1/3 text-yellow-400 text-2xl" style={{ animationDelay: '1s' }}>✨</div>
        <div className="sparkle absolute top-48 right-1/4 text-yellow-400 text-xl" style={{ animationDelay: '2s' }}>⭐</div>
        <div className="sparkle absolute bottom-48 left-1/5 text-yellow-400 text-2xl" style={{ animationDelay: '3s' }}>✨</div>
        <div className="sparkle absolute bottom-32 right-1/3 text-yellow-400 text-xl" style={{ animationDelay: '4s' }}>⭐</div>
        <div className="sparkle absolute top-1/2 left-12 text-yellow-400 text-lg" style={{ animationDelay: '5s' }}>✨</div>
        <div className="sparkle absolute top-1/3 right-12 text-yellow-400 text-lg" style={{ animationDelay: '6s' }}>⭐</div>
      </div>

      {/* Interactive Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none text-yellow-400 text-xl z-50"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            transform: 'translateX(-50%)',
            animation: 'sparkle 1s ease-out forwards'
          }}
        >
          ✨
        </div>
      ))}

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        {/* Birthday Message */}
        <div className="text-center mb-8 z-10">
          <h1 className="birthday-text text-6xl md:text-7xl font-bold text-pink-600 mb-4">
            Happy Birthday
          </h1>
          <h2 className="dancing-font text-4xl md:text-5xl font-semibold text-red-500 mb-2">
            Emely Flores
          </h2>
          <p className="poppins-font text-lg text-gray-700 opacity-80">
            Wishing you a day filled with love and joy! 🎉
          </p>
        </div>

        {/* Animated Rose Bouquet */}
        <div className="relative flex justify-center items-end gap-2 md:gap-4 mb-8 flex-wrap">
          {roses.map((rose, index) => (
            <div
              key={rose.id}
              className="rose cursor-pointer flex-shrink-0"
              title={rose.title}
              onMouseEnter={handleRoseHover}
              style={{ alignSelf: 'flex-end' }}
            >
              <div className="relative flex flex-col items-center">
                {/* Stem */}
                <div className={`w-2 ${rose.height} bg-green-500 rounded-full`}></div>
                
                {/* Leaves */}
                <div className={`absolute ${rose.height === 'h-40' ? 'top-20' : rose.height === 'h-36' ? 'top-16' : rose.height === 'h-32' ? 'top-14' : 'top-12'} -left-2 w-6 h-4 bg-green-400 rounded-full transform -rotate-45`}></div>
                <div className={`absolute ${rose.height === 'h-40' ? 'top-24' : rose.height === 'h-36' ? 'top-20' : rose.height === 'h-32' ? 'top-18' : 'top-16'} -right-2 w-6 h-4 bg-green-400 rounded-full transform rotate-45`}></div>
                
                {/* Rose Head */}
                <div className={`absolute ${rose.height === 'h-40' ? '-top-8' : rose.height === 'h-36' ? '-top-6' : '-top-6'} left-1/2 transform -translate-x-1/2`}>
                  <div className={`${rose.height === 'h-40' ? 'w-16 h-16' : 'w-12 h-12'} ${rose.bgColor} rounded-full relative ${rose.color === 'white' ? 'border-2 border-gray-100' : ''}`}>
                    <div className={`absolute inset-1 ${rose.innerColors[0]} rounded-full`}>
                      <div className={`absolute inset-1 ${rose.innerColors[1]} rounded-full`}>
                        <div className={`absolute inset-1 ${rose.innerColors[2]} rounded-full opacity-80`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guatemalan Flag */}
        <div className="mb-4 flex justify-center">
          <div className="w-8 h-6 border border-gray-300 shadow-sm rounded-sm overflow-hidden">
            <div className="w-full h-2 bg-blue-500"></div>
            <div className="w-full h-2 bg-white"></div>
            <div className="w-full h-2 bg-blue-500"></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-3xl">🎈</span>
            <span className="text-4xl">🎂</span>
            <span className="text-3xl">🎁</span>
          </div>
          <p className="poppins-font text-sm text-gray-600 opacity-70">
            May your special day be filled with beautiful moments!
          </p>
        </div>

        {/* Interactive Message */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p className="poppins-font text-xs text-gray-500 opacity-60">
            Hover over the roses to see them dance! 💃
          </p>
        </div>
      </div>
    </div>
  );
}
