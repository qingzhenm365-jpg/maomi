import React from 'react';
import { BREEDS } from '../constants';

const BreedListView: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f7f6] font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#f3ece7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
           <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[#ee7c2b]/10 text-[#ee7c2b] rounded-xl flex items-center justify-center">
                 <span className="material-symbols-outlined">pets</span>
              </div>
              <h1 className="font-bold text-xl hidden sm:block">完美拍档</h1>
           </div>
           
           <div className="flex-1 max-w-lg hidden md:block">
              <div className="relative">
                 <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined">search</span>
                 <input type="text" placeholder="搜索品种..." className="w-full h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ee7c2b] focus:border-transparent text-sm" />
              </div>
           </div>

           <div className="flex items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors">
                 <span className="material-symbols-outlined text-gray-600">favorite</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#ee7c2b] text-white rounded-xl shadow-md hover:bg-[#d06216]">
                 <span className="material-symbols-outlined">person</span>
              </button>
           </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8">
         {/* Sidebar Filter */}
         <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
            <div className="flex justify-between items-center">
               <h3 className="font-bold text-lg">筛选</h3>
               <button className="text-sm text-[#ee7c2b] font-medium">重置所有</button>
            </div>

            <div className="space-y-4">
               <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden" open>
                  <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 font-bold text-sm">
                     被毛长度 <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="p-4 border-t border-gray-200 space-y-2">
                     {['短毛', '中毛', '长毛', '无毛'].map(opt => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer">
                           <input type="checkbox" className="rounded border-gray-300 text-[#ee7c2b] focus:ring-[#ee7c2b]" />
                           <span className="text-sm text-gray-600">{opt}</span>
                        </label>
                     ))}
                  </div>
               </details>

               <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 font-bold text-sm">
                     活跃程度 <span className="material-symbols-outlined text-gray-400 group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="p-4 border-t border-gray-200">
                     <div className="relative h-2 bg-gray-200 rounded-full mt-2">
                        <div className="absolute left-0 top-0 h-full w-2/3 bg-[#ee7c2b] rounded-full"></div>
                        <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#ee7c2b] rounded-full shadow cursor-pointer"></div>
                     </div>
                     <div className="flex justify-between text-xs text-gray-400 mt-2">
                        <span>低</span><span>高</span>
                     </div>
                  </div>
               </details>
            </div>

            <div className="bg-[#ee7c2b]/5 border border-[#ee7c2b]/10 rounded-xl p-5">
               <div className="w-10 h-10 bg-[#ee7c2b]/20 text-[#ee7c2b] rounded-full flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined">quiz</span>
               </div>
               <h4 className="font-bold mb-1">不确定选哪个品种？</h4>
               <p className="text-sm text-gray-500 mb-3 leading-relaxed">花2分钟做个小测试，找到您的完美猫咪伴侣。</p>
               <button className="w-full py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold hover:bg-gray-50 transition-colors">开始测试</button>
            </div>
         </aside>

         {/* Main List */}
         <main className="flex-1">
            <div className="mb-6">
               <div className="flex gap-2 text-sm text-gray-500 mb-2">
                  <span>首页</span> <span className="material-symbols-outlined text-xs self-center">chevron_right</span> <span className="text-gray-900 font-medium">品种列表</span>
               </div>
               <h2 className="text-3xl font-black mb-2">猫咪品种百科</h2>
               <p className="text-gray-500 text-lg">全网最全猫咪数据库，包含超过100种细分品种。</p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-wrap justify-between items-center gap-4 mb-6">
               <div className="px-2">
                  <span className="font-bold text-gray-900">124</span> <span className="text-gray-500">个品种</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 hidden sm:block">排序方式：</span>
                  <select className="bg-gray-50 border-none rounded-lg text-sm font-bold py-2 pl-3 pr-8 focus:ring-0 cursor-pointer">
                     <option>最受欢迎</option>
                     <option>A-Z</option>
                  </select>
                  <div className="w-px h-6 bg-gray-200 hidden sm:block"></div>
                  <div className="flex bg-gray-100 rounded-lg p-1">
                     <button className="p-1.5 bg-white shadow-sm rounded text-[#ee7c2b]"><span className="material-symbols-outlined text-xl">grid_view</span></button>
                     <button className="p-1.5 text-gray-400 hover:text-gray-600"><span className="material-symbols-outlined text-xl">view_list</span></button>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
               {BREEDS.map((breed) => (
                  <div key={breed.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#ee7c2b]/30 transition-all duration-300 cursor-pointer flex flex-col">
                     <div className="relative h-60 overflow-hidden">
                        <img src={breed.image} alt={breed.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <button className="absolute top-3 right-3 p-2 bg-white/30 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-red-500">
                           <span className="material-symbols-outlined text-xl">favorite</span>
                        </button>
                     </div>
                     <div className="p-5 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                           <h3 className="text-xl font-bold group-hover:text-[#ee7c2b] transition-colors">{breed.name}</h3>
                           {breed.rating > 4.8 && <span className="text-[10px] font-bold text-[#ee7c2b] bg-[#ee7c2b]/10 px-2 py-1 rounded uppercase">热门</span>}
                        </div>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{breed.description}</p>
                        <div className="mt-auto flex flex-wrap gap-2">
                           {breed.origin && <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md font-medium">{breed.origin}</span>}
                           {breed.tags.map(tag => (
                              <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md font-medium">{tag}</span>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-12 flex flex-col items-center">
               <button className="px-8 py-3 bg-[#ee7c2b] hover:bg-[#d06216] text-white font-bold rounded-xl shadow-lg shadow-[#ee7c2b]/20 transition-transform active:scale-95">
                  加载更多品种
               </button>
               <div className="mt-4 w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ee7c2b] w-[10%]"></div>
               </div>
               <p className="text-xs text-gray-400 mt-2">显示 6 / 124</p>
            </div>
         </main>
      </div>
    </div>
  );
};

export default BreedListView;
