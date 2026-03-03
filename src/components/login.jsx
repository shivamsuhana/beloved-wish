import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Terminal } from 'lucide-react';

export default function Login({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [text, setText] = useState('');
  
  // Coder style Typewriter effect text
  const fullText = "Initializing secure connection...\nTarget: darlo's Universe ✨";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.toLowerCase() === 'krishu') { 
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/30 backdrop-blur-xl border border-white/50 p-10 max-w-md w-full rounded-3xl shadow-2xl shadow-rose-300/50 text-center relative overflow-hidden"
      >
        <div className="relative z-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            className="w-20 h-20 mx-auto bg-gradient-to-tr from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg mb-6"
          >
            {password.toLowerCase() === 'krishu' ? (
              <Unlock className="text-white w-10 h-10" />
            ) : (
              <Lock className="text-white w-10 h-10" />
            )}
          </motion.div>

          <h1 className="text-5xl mb-2 title-font text-white font-bold drop-shadow-md tracking-wider">
            Hello...! baibyy💕
          </h1>
          
          <div className="h-14 mb-6 flex items-center justify-center">
            <p className="text-white font-mono text-sm whitespace-pre-line flex items-center justify-center gap-2 drop-shadow-sm">
              <Terminal className="w-4 h-4 text-pink-200" /> 
              {text}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="text-pink-200"
              >_</motion.span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.div
              animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <input 
                type="password" 
                // YAHAN BADLAV HAI: Tera pyara sa naya message!
                placeholder="Enter the cutest name ever..." 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 rounded-xl bg-black/20 text-white placeholder-white/70 outline-none border-2 border-white/20 focus:border-pink-300 transition-all text-center tracking-widest font-mono text-lg shadow-inner"
              />
            </motion.div>
            
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-100 font-bold text-sm bg-red-600/50 py-1.5 rounded-lg drop-shadow-sm"
              >
                Access Denied. Galat password!
              </motion.p>
            )}

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-400 to-rose-400 text-white p-4 rounded-xl font-bold shadow-lg text-lg mt-2 flex items-center justify-center gap-2 transition-all uppercase tracking-wide hover:from-pink-500 hover:to-rose-500"
            >
              {password.toLowerCase() === 'krishu' ? 'Unlocking...' : 'Decrypt & Enter'}
            </motion.button>
          </form>
        </div>
        
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-50"></div>
      </motion.div>
    </div>
  );
}