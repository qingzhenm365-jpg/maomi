import React from 'react';

const GuideView: React.FC = () => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen font-sans text-[#0e1b12]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e7f3eb]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
             <div className="flex items-center gap-2 text-[#12a845]">
                <span className="material-symbols-outlined text-3xl">pets</span>
                <span className="font-bold text-lg text-[#0e1b12]">猫咪百科</span>
             </div>
             <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#" className="hover:text-[#19e65e]">品种大全</a>
                <a href="#" className="text-[#19e65e]">养护指南</a>
                <a href="#" className="hover:text-[#19e65e]">健康工具</a>
             </nav>
          </div>
          <button className="bg-[#19e65e] hover:bg-[#12a845] text-[#0e1b12] px-5 h-10 rounded-xl font-bold text-sm shadow-sm transition-colors">
            登录/注册
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-16">
        
        {/* Hero */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <span className="text-[#19e65e] font-bold text-xs uppercase tracking-wider">Beginner's Guide</span>
              <h1 className="text-4xl md:text-5xl font-black leading-tight text-[#0e1b12]">
                新手养猫<br/>保姆级指南
              </h1>
              <p className="text-[#0e1b12]/80 text-lg leading-relaxed max-w-lg">
                从接猫回家的第一天到长期陪伴，为您提供全方位的科学养猫建议，让您的铲屎官生活更轻松愉快。
              </p>
            </div>
            <div className="flex gap-4">
              <button className="h-12 px-6 bg-[#19e65e] hover:bg-[#12a845] text-[#0e1b12] rounded-xl font-bold flex items-center gap-2 shadow-md">
                <span>开始阅读指南</span>
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </button>
              <button className="h-12 px-6 bg-white border border-[#e7f3eb] hover:border-[#19e65e] rounded-xl font-bold flex items-center gap-2 transition-colors">
                <span>观看视频</span>
                <span className="material-symbols-outlined text-[#19e65e]">play_circle</span>
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1_ujaQKYe_2PEPSYRGImZrHSwSLbzev91bRh0scp07pZZvNlbB_QHHY9y3-mZNhsxaRpkASdbzces3Sign8oeKJ6sZbTKx5J94VV7ksDqvaNvxkIBVQU68cyFgr6R5zBCS6t3CAV7zjag6UNgS23GNtEu5OiayfDYeXsxgqN_rS7w64GTnfYp_uIslpYJXUw9xdTqoz1K0CuPmYk59-2EdOX9j4zdAMLsiriRNfZieKwU0-OIAVpzfdMTUTsYBQQ2g5eA-oRSiD0" alt="Cute cat" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#19e65e]/20 to-transparent mix-blend-overlay"></div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-8 w-1.5 bg-[#19e65e] rounded-full"></div>
            <h2 className="text-2xl font-bold">养猫全流程 Roadmap</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#e7f3eb] shadow-sm">
             <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-[#d0e7d7]"></div>
                
                <div className="space-y-10">
                   {[
                     { 
                       icon: 'inventory_2', phase: 'Phase 1', title: '进家准备', sub: '物资采购与环境安全检查',
                       content: ['备好猫粮、猫砂、猫砂盆', '封窗（非常重要！）', '收好易碎品和对猫有毒植物'] 
                     },
                     { 
                       icon: 'schedule', phase: 'Phase 2', title: '首个24小时', sub: '初次接触与适应',
                       tip: '关键点：不要强行抱猫。给它一个躲避的空间，让它自己探索。'
                     },
                     { 
                        icon: 'calendar_today', phase: 'Phase 3', title: '第一周过渡', sub: '建立信任与初步互动',
                        text: '观察猫咪排泄饮食是否正常。可以用逗猫棒尝试远距离互动。'
                     }
                   ].map((step, idx) => (
                     <div key={idx} className="relative pl-14">
                        <div className="absolute left-0 top-0 size-10 bg-[#e7f3eb] rounded-full flex items-center justify-center text-[#19e65e] border-4 border-white z-10">
                           <span className="material-symbols-outlined text-lg">{step.icon}</span>
                        </div>
                        <div>
                           <div className="flex items-center gap-3 mb-1">
                              <h3 className="font-bold text-lg">{step.title}</h3>
                              <span className="bg-[#e7f3eb] text-[#4e9767] text-xs px-2 py-0.5 rounded font-medium">{step.phase}</span>
                           </div>
                           <p className="text-[#4e9767] text-sm mb-3 font-medium">{step.sub}</p>
                           {step.content && (
                             <ul className="list-disc list-inside text-sm text-[#0e1b12]/80 space-y-1 bg-[#f8fcf9] p-3 rounded-lg">
                               {step.content.map((li: string, i: number) => <li key={i}>{li}</li>)}
                             </ul>
                           )}
                           {step.tip && (
                             <div className="bg-[#19e65e]/10 p-3 rounded-lg border border-[#19e65e]/20 text-sm">
                                💡 <span className="font-bold">TIP:</span> {step.tip}
                             </div>
                           )}
                           {step.text && <p className="text-sm text-[#0e1b12]/80">{step.text}</p>}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* Myth Buster Grid */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-8 w-1.5 bg-[#19e65e] rounded-full"></div>
            <h2 className="text-2xl font-bold">养猫误区粉碎机</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               { q: '猫咪爱喝牛奶？', a: '大多数猫咪乳糖不耐受，喝牛奶会导致腹泻。' },
               { q: '猫有九条命摔不死？', a: '高空坠落是家猫常见死因之一。“封窗”是科学养猫的第一准则。' },
               { q: '打呼噜就是很开心？', a: '大多时候是放松，但猫咪在疼痛时也会发出呼噜声自我安抚。' },
               { q: '猫咪很高冷？', a: '猫咪表达爱意的方式很含蓄，缓慢眨眼就是“我爱你”的意思。' }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-5 rounded-xl border border-[#e7f3eb] hover:border-[#19e65e]/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                     <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded">误区</span>
                     <h4 className="font-bold text-[#0e1b12]">{item.q}</h4>
                  </div>
                  <div className="flex gap-2 items-start text-sm text-[#0e1b12]/80">
                     <span className="material-symbols-outlined text-[#19e65e] text-lg shrink-0">check_circle</span>
                     <p><span className="font-bold">真相：</span>{item.a}</p>
                  </div>
               </div>
             ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default GuideView;
