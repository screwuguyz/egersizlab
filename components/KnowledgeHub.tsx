import React from 'react';

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
];

const KnowledgeHub = () => {
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
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Bunlari biliyor muydunuz?</h3>
              <span className="text-xs text-white/70">Kisa notlar</span>
            </div>
            <ul className="space-y-4">
              {quickFacts.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>
                  <p className="text-sm leading-relaxed text-white/90">{fact}</p>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full bg-white text-slate-900 font-semibold py-3 rounded-lg hover:bg-blue-50 transition">
              Daha fazla kisa bilgi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
