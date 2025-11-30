import React from 'react';
import { MonitorPlay, CalendarCheck } from 'lucide-react';

const WebinarPromo = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#263562] to-[#4d3579] rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
            <div className="lg:w-1/2 space-y-6">
              <span className="bg-yellow-400 text-[#263562] px-3 py-1 rounded font-bold text-xs uppercase tracking-wider">
                Dijital Televizyon
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold">EgzersizLab <span className="text-yellow-400">Webinar</span> Arşivi</h2>
              <p className="text-blue-100 text-lg">
                Webinar Arşivi aboneliği ile 10 farklı uzmanlık dalındaki 200'den fazla canlı seminer kaydına sınırsız ulaşabilirsin.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2"><CalendarCheck size={20} className="text-yellow-400" /> Her ay yenilenen yayınlar</li>
                <li className="flex items-center gap-2"><MonitorPlay size={20} className="text-yellow-400" /> Tüm cihazlardan erişim</li>
              </ul>
              <button className="bg-white text-[#263562] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg mt-4">
                Aboneliği Başlat
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
               <div className="relative">
                  <img 
                    src="https://picsum.photos/500/300?random=30" 
                    alt="Webinar" 
                    className="rounded-xl shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition duration-500"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-white text-[#263562] p-4 rounded-xl shadow-lg">
                     <span className="block text-2xl font-bold">+200</span>
                     <span className="text-sm font-medium">Webinar İçeriği</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarPromo;