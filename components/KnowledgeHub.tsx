import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const featurePosts = [
  {
    title: "Omuz impingement: 3 adimlik rahatlama rehberi",
    desc: "Hastalar icin hizli anlasilabilir hareket ve nefes kombinasyonlari.",
    type: "Makale",
    time: "3 dk okuma",
    badge: "Guncel",
    color: "from-blue-50 to-cyan-50",
  },
  {
    title: "Bel agrisi icin 10 dakikalik core rutini",
    desc: "Evde uygulanan, ekipmansiz ve yaygin hatalardan arindirilmis mini seans.",
    type: "Video",
    time: "7 dk izleme",
    badge: "Video",
    color: "from-emerald-50 to-teal-50",
  },
  {
    title: "Migren tetikleyicileri: durus ve ekran suresi",
    desc: "Durus, nefes ve isik yonetimi ile atak azaltmaya yonelik kisa rehber.",
    type: "Biliyor muydunuz?",
    time: "2 dk okuma",
    badge: "Kisa bilgi",
    color: "from-amber-50 to-orange-50",
  },
];

const quickFacts = [
  "Gune 5 dakikalik boyun mobilizasyonu ile baslamak migren ataklarini dusurebilir.",
  "Bel agrisinda her 30 dakikada 2 dakikalik yuruyus, gerginligi belirgin azaltir.",
  "60 saniye uzak noktaya bakmak ekran yorgunlugunu ve bas agrisini azaltir.",
  "Denge egzersizleri diz cerrahisi sonrasi guvenli hareket kapasitesini arttirir.",
  "Gunes isigina kisa sureli maruziyet serotonin duzeyini destekleyerek gun ici enerjiyi iyilestirir.",
];

const KnowledgeHub = () => {
  const [activeFact, setActiveFact] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveFact((prev) => (prev + 1) % quickFacts.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => setActiveFact((prev) => (prev - 1 + quickFacts.length) % quickFacts.length);
  const goNext = () => setActiveFact((prev) => (prev + 1) % quickFacts.length);

  return (
    <section className="py-16 bg-white" id="knowledge">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
              Bilgi Merkezi
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3">Guncel icerikler ve kisa bilgiler</h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Hastalar icin pratik okunabilir rehberler, videolar ve “biliyor muydunuz?” notlari. Klinisyen icin hizli paylasilabilir formatta.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition"
          >
            Tum icerikleri gor
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {featurePosts.map((item, idx) => (
              <article
                key={idx}
                className={`p-6 rounded-2xl border border-gray-100 bg-gradient-to-br ${item.color} shadow-sm hover:shadow-md transition`}
              >
                <div className="flex items-center justify-between text-xs font-semibold text-gray-600 mb-3">
                  <span className="px-2 py-1 rounded-full bg-white/70 border border-white text-gray-800">
                    {item.badge}
                  </span>
                  <span className="text-gray-500">{item.time}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-3 text-sm text-blue-700 font-semibold">
                  <span className="px-3 py-1 rounded-full bg-white border border-blue-100">
                    {item.type}
                  </span>
                  <button className="text-blue-700 hover:text-blue-900 transition">
                    Incele
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="p-6 rounded-2xl border border-gray-100 bg-slate-900 text-white shadow-lg">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0f1c3a] via-[#0f1c3a] to-[#152c58] text-white shadow-lg p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-extrabold">
                  Bunlari <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300">biliyor muydunuz?</span>
                </h3>
                <div className="flex gap-2">
                  <button
                    aria-label="Önceki bilgi"
                    onClick={goPrev}
                    className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    aria-label="Sonraki bilgi"
                    onClick={goNext}
                    className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <div className="min-h-[140px] flex items-center">
                <p className="text-base lg:text-lg leading-relaxed text-white/90 transition-all duration-500">
                  {quickFacts[activeFact]}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                {quickFacts.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Not ${idx + 1}`}
                    onClick={() => setActiveFact(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeFact === idx ? "w-6 bg-emerald-400" : "w-2 bg-white/40"}`}
                  />
                ))}
              </div>
              <button className="mt-8 w-full bg-white text-[#0f1c3a] font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
                Daha fazla kisa bilgi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
