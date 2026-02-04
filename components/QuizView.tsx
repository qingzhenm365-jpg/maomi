import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';

const QuizView: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const question = QUIZ_QUESTIONS[0];

  return (
    <div className="min-h-screen bg-[#fcfaf8] relative overflow-hidden font-sans flex flex-col">
       {/* Background Decor */}
       <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute top-1/2 -left-20 w-72 h-72 bg-[#f3ece7] rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ee7c2b 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

       {/* Header */}
       <header className="relative z-10 flex items-center justify-between px-6 lg:px-20 py-6 border-b border-[#f3ece7] bg-[#fcfaf8]/80 backdrop-blur-md">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">pets</span>
            </div>
            <h2 className="font-bold text-[#1b130d]">寻觅你的专属猫咪</h2>
         </div>
         <button className="px-6 h-10 rounded-full border border-[#e7d9cf] text-[#1b130d] font-bold text-sm hover:bg-[#f3ece7] transition-colors">
            退出测试
         </button>
       </header>

       {/* Main Content */}
       <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">
          <div className="w-full max-w-4xl flex flex-col gap-10">
            
            {/* Progress */}
            <div className="w-full space-y-3">
              <div className="flex justify-between items-end px-1">
                 <span className="text-primary font-bold text-xs uppercase tracking-wider">Question 3 of 8</span>
                 <span className="text-[#9a6c4c] font-medium text-sm">35% Completed</span>
              </div>
              <div className="h-3 w-full bg-[#e7d9cf] rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[35%] rounded-full shadow-lg shadow-primary/30 transition-all duration-500"></div>
              </div>
            </div>

            {/* Question Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                <span className="material-symbols-outlined text-lg mr-2">home</span>
                {question.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-[#1b130d] tracking-tight">{question.question}</h1>
              <p className="text-[#9a6c4c] text-lg max-w-2xl mx-auto">{question.description}</p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {question.options.map((option) => (
                <label 
                  key={option.value}
                  className={`relative cursor-pointer group rounded-3xl p-8 flex flex-col items-center text-center gap-4 border-2 transition-all duration-300 ${
                    selectedOption === option.value 
                    ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10 -translate-y-1' 
                    : 'border-[#e7d9cf] bg-white hover:border-primary/50 hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="quiz-option" 
                    value={option.value} 
                    className="sr-only"
                    onChange={() => setSelectedOption(option.value)}
                  />
                  
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                     selectedOption === option.value ? 'bg-primary/20' : 'bg-[#fcf6f3]'
                  }`}>
                    <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {option.icon}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className={`text-xl font-bold transition-colors ${selectedOption === option.value ? 'text-primary' : 'text-[#1b130d]'}`}>
                      {option.label}
                    </h3>
                    <p className="text-[#9a6c4c] text-sm font-medium leading-relaxed">
                      {option.subLabel}
                    </p>
                  </div>

                  {/* Checkmark Icon */}
                  <div className={`absolute top-4 right-4 text-primary transition-opacity duration-300 ${selectedOption === option.value ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                  </div>
                </label>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="flex justify-center pt-8">
              <div className="flex items-center gap-6">
                <button className="px-8 h-14 rounded-full text-[#9a6c4c] font-bold hover:bg-black/5 transition-colors">
                  跳过
                </button>
                <button className={`px-10 h-14 rounded-full bg-primary text-white text-lg font-bold shadow-lg shadow-primary/30 flex items-center gap-2 transition-all active:scale-95 ${!selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'}`}>
                  <span>下一题</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
       </main>

       {/* Floating Paws */}
       <span className="material-symbols-outlined absolute bottom-10 left-10 text-6xl text-[#1b130d] opacity-5 rotate-12 pointer-events-none hidden lg:block" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
       <span className="material-symbols-outlined absolute top-32 right-20 text-8xl text-[#1b130d] opacity-5 -rotate-12 pointer-events-none hidden lg:block" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
    </div>
  );
};

export default QuizView;
