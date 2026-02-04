import React from 'react';
import { ViewState } from '../types';

interface Props {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<Props> = ({ currentView, setView }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-black/80 backdrop-blur-md text-white px-2 py-2 rounded-full shadow-2xl flex gap-1 border border-white/10 overflow-x-auto max-w-[90vw] no-scrollbar">
      {[
        { id: 'home', label: 'Home' },
        { id: 'quiz', label: 'Quiz' },
        { id: 'guide', label: 'Guide' },
        { id: 'list', label: 'List' },
        { id: 'calculator', label: 'Calc' },
        { id: 'detail', label: 'Detail' },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setView(item.id as ViewState)}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
            currentView === item.id 
            ? 'bg-white text-black shadow-lg' 
            : 'text-gray-400 hover:text-white hover:bg-white/10'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
