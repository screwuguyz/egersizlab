import React, { useEffect, useState } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const facts = [
  "Gune 5 dakikalik boyun mobilizasyonu ile baslamak migren ataklarini dusurebilir.",
  "Bel agrisinda her 30 dakikada 2 dakikalik yuruyus gerginligi belirgin azaltir.",
  "60 saniye uzak noktaya bakmak ekran yorgunlugunu ve bas agrisini azaltir.",
  "Denge egzersizleri diz cerrahisi sonrasi guvenli hareket kapasitesini arttirir.",
  "Gunes isigina kisa sureli maruziyet serotonin duzeyini destekleyerek gun ici enerjiyi iyilestirir.",
];

const Hero = () => {
  const [activeFact, setActiveFact] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveFact((prev) => (prev + 1) % facts.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => setActiveFact((prev) => (prev - 1 + facts.length) % facts.length);
  const goNext = () => setActiveFact((prev) => (prev + 1) % facts.length);

  return (
    <section className="relative bg-gradient-to-br from-[#eff6ff] to-[#f0fdfa] py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Senin Vücudun, Bizim Bilimimiz: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Hareketin Yeni Formülü.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Egzersiz ve rehabilitasyonun birleştiği modern sağlık platformu. Sağlığın için dilediğin yerde, dilediğin zamanda harekete geç.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-[#263562] hover:bg-[#1e2a4f] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Kursları Keşfet
              </button>
              <button className="bg-white hover:bg-gray-50 text-[#263562] border border-gray-200 px-8 py-3.5 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md">
                Daha Fazla Bilgi
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-6 text-sm font-medium text-gray-500">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/32/32?random=10" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/32/32?random=11" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://picsum.photos/32/32?random=12" alt="User" />
              </div>
              <p><span className="text-blue-600 font-bold">+10k</span> Öğrenci bize güveniyor</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0f1c3a] via-[#0f1c3a] to-[#152c58] text-white shadow-2xl p-8 lg:p-10 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl lg:text-3xl font-extrabold">
                  <span className="text-white">Bunlari </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300">
                    biliyor muydunuz?
                  </span>
                </h3>
                <div className="flex gap-2">
                  <button
                    aria-label="Önceki bilgi"
                    onClick={goPrev}
                    className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    aria-label="Sonraki bilgi"
                    onClick={goNext}
                    className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="min-h-[180px] flex items-center">
                <p className="text-lg lg:text-xl leading-relaxed text-white/90 transition-all duration-500">
                  {facts[activeFact]}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                {facts.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Fact ${idx + 1}`}
                    onClick={() => setActiveFact(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeFact === idx ? "w-6 bg-emerald-400" : "w-2 bg-white/40"}`}
                  />
                ))}
              </div>
              <button className="mt-8 w-full bg-white text-[#0f1c3a] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                Daha fazla kisa bilgi
              </button>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
