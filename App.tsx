import React from 'react';
import Header from '@/components/Header';
import CourseCard from './components/CourseCard';
import GeminiAssistant from './components/GeminiAssistant';
import PopularCourses from './PopularCourses'; // Düzeltilmiş yol
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import KnowledgeHub from './components/KnowledgeHub';
import Categories from './components/Categories';
import WebinarPromo from './components/WebinarPromo';
import { Course } from './types';

// Mock Data
const courses: Course[] = [
  {
    id: 1,
    title: "Vakalarla Omurgada Radyolojik Değerlendirme: MR-XRay-BT",
    instructor: "Dr. Ahmet Yılmaz",
    price: 1100,
    rating: 5.0,
    reviewCount: 2,
    image: "https://picsum.photos/400/250?random=1",
    category: "Workshop",
    duration: "3 Saat",
    students: 46
  },
  {
    id: 2,
    title: "Diz Cerrahileri Sonrası Rehabilitasyon Sertifika Programı",
    instructor: "Prof. Dr. Ayşe Demir",
    price: 3000,
    rating: 4.8,
    reviewCount: 4,
    image: "https://picsum.photos/400/250?random=2",
    category: "Ortopedi",
    duration: "38 Ders",
    students: 54
  },
  {
    id: 3,
    title: "Fonksiyonel Bantlama Teknikleri",
    instructor: "Uzm. Fzt. Mehmet Kaya",
    price: 3000,
    rating: 4.9,
    reviewCount: 14,
    image: "https://picsum.photos/400/250?random=3",
    category: "Manuel Terapi",
    duration: "15 Ders",
    students: 65
  },
  {
    id: 4,
    title: "İnmede Fizyoterapi ve Rehabilitasyon",
    instructor: "Dr. Zeynep Çelik",
    price: 1499,
    rating: 5.0,
    reviewCount: 7,
    image: "https://picsum.photos/400/250?random=4",
    category: "Nöroloji",
    duration: "2 Saat",
    students: 26
  }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Hero />
      <KnowledgeHub />
      <FeaturesBar />
      <Categories />

      {/* Popular Courses */}
      <PopularCourses courses={courses} />

      <WebinarPromo />

      {/* Stats Counter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div>
              <div className="text-4xl font-bold text-teal-500 mb-2">14.6B</div>
              <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Aktif Üye</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">5.4B</div>
              <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Tamamlanan Kurs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">96%</div>
              <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Olumlu Geri Bildirim</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">30+</div>
              <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">Deneyimli Eğitmen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="EgzersizLab Logo" className="h-8 w-auto mix-blend-screen" />
                <span className="text-xl font-bold text-white">EgzersizLab</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Türkiye'nin fizyoterapi alanına özel ilk online platformu. Kariyerinizde bir adım öne geçin.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">IG</div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">TW</div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">LN</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Hızlı Erişim</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Sertifikalı Eğitimler</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Workshoplar</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Yüz Yüze Eğitimler</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Webinar Arşivi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Kurumsal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Eğitmenler</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">İletişim</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Kariyer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">İletişim</h4>
              <ul className="space-y-3 text-sm">
                <li>Adres: Teknoloji Vadisi, İstanbul</li>
                <li>Tel: +90 555 123 45 67</li>
                <li>Email: destek@egzersizlab.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2024 EgzersizLab. Tüm hakları saklıdır.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <GeminiAssistant />
    </div>
  );
}

export default App;
