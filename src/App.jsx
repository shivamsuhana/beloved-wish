import React, { useState, useEffect } from 'react';
import Login from './components/login';
import Dashboard from './components/Dashboard';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hearts, setHearts] = useState([]);

  // Ye background me random dil banayega
  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + 'vw',
      animationDelay: Math.random() * 5 + 's',
      fontSize: (Math.random() * 20 + 15) + 'px'
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Udte hue dil */}
      <div className="heart-bg">
        {hearts.map(heart => (
          <div 
            key={heart.id} 
            className="heart" 
            style={{ 
              left: heart.left, 
              animationDelay: heart.animationDelay,
              fontSize: heart.fontSize
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Tera Asli Content */}
      <div className="relative z-10">
        {!isUnlocked ? (
          <Login onLogin={() => setIsUnlocked(true)} />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}

export default App;