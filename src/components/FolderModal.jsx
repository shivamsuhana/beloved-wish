import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FolderModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="bg-white/90 backdrop-blur-xl border-2 border-pink-200 p-8 rounded-3xl shadow-2xl max-w-2xl w-full text-center relative"
          onClick={(e) => e.stopPropagation()} 
        >
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl transition-all hover:shadow-lg"
          >
            ✕
          </button>

          <div className="text-7xl mb-4">{data.icon}</div>
          <h2 className="text-4xl title-font font-bold text-pink-500 mb-6">{data.title}</h2>
          
          <div className="bg-pink-50/50 p-6 rounded-2xl mb-4 text-left border border-pink-100">
            <p className="text-lg text-gray-800 leading-relaxed font-medium whitespace-pre-line">
              {data.detailedMessage}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}