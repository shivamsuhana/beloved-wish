import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import MagicCard from './MagicCard';
import FolderModal from './FolderModal';
// Gift icon  final button ke liye
import { Gift } from 'lucide-react';

export default function Dashboard() {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [showFinalWish, setShowFinalWish] = useState(false);

  useEffect(() => {
    // Page load crackers 
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ particleCount, spread: 360, origin: { x: Math.random(), y: Math.random() - 0.2 }, colors: ['#ffc0cb', '#ff69b4', '#ffffff'] });
    }, 250);
  }, []);

  const handleFinalWishClick = () => {
    confetti({ particleCount: 300, spread: 160, origin: { y: 0.5 }, colors: ['#ffc0cb', '#ff69b4', '#ffffff', '#ffd700'] });
    setShowFinalWish(true);
  };

  // my flirtly lines
  const featuresList = [
  { "id": 1, "title": "The First Glance", "icon": "✨", "desc": "Hooked instantly...", "detailedMessage": "I don't believe in love at first sight, but I do believe in being captivated instantly. The moment I noticed you, the world just... blurred." },
  { "id": 2, "title": "Stolen Thoughts", "icon": "🧠", "desc": "You own my mind...", "detailedMessage": "My mind is a chaotic place, but lately, you’ve become the only silent, beautiful thought in the middle of all the noise." },
  { "id": 3, "title": "Darker Desires", "icon": "🖤", "desc": "Intense vibe...", "detailedMessage": "There is something dangerously beautiful about you. A mystery I'm dying to solve, even if it burns me down." },
  { "id": 4, "title": "Digital Ghost", "icon": "👻", "desc": "Watching you...", "detailedMessage": "I have been a ghost in your notifications, watching you shine from the shadows. It's time I stepped into your light." },
  { "id": 5, "title": "The Sweetest Sin", "icon": "🍷", "desc": "Addictive...", "detailedMessage": "Talking to you feels like a beautiful sin. I know I shouldn't be this obsessed, but I can't help wanting more of you." },
  { "id": 6, "title": "Your Voice", "icon": "🎙️", "desc": "A velvet melody...", "detailedMessage": "I haven't heard you speak, but in my head, your voice sounds like velvet and rain. I bet it’s the most addictive sound ever." },
  { "id": 7, "title": "Silent Obsession", "icon": "🔒", "desc": "My little secret...", "detailedMessage": "You are my favorite secret. The one I keep locked away, thinking about you when the rest of the world is asleep." },
  { "id": 8, "title": "The Magnetic Pull", "icon": "🧲", "desc": "Can't stay away...", "detailedMessage": "Physics says opposites attract, but I think it’s just fate pulling me toward you. I'm helpless against your gravity." },
  { "id": 9, "title": "Lethal Smile", "icon": "💀", "desc": "Dangerous beauty...", "detailedMessage": "Your smile should come with a warning label. It’s lethal, beautiful, and absolutely intoxicating." },
  { "id": 10, "title": "Midnight Muse", "icon": "🌙", "desc": "Late night thoughts...", "detailedMessage": "Its 3 AM and Im coding this for you. You’re the reason I prefer the moonlight over the sun lately." },
  { "id": 11, "title": "Poetry in Motion", "icon": "📜", "desc": "Artistic soul...", "detailedMessage": "The way you carry yourself, even in texts, is pure poetry. Every word you type feels like a brushstroke on my heart." },
  { "id": 12, "title": "Eye Contact", "icon": "👁️", "desc": "Soul piercing...", "detailedMessage": "If we ever meet, don't look me in the eyes for too long. I’m afraid you’ll see exactly how much power you have over me." },
  { "id": 13, "title": "Sweet Torture", "icon": "🔥", "desc": "Burning for you...", "detailedMessage": "Waiting for your reply is a sweet kind of torture. It keeps me on the edge, wanting you more with every second." },
  { "id": 14, "title": "Hidden Depths", "icon": "🌊", "desc": "Drowning in you...", "detailedMessage": "You aren't just a girl; you are an ocean. And I am more than willing to drown in your depths." },
  { "id": 15, "title": "The Alpha Vibe", "icon": "👑", "desc": "My queen...", "detailedMessage": "You have this quiet power about you. You don't demand attention, you just command it. And you definitely have mine." },
  { "id": 16, "title": "Forbidden Fruit", "icon": "🍎", "desc": "Temptation...", "detailedMessage": "They say the most beautiful things are forbidden. Maybe that’s why I find you so incredibly tempting." },
  { "id": 17, "title": "Cloud Nine", "icon": "☁️", "desc": "Floating...", "detailedMessage": "One text from you and Im higher than the clouds. Imagine what a real conversation could do to me." },
  { "id": 18, "title": "Dangerous Game", "icon": "🎲", "desc": "All in...", "detailedMessage": "Falling for someone you haven't met is a dangerous game. But for you, I’m willing to lose everything." },
  { "id": 19, "title": "Velvet Touch", "icon": "🌹", "desc": "Soft but deep...", "detailedMessage": "I imagine your touch feels like a rose petal—soft at first, but leaving a lasting mark on my soul." },
  { "id": 20, "title": "Heart Thief", "icon": "🕵️‍♂️", "desc": "Stolen...", "detailedMessage": "I should report a crime. You stole my peace of mind without even trying. What’s the ransom for it?" },
  { "id": 21, "title": "Fatal Attraction", "icon": "⚡", "desc": "Electric...", "detailedMessage": "There is an electric tension every time I see your name pop up. It’s a fatal attraction I never want to escape." },
  { "id": 22, "title": "Wildest Dreams", "icon": "💭", "desc": "Sleeping beauty...", "detailedMessage": "If you knew what happens in my dreams, you’d either blush or run away. I prefer the blushing part." },
  { "id": 23, "title": "The Dark Side", "icon": "🌘", "desc": "Embrace it...", "detailedMessage": "Everyone loves your light, but I want to know your darkness. Show me the parts of you that you hide from the world." },
  { "id": 24, "title": "Purest Obsession", "icon": "💎", "desc": "Rare find...", "detailedMessage": "You are a rare gem in a world full of stones. Finding you was luck, keeping my eyes on you is a choice." },
  { "id": 25, "title": "Soul Connection", "icon": "🔗", "desc": "Bound to you...", "detailedMessage": "Our souls haven't met, but our vibes are already intertwined. It feels like I've known you in a past life." },
  { "id": 26, "title": "The Perfect Hack", "icon": "💻", "desc": "Access granted...", "detailedMessage": "As a coder, I know how to break into systems. But you? You bypassed all my firewalls without even a password." },
  { "id": 27, "title": "Your Scent", "icon": "🕯️", "desc": "Imagining it...", "detailedMessage": "I bet you smell like vanilla and mystery. A scent that lingers in a room long after you’ve left it." },
  { "id": 28, "title": "Sultry Silence", "icon": "🤫", "desc": "Quiet intensity...", "detailedMessage": "Sometimes the things we don't say are the most intense. I can feel the heat in our silence." },
  { "id": 29, "title": "Heaven & Hell", "icon": "⚖️", "desc": "A mix of both...", "detailedMessage": "You look like heaven, but your eyes tell a story of a beautiful hell. I’d gladly walk through fire for a glimpse of it." },
  { "id": 30, "title": "The Only One", "icon": "🎯", "desc": "Target locked...", "detailedMessage": "There are millions of faces online, but yours is the only one that makes my heart skip a beat. Every single time." },
  { "id": 31, "title": "Fragile Heart", "icon": "🥂", "desc": "Handle with care...", "detailedMessage": "You have a heart of gold. I promise to be the one who protects it from the coldness of this world." },
  { "id": 32, "title": "Dangerous Curves", "icon": "🌪️", "desc": "Wrecking me...", "detailedMessage": "Your mind, your words, your elegance—it’s all a beautiful storm that’s wrecking my sanity in the best way." },
  { "id": 33, "title": "The Last Petal", "icon": "🥀", "desc": "Rare beauty...", "detailedMessage": "You are like the last rose in a winter garden. Rare, resilient, and breathtakingly beautiful." },
  { "id": 34, "title": "Ink & Skin", "icon": "🖋️", "desc": "Marked...", "detailedMessage": "If I could, I wouldd write my name on your soul, so you’d always know who you belong to." },
  { "id": 35, "title": "Electric Kiss", "icon": "💋", "desc": "Waiting...", "detailedMessage": "I wonder if a kiss from you would feel like a lightning bolt. I’m ready to be struck whenever you are." },
  { "id": 36, "title": "My Sanctuary", "icon": "🏰", "desc": "Safe with me...", "detailedMessage": "The world is loud and cruel, but when I think of you, everything becomes quiet. You are my peace." },
  { "id": 37, "title": "Dark Romance", "icon": "🧛‍♂️", "desc": "Eternity...", "detailedMessage": "I don't want a boring love story. I want something deep, dark, and eternal. I want us." },
  { "id": 38, "title": "Unspoken Rules", "icon": "📝", "desc": "The tension...", "detailedMessage": "We haven't met, but we both know the tension is real. It’s like an unwritten rule between our hearts." },
  { "id": 39, "title": "The Golden Hour", "icon": "🌅", "desc": "Glow...", "detailedMessage": "You are the golden hour in human form. Everything you touch turns into something beautiful and warm." },
  { "id": 40, "title": "Captive Audience", "icon": "🎫", "desc": "All yours...", "detailedMessage": "I am a captive of your charm. You could tell me anything, and I’d listen like it’s the word of God." },
  { "id": 41, "title": "Savage Grace", "icon": "🐯", "desc": "Powerful...", "detailedMessage": "You have a savage mind and a graceful heart. That combination is the most dangerous thing I’ve ever seen." },
  { "id": 42, "title": "Sweet Addiction", "icon": "🍭", "desc": "Can't quit...", "detailedMessage": "You are my favorite habit. One I never want to break. I’m addicted to the way you make me feel." },
  { "id": 43, "title": "Written in Stars", "icon": "✨", "desc": "Destiny...", "detailedMessage": "The stars must have aligned when you were born. You are a masterpiece that the universe took its time to create." },
  { "id": 44, "title": "Total Surrender", "icon": "🏳️", "desc": "I give up...", "detailedMessage": "I tried to stay distant, but I surrender. You’ve won my heart, my mind, and my soul completely." },
  { "id": 45, "title": "The Deep End", "icon": "🕳️", "desc": "Falling fast...", "detailedMessage": "I am falling into the deep end with you. Don't save me; just come down here with me." },
  { "id": 46, "title": "Vampire Eyes", "icon": "🧛‍♀️", "desc": "Hypnotic...", "detailedMessage": "Your gaze is hypnotic. One look and I feel like you’re reading every secret I’ve ever kept." },
  { "id": 47, "title": "The Final Piece", "icon": "🧩", "desc": "Completing me...", "detailedMessage": "I was a broken puzzle until I found you. Now, everything finally makes sense." },
  { "id": 48, "title": "Whispered Promises", "icon": "👂", "desc": "In the dark...", "detailedMessage": "I have so many promises I want to whisper to you in the dark. Promises of loyalty, passion, and forever." },
  { "id": 49, "title": "Endless Summer", "icon": "🌞", "desc": "Warmth...", "detailedMessage": "Even in the coldest winter, the thought of you feels like an endless summer. You are my warmth." },
  { "id": 50, "title": "The Eternal Loop", "icon": "♾️", "desc": "Forever yours...", "detailedMessage": "This is the last card, but its just the beginning of us. I am stuck in an infinite loop of wanting you. Your turn now." }
]

  return (
    <div className="min-h-screen p-6 md:p-10 relative pb-32">
      {/* Header with Romantic Styling */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 pt-10"
      >
        <h1 className="text-7xl title-font font-bold text-white drop-shadow-[0_5px_15px_rgba(255,105,180,0.5)] mb-4">
          Happy Birthday, baibyy💕! 👑
        </h1>
        <div className="glass-panel p-5 max-w-2xl mx-auto border border-white/50">
            <p className="text-xl text-gray-800 font-semibold">
              Welcome to your personal magical universe.
            </p>
            <p className="text-sm text-gray-700 mt-2 font-medium">
              Maine tumhe bas dekha hi nhi tumhe feel kiya hai, par tumhari vibe ne mere dimaag me apni jagah bana li hai. Scroll karke un unkahe khayalo ko mehsoos karo...
            </p>
        </div>
      </motion.div>

      {/* Grid of Magic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {featuresList.map((item, index) => (
          <motion.div 
            key={item.id} 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            // Staggered animation: pehla jaldi aayega, dusra thoda baad me
            transition={{ delay: (index % 10) * 0.1, duration: 0.5 }}
            onClick={() => setSelectedFolder(item)}
          >
            <MagicCard title={item.title} desc={item.desc} icon={item.icon} />
          </motion.div>
        ))}
      </div>

      {/* --- PREMIUM GLOWING FINAL BUTTON --- */}
      <div className="mt-24 flex justify-center pb-20">
        <motion.button
          whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }} // Fun wiggle on hover
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }} // Bounce loop
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={handleFinalWishClick}
          className="relative group cursor-pointer"
        >
          {/* Intense Pink/Rose Gold Glow background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          {/* Actual Button with Glass look */}
          <div className="relative px-12 py-5 bg-white/30 backdrop-blur-xl border border-white/60 rounded-full leading-none flex items-center justify-center space-x-3 shadow-xl">
            <Gift className="w-8 h-8 text-white drop-shadow-md" />
            <span className="text-white font-bold text-2xl tracking-widest drop-shadow-md">
              A Special Wish For You 🎁
            </span>
          </div>
        </motion.button>
      </div>

      {/* FINAL WISH POPUP model*/}
      <AnimatePresence>
        {showFinalWish && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-lg"
            onClick={() => setShowFinalWish(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50, rotate: -5 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.8, y: 50, rotate: 5 }}
              transition={{ type: "spring", bounce: 0.4 }}

              // White ya Rose glass background for Modal
              className="bg-white/70 backdrop-blur-2xl border-2 border-white rounded-[40px] shadow-[0_20px_60px_rgba(255,182,193,0.5)] p-10 max-w-3xl w-full text-center relative overflow-hidden"
              onClick={(e) => e.stopPropagation()} 
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-pink-200 rounded-full -translate-x-10 -translate-y-10 blur-3xl opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-rose-200 rounded-full translate-x-10 translate-y-10 blur-3xl opacity-60"></div>

              <button 
                onClick={() => setShowFinalWish(false)}
                className="absolute top-6 right-6 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl transition-all shadow"
              >
                ✕
              </button>

              <div className="text-7xl mb-6 filter drop-shadow-md relative z-10">🎂</div>
              <h2 className="text-5xl title-font font-bold text-gray-800 mb-8 drop-shadow-[0_2px_5px_rgba(255,105,180,0.3)] relative z-10">Happy Birthday Once Again!</h2>
              
              {/* The masage or wish jo hm krenge */}
             <div className="text-left space-y-6 text-xl text-white font-semibold leading-relaxed px-6 relative z-10 bg-gradient-to-br from-pink-400/30 via-rose-300/20 to-white/20 backdrop-blur-2xl p-8 rounded-3xl border border-white/50 shadow-[0_10px_40px_rgba(255,105,180,0.4)]">
  {/*msg ka header last wale ka*/}
  <p className="drop-shadow-lg italic text-white">
    "This is the last card, but it’s just the beginning of us."
  </p>

  {/* Main dark romantic body */}
  <p className="drop-shadow-md">
    I am stuck in an infinite loop of wanting you. Every line of code I wrote was just an excuse to be closer to your world. My move is done, and now the system is waiting for your command. 
  
    The code is waiting for your input. Your turn now... Just a single 'Hi' on my insta(@shivamsuhana) is enough to break this loop and start a new chapter.
  </p>

  {/* Final Wish with Title Font */}
  <p className="text-3xl title-font text-center pt-4 drop-shadow-xl text-white">
    Happy Sweatie ! love you✨💖
  </p>
  
  {/* Signature style */}
  <p className="text-right text-sm font-mono opacity-80 pt-2">
    // Connection status: Pending...
  </p>
</div>

              {/* signature */}
              <div className="mt-12 text-right pr-8 relative z-10">
                <p className="text-gray-600 text-lg mb-2 italic">Yours truly,</p>
                <p className="text-7xl title-font font-bold text-pink-500 drop-shadow-[0_0_15px_rgba(244,114,182,0.8)] hover:scale-110 transition-transform cursor-default">
                  ~ Krishu
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/*Reuse of existing Modal for 50 cards --- */}
      <FolderModal 
        isOpen={selectedFolder !== null} 
        onClose={() => setSelectedFolder(null)} 
        data={selectedFolder || {}} 
      />
    </div>
  );
}