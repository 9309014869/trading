import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Section1 = () => {
  const canvasRef = useRef();
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);
    
    const geometry = new THREE.PlaneGeometry(15, 15, 50, 50);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI * 0.3;
    scene.add(terrain);
    
    const light = new THREE.PointLight(0xff00ff, 2);
    light.position.set(5, 5, 5);
    scene.add(light);
    
    camera.position.z = 8;
    
    const animate = () => {
      requestAnimationFrame(animate);
      terrain.rotation.z += 0.002;
      renderer.render(scene, camera);
    };
    
    animate();
    
    return () => canvasRef.current?.removeChild(renderer.domElement);
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Look first /<br />
          Then leap.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          The best trades require research, then commitment.
        </p>
        
        <div className="relative max-w-2xl mb-12">
          <input
            type="text"
            placeholder="Search markets here"
            className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {[
            { symbol: 'BTCUSD', value: '93,169', change: '+2.3%' },
            { symbol: 'NIFTY', value: '20,704', change: '+0.7%' },
            { symbol: 'BANKNIFTY', value: '51,100', change: '+1.1%' }
          ].map(ticker => (
            <div key={ticker.symbol} className="px-4 py-2 rounded-lg bg-black/40 backdrop-blur flex items-center gap-3">
              <span className="text-gray-400">{ticker.symbol}</span>
              <span className="text-white font-medium">{ticker.value}</span>
              <span className="text-green-400">{ticker.change}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
    return (
    <div className="h-screen bg-black text-white py-10 px-4 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Where the world does<br />markets
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300">
            Join 90 million traders and investors taking the future into their own hands.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          {['Chart', 'Trade', 'Screen', 'Analyze', 'Learn', 'Chat'].map(item => (
            <button
              key={item}
              className="px-4 py-2 sm:px-6 sm:py-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/50 transition whitespace-nowrap text-sm sm:text-base"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Video Card Section */}
        <div className="relative w-full max-w-4xl aspect-video sm:aspect-[16/9] md:aspect-[16/9] lg:aspect-[16/9] rounded-xl overflow-hidden border border-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1">
          <div className="w-full h-full rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            >
              <source src="https://static.tradingview.com/static/bundles/chart.avc1.786d26d6f5289b0db8aa.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Pulsing Border */}
          <div className="absolute inset-0 pointer-events-none rounded-xl ring-2 ring-blue-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export { Section1, Section2 };