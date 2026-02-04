import React, { useState } from 'react';

const CalculatorView: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [bcs, setBcs] = useState<string>('ideal');

  // Simple calculation logic for demo
  const idealWeightMin = weight ? (parseFloat(weight) * 0.9).toFixed(1) : '--';
  const idealWeightMax = weight ? (parseFloat(weight) * 1.1).toFixed(1) : '--';
  const waterIntake = weight ? Math.round(parseFloat(weight) * 60) : '--';

  return (
    <div className="min-h-screen bg-[#f8fbfb] font-sans text-[#0e1b1b]">
      {/* Header */}
      <div className="bg-white border-b border-[#e8f3f3] py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#1dc9c9]">
            <span className="material-symbols-outlined">pets</span>
            <span className="font-bold text-[#0e1b1b]">猫咪健康计算器</span>
          </div>
          <button className="bg-[#1dc9c9] hover:bg-[#17a3a3] text-[#0e1b1b] px-6 h-10 rounded-full font-bold text-sm transition-colors">
            登录
          </button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">猫咪健康计算器</h1>
          <p className="text-[#509595] text-lg font-medium">科学评估爱宠体态，为您定制专属的健康管理与饮水计划</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Weight Section */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 shadow-sm border border-[#e8f3f3]">
             <div className="flex items-center gap-3 mb-8">
               <div className="p-2 bg-blue-50 rounded-xl text-blue-500">
                 <span className="material-symbols-outlined">monitor_weight</span>
               </div>
               <h2 className="text-2xl font-bold">理想体重评估</h2>
             </div>

             <div className="grid md:grid-cols-2 gap-6 mb-8">
               <div className="space-y-2">
                 <label className="font-bold text-sm ml-1">猫咪品种</label>
                 <select className="w-full h-14 bg-[#f8fbfb] border-none rounded-xl px-4 font-medium focus:ring-2 focus:ring-[#1dc9c9]/50">
                    <option>英国短毛猫</option>
                    <option>布偶猫</option>
                    <option>中华田园猫</option>
                 </select>
               </div>
               <div className="space-y-2">
                 <label className="font-bold text-sm ml-1">当前体重 (kg)</label>
                 <div className="relative">
                   <input 
                      type="number" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="0.0" 
                      className="w-full h-14 bg-[#f8fbfb] border-none rounded-xl px-4 font-medium focus:ring-2 focus:ring-[#1dc9c9]/50" 
                    />
                   <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-[#509595] text-sm">KG</span>
                 </div>
               </div>
             </div>

             <div className="space-y-4 mb-8">
               <div className="flex justify-between items-end">
                 <label className="font-bold text-sm ml-1">体况评分 (BCS)</label>
                 <button className="text-xs font-bold text-[#1dc9c9] flex items-center gap-1">
                   <span className="material-symbols-outlined text-sm">help</span> 什么是BCS?
                 </button>
               </div>
               
               <div className="grid grid-cols-5 gap-2">
                 {['thin', 'ideal', 'over', 'obese', 'severe'].map((val, idx) => (
                    <button 
                      key={val}
                      onClick={() => setBcs(val)}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all h-24 ${
                        bcs === val 
                        ? 'border-[#1dc9c9] bg-[#1dc9c9]/5 ring-2 ring-[#1dc9c9] ring-inset' 
                        : 'border-gray-100 bg-[#f8fbfb] hover:border-[#1dc9c9]/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-3xl mb-1" style={{ 
                        color: val === 'ideal' ? '#1dc9c9' : (val === 'thin' ? '#9ca3af' : '#fb923c'),
                        transform: `scaleX(${1 + idx * 0.15})`
                      }}>pets</span>
                      <span className="text-[10px] font-bold uppercase">{['偏瘦', '理想', '超重', '肥胖', '严重'][idx]}</span>
                    </button>
                 ))}
               </div>
             </div>

             <div className="bg-[#1dc9c9]/10 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border border-[#1dc9c9]/20">
               <div>
                  <h3 className="text-xs font-bold text-[#509595] uppercase tracking-wider mb-1">预估理想体重范围</h3>
                  <p className="text-3xl font-black">{idealWeightMin} <span className="text-lg text-[#509595] font-medium">-</span> {idealWeightMax} <span className="text-base font-bold text-[#509595]">kg</span></p>
               </div>
               <button className="h-12 px-8 bg-[#1dc9c9] hover:bg-[#17a3a3] text-[#0e1b1b] font-bold rounded-full flex items-center gap-2 transition-colors">
                  <span className="material-symbols-outlined">calculate</span> 重新计算
               </button>
             </div>
          </div>

          {/* Water Section */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-[#e8f3f3] h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[#1dc9c9]/10 rounded-xl text-[#1dc9c9]">
                  <span className="material-symbols-outlined">water_drop</span>
                </div>
                <h2 className="text-2xl font-bold">每日饮水建议</h2>
              </div>

              <div className="space-y-6 flex-1">
                 <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-[#509595]">同步上方体重数据</span>
                    <div className="w-11 h-6 bg-[#1dc9c9] rounded-full relative cursor-pointer">
                       <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-3">
                    <button className="p-4 rounded-xl border border-gray-200 hover:border-[#1dc9c9] text-[#509595] flex flex-col items-center gap-1 transition-colors">
                       <span className="material-symbols-outlined">cookie</span>
                       <span className="text-xs font-bold">全干粮</span>
                    </button>
                    <button className="p-4 rounded-xl border-2 border-[#1dc9c9] bg-[#1dc9c9] text-[#0e1b1b] flex flex-col items-center gap-1 shadow-sm">
                       <span className="material-symbols-outlined">soup_kitchen</span>
                       <span className="text-xs font-bold">全湿粮</span>
                    </button>
                 </div>
              </div>

              <div className="mt-8 bg-[#1dc9c9] text-[#0e1b1b] rounded-2xl p-6 relative overflow-hidden">
                 <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                 <h3 className="text-xs font-bold opacity-70 uppercase mb-2 relative z-10">每日建议饮水量</h3>
                 <div className="flex items-baseline gap-2 relative z-10">
                    <span className="text-5xl font-black">{waterIntake}</span>
                    <span className="text-xl font-bold opacity-70">ml</span>
                 </div>
                 <div className="mt-4 pt-4 border-t border-black/10 text-xs font-semibold opacity-80 flex items-center gap-2 relative z-10">
                    <span className="material-symbols-outlined text-sm">lightbulb</span> 相当于 {(waterIntake !== '--' ? (parseInt(waterIntake as any) / 200).toFixed(1) : '--')} 碗标准水碗
                 </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CalculatorView;
