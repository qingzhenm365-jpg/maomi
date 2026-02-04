import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const RADAR_DATA = [
  { subject: '亲密度', A: 90, fullMark: 100 },
  { subject: '智力', A: 85, fullMark: 100 },
  { subject: '活泼度', A: 95, fullMark: 100 },
  { subject: '独立性', A: 40, fullMark: 100 },
  { subject: '健康', A: 80, fullMark: 100 },
  { subject: '适应力', A: 70, fullMark: 100 },
];

const BreedDetailView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#101622] text-white font-sans selection:bg-[#135bec] selection:text-white">
      {/* Navbar Dark */}
      <header className="border-b border-[#232f48] bg-[#111722]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#135bec]/20 rounded-full flex items-center justify-center text-[#135bec]">
                 <span className="material-symbols-outlined">pets</span>
              </div>
              <span className="font-bold text-lg tracking-tight font-serif">RareBreeds | 稀有猫种百科</span>
           </div>
           <nav className="hidden lg:flex gap-8 text-sm font-medium text-gray-300">
             <a href="#" className="hover:text-[#135bec]">品种库</a>
             <a href="#" className="hover:text-[#135bec]">基因科学</a>
             <a href="#" className="hover:text-[#135bec]">养护指南</a>
           </nav>
        </div>
        <button className="bg-[#135bec] hover:bg-blue-600 px-5 h-9 rounded text-sm font-bold transition-colors">登录</button>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex gap-2 text-sm text-[#92a4c9] mb-6">
           <span>品种库</span> <span className="material-symbols-outlined text-xs self-center">chevron_right</span>
           <span>短毛猫</span> <span className="material-symbols-outlined text-xs self-center">chevron_right</span>
           <span className="text-white">狼猫 (Lykoi)</span>
        </div>

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2 relative group rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyBc1Z3Jgndt_S96n_ZvQxo5R7snJ99GfJUquO9bp_lxjQUb4NZKMGNS8q5WFdngsoLwm_bIoTtOKFPJt_YqeljmvkXa-pvjVK3-mB0kkir_EhyHixwXPRL2sE0qIC_X4QmaPCcNcML01yi2tnc1l4Wre06qu5dUwlxIT3I68TEZRigYQiKKhfDX7pgs3g5mZlyjScWCVV5ByMbAsYdYZQO2J--Gi8M69eD5lZNTCENP1uOPnFizYPZu4T9T8qK2FLjs7Ipn853Nk" alt="Lykoi Cat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
             <div className="absolute bottom-6 left-6">
                <span className="bg-[#135bec] text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Rare / 稀有</span>
                <p className="text-gray-300 text-sm font-medium">Naturally Occurring Mutation</p>
             </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col justify-center">
             <h1 className="text-5xl lg:text-7xl font-black font-serif tracking-tight mb-2">狼猫 (Lykoi)</h1>
             <p className="text-2xl text-gray-400 font-serif italic mb-6">"The Werewolf Cat"</p>
             <p className="text-[#92a4c9] leading-relaxed text-lg mb-8">
                狼猫并不是人造生物，而是一种因自然基因突变而产生的独特品种。它们拥有类似狼的稀疏毛发外观，以及猎犬般忠诚、活泼的性格。这是一种既神秘又迷人的猫科动物，重新定义了我们对“可爱”的认知。
             </p>
             <div className="flex gap-4">
               <button className="bg-[#135bec] hover:bg-blue-600 h-12 px-8 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-[#135bec]/20">
                  <span className="material-symbols-outlined">play_circle</span> 观看视频介绍
               </button>
               <button className="bg-[#232f48] hover:bg-[#2f3e5e] h-12 px-8 rounded-lg font-bold transition-all">
                  图库
               </button>
             </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
           {[
             { label: '稀有度', val: '9.5', sub: '/10', icon: 'diamond', bar: 95 },
             { label: '活力等级', val: 'High', sub: '', icon: 'bolt', bar: 85 },
             { label: '养护难度', val: '中等', sub: '需定期清洁', icon: 'medical_services', bar: 50 },
           ].map((stat, idx) => (
             <div key={idx} className="bg-[#151c2a] border border-[#324467] p-6 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-[#92a4c9] text-xs font-bold uppercase tracking-wider">{stat.label}</span>
                   <span className="material-symbols-outlined text-[#135bec]">{stat.icon}</span>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                   <span className="text-3xl font-bold font-serif">{stat.val}</span>
                   <span className="text-sm text-gray-500">{stat.sub}</span>
                </div>
                <div className="h-1.5 bg-[#232f48] rounded-full overflow-hidden">
                   <div className="h-full bg-[#135bec]" style={{ width: `${stat.bar}%` }}></div>
                </div>
             </div>
           ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
           {/* Main Content */}
           <div className="lg:col-span-8 space-y-12">
              <section>
                 <h3 className="text-2xl font-bold font-serif mb-4 border-l-4 border-[#135bec] pl-4">起源与历史 (Origin)</h3>
                 <div className="text-[#92a4c9] leading-7 space-y-4">
                    <p>狼猫的历史相对较短，但充满了科学趣味。2010年，在美国田纳西州的一群野生短毛猫中，人们发现了两只外观奇特的小猫。由于它们独特的外貌类似传说中的“狼人”，因此被命名为Lykoi。</p>
                    <p>经过田纳西大学的皮肤科专家和基因学家的详细研究，证实了这种外观并非由斯芬克斯猫或德文卷毛猫的基因引起，而是一种全新的、在自然界中随机发生的隐性基因突变。</p>
                 </div>
              </section>

              <section className="bg-[#1a2332] rounded-2xl p-8 border border-[#232f48]">
                 <div className="flex gap-6 items-start">
                    <div className="p-3 bg-[#135bec]/20 rounded-xl text-[#135bec] shrink-0">
                       <span className="material-symbols-outlined text-3xl">biotech</span>
                    </div>
                    <div>
                       <h3 className="text-xl font-bold font-serif mb-3">基因特征 (Genetics)</h3>
                       <p className="text-[#92a4c9] mb-6">
                          狼猫的独特外观源于毛囊发育的不完全。这种基因突变导致它们缺乏底毛，且身体某些部位（如眼睛周围、口鼻部）完全没有毛发，形成标志性的“面具”状外观。
                       </p>
                       <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3 bg-[#111722] p-3 rounded-lg border border-[#324467]">
                             <span className="material-symbols-outlined text-[#135bec]">opacity</span>
                             <span className="text-sm font-medium">部分换毛现象 (Molting)</span>
                          </div>
                          <div className="flex items-center gap-3 bg-[#111722] p-3 rounded-lg border border-[#324467]">
                             <span className="material-symbols-outlined text-[#135bec]">fingerprint</span>
                             <span className="text-sm font-medium">独一无二的Roan毛色</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </section>

              <section>
                 <h3 className="text-2xl font-bold font-serif mb-6 border-l-4 border-[#135bec] pl-4">性格特征 (Personality)</h3>
                 <div className="bg-[#1a2332] rounded-2xl p-8 border border-[#232f48] flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                       <p className="text-lg font-medium mb-1">综合性格指数</p>
                       <p className="text-[#135bec] text-5xl font-black font-serif mb-4">Hound-like</p>
                       <p className="text-[#92a4c9] text-sm leading-relaxed">
                          狼猫常被描述为具有“猎犬般的性格”。它们对主人极度忠诚，喜欢跟随，嗅觉敏锐，且在玩耍时表现出强烈的狩猎本能。与高冷的猫不同，它们更像是一只小型犬。
                       </p>
                    </div>
                    <div className="w-full md:w-64 h-64 shrink-0">
                       <ResponsiveContainer width="100%" height="100%">
                          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
                             <PolarGrid stroke="#324467" />
                             <PolarAngleAxis dataKey="subject" tick={{ fill: '#92a4c9', fontSize: 12 }} />
                             <Radar
                                name="Lykoi"
                                dataKey="A"
                                stroke="#135bec"
                                strokeWidth={2}
                                fill="#135bec"
                                fillOpacity={0.4}
                             />
                          </RadarChart>
                       </ResponsiveContainer>
                    </div>
                 </div>
              </section>
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#1a2332] rounded-2xl p-6 border border-[#232f48] sticky top-24">
                 <h3 className="text-lg font-bold font-serif mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#135bec]">spa</span> 养护指南
                 </h3>
                 <ul className="space-y-4">
                    {[
                      { t: '定期沐浴', d: '缺乏底毛导致油脂堆积，建议每月清洗。' },
                      { t: '防晒保护', d: '皮肤易受紫外线伤害，避免暴晒。' },
                      { t: '体温调节', d: '比普通猫怕冷，冬季需注意保暖。' }
                    ].map((item, idx) => (
                       <li key={idx} className="flex gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#135bec] mt-2 shrink-0"></div>
                          <div>
                             <p className="font-bold text-sm text-white">{item.t}</p>
                             <p className="text-xs text-[#92a4c9] leading-relaxed">{item.d}</p>
                          </div>
                       </li>
                    ))}
                 </ul>
                 <div className="mt-6 pt-6 border-t border-[#232f48]">
                    <button className="w-full bg-[#135bec] hover:bg-blue-600 h-10 rounded font-bold text-sm transition-colors flex items-center justify-center gap-2">
                       <span className="material-symbols-outlined text-sm">search</span> 查找正规繁育人
                    </button>
                    <p className="text-[10px] text-center text-[#92a4c9] mt-2">Certified TICA/CFA Breeders Only</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BreedDetailView;
