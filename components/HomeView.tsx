import React from 'react';
import { BREEDS } from '../constants';

const HomeView: React.FC = () => {
  return (
    <div className="bg-[#f8f7f6] min-h-screen font-sans text-[#1b130d]">
      <section className="relative pt-12 pb-20 px-4 md:px-10 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8 z-10">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-wider uppercase text-xs">终极猫咪百科全书</span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-[#1b130d]">
                寻觅你的<span className="text-primary">完美猫咪</span>伙伴
              </h1>
              <p className="text-[#5c4a3d] text-lg font-medium leading-relaxed max-w-lg">
                探索我们完整的猫咪品种百科、养护技巧、行为指南等更多内容。
              </p>
            </div>

            <div className="relative max-w-lg w-full group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#9a6c4c]">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                type="text" 
                placeholder="搜索缅因猫、暹罗猫..." 
                className="w-full h-16 pl-14 pr-36 rounded-2xl bg-white border-2 border-transparent focus:border-primary/30 focus:ring-4 focus:ring-primary/10 outline-none shadow-sm text-lg transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary-dark text-white px-6 rounded-xl font-bold text-sm shadow-md transition-transform active:scale-95">
                查找品种
              </button>
            </div>

            <div className="flex gap-2 text-sm text-[#9a6c4c]">
              <span>热门搜索：</span>
              {['波斯猫', '孟加拉猫', '斯芬克斯猫'].map(tag => (
                <a key={tag} href="#" className="underline hover:text-primary transition-colors">{tag}</a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full max-w-[600px]">
            <div className="absolute inset-0 bg-[#fcece2] rounded-[3rem] rotate-3 scale-95 z-0 transform translate-y-4"></div>
            <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYX7SzRhlgCACGQ0vahA3GRrMz-WFgZvQYwF64jxgPGaoYUS3rZdCg3SFCgdKMGl-8nQCS56PLhPaRggsF0opgPUpvmyQLRXgf-0v8isCEz5n8_UWD2Rs7SCYdg8Iv6MaPwmGRPfkwTU1Ep-ueFkO91ycnDYdGyhvwOnp3m7n-acuFdNOe0GNiHKS31AwCm-r1o_vec3VHBeSaXlhpjtGhXmsr7U2OlBtpuo-A4jy6KdRGuaivl_EQBqY5kTA9AjO5w6mfxmNEkqI" 
                alt="Cat Hero" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce z-20">
              <div className="bg-green-100 p-2 rounded-full text-green-600 flex items-center justify-center">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-xs text-[#9a6c4c] font-bold uppercase">数据库</p>
                <p className="text-lg font-bold text-[#1b130d]">70+ 品种</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Breeds Section */}
      <section className="bg-white rounded-t-[3rem] py-16 px-4 md:px-10 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-black text-[#1b130d]">热门品种</h2>
            <a href="#" className="flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all">
              查看全部 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BREEDS.slice(0, 4).map((breed) => (
              <a key={breed.id} href="#" className="group bg-[#f8f7f6] rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={breed.image} alt={breed.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[14px]">favorite</span> {breed.rating}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{breed.name}</h3>
                  <p className="text-[#9a6c4c] text-sm font-medium mb-4">{breed.description}</p>
                  <div className="mt-auto flex gap-2 flex-wrap">
                    {breed.tags.map(tag => (
                      <span key={tag} className="bg-white text-[#5c4a3d] text-xs px-2 py-1 rounded-md font-bold">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary/10 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden text-center">
            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-2">
                <span className="material-symbols-outlined text-3xl">mark_email_unread</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1b130d]">获取每日猫咪冷知识</h2>
              <p className="text-[#5c4a3d] text-lg font-medium">订阅我们的时事通讯，获取最新的品种信息、护理技巧和可爱的照片。</p>
              
              <form className="flex w-full max-w-md flex-col sm:flex-row gap-3 mt-4">
                <input 
                  type="email" 
                  placeholder="输入您的电子邮件地址" 
                  className="flex-1 h-14 px-6 rounded-xl border-none focus:ring-4 focus:ring-primary/20 text-[#1b130d]"
                />
                <button className="h-14 px-8 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-md transition-transform active:scale-95">
                  订阅
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
