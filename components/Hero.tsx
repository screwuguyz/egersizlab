import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const exerciseCards = new URL('../exercise-cards.jpg.png', import.meta.url).href;

const sliderItems = [
  `Hastanelerde adeta bir brosur gibi dagitilan bu standart egzersiz receteleri, hastayi gercekten tedavi etmek icin mi, yoksa "bir seyler onermis olmak" icin mi veriliyor?

Ayni kagidin, 20 yasindaki bir sporcunun on capraz bag sakatligina da, 70 yasindaki bir teyzenin ileri derece kireclenmesine de (osteoartrit) sifa olmasi beklenebilir mi?

Elinize tutusturulan o kagit, sizin agri esiginizi, kas dengesizliginizi veya hareket kisitliliginizi "okuyabiliyor" mu?`,
  `Anatomimiz parmak izimiz kadar benzersizken, tedavimiz nasil bir fotokopi makinesinden cikabilir?

Herkesin kemik yapisi, eklem acisi, gecmisteki yaralanmalari ve yasam tarzi birbirinden tamamen farkliyken; hepsini ayni hareketlerle iyilestirmeye calismak, farkli kilitleri ayni anahtarla acmaya calismak degil midir?

Bir baskasina iyi gelen "bacak kaldirma" hareketi, sizin ozel durumunuzda dizinize daha fazla yuk bindirip sorunu buyutuyorsa, o kagidin sorumlulugunu kim alacak?`,
  `Gercek fizik tedavi; kagittan hareket bakmak degil, size ozel dikilmis bir elbise gibi tasarlanan, surec icinde degistirilen dinamik bir programdir.

Egzersiz ilactir; dozaji, sikligi ve turu kisiye gore ayarlanmadiginda zehire donusebilir.

Planiniz, semptomlariniza ve anatomik ihtiyaciniza gore yasayan bir recete olmali.`
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderItems.length);
    }, 30000);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => setActiveSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
  const goNext = () => setActiveSlide((prev) => (prev + 1) % sliderItems.length);

  return (
    <section className="relative bg-gradient-to-br from-[#eff6ff] to-[#f0fdfa] py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Senin Vucudun, Bizim Bilimimiz: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Hareketin Yeni Formulu.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Egzersiz ve rehabilitasyonun birlestigi modern saglik platformu. Sagligin icin diledigin yerde, diledigin zamanda harekete gec.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-[#263562] hover:bg-[#1e2a4f] text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Kurslari Kesfet
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
              <p><span className="text-blue-600 font-bold">+10k</span> ogrenci bize guveniyor</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div className="bg-gradient-to-r from-[#0f1c3a]/85 to-[#1c2f55]/85 text-white px-5 py-3 rounded-2xl shadow-2xl max-w-xl border border-white/10">
                  <p className="text-xs uppercase tracking-wide text-white/70 font-semibold">Standart kagitlar ise yaradi mi?</p>
                  <h3 className="text-2xl lg:text-3xl font-extrabold leading-tight">Gercekten ise yaradi mi?</h3>
                  <p className="mt-2 text-sm text-white/85">Kagidin sizin anatomik ihtiyacinizi okuyup okuyamadigini gelin birlikte sorgulayalim.</p>
                </div>
              </div>
              <img 
                src={exerciseCards}
                alt="Standart egzersiz kagitlari" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#0f1c3a] via-[#0f1c3a] to-[#152c58] text-white shadow-xl p-5 lg:p-6 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg lg:text-xl font-extrabold text-white">
                  Neden kisiye ozel egzersiz?
                </h3>
                <div className="flex gap-2">
                  <button
                    aria-label="Onceki"
                    onClick={goPrev}
                    className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    aria-label="Sonraki"
                    onClick={goNext}
                    className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <div className="text-sm lg:text-base text-white/90 leading-relaxed min-h-[120px] transition-all duration-300 space-y-3">
                {sliderItems[activeSlide]
                  .split('\n')
                  .filter(Boolean)
                  .map((line, idx) => (
                    <p
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 shadow-sm"
                    >
                      {line.trim()}
                    </p>
                  ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                {sliderItems.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Slayt ${idx + 1}`}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? "w-6 bg-emerald-400" : "w-2 bg-white/50"}`}
                  />
                ))}
              </div>
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
