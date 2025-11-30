import React from 'react';
import { 
  Activity, 
  Brain, 
  HeartPulse, 
  Baby, 
  Users, 
} from 'lucide-react';

const categories = [
  { title: "Ortopedik Fizyoterapi", icon: <Activity />, color: "bg-blue-100 text-blue-600" },
  { title: "Ağrı Yönetimi", icon: <HeartPulse />, color: "bg-red-100 text-red-600" },
  { title: "Pelvik Fizyoterapi", icon: <Users />, color: "bg-teal-100 text-teal-600" },
  { title: "Spor Fizyoterapisi", icon: <Activity />, color: "bg-orange-100 text-orange-600" },
  { title: "Nörolojik Rehabilitasyon", icon: <Brain />, color: "bg-purple-100 text-purple-600" },
  { title: "Pediatrik Fizyoterapi", icon: <Baby />, color: "bg-pink-100 text-pink-600" },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Keşfet</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">Öne Çıkan Kategoriler</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Sertifika programı veya workshoplar ile dilediğin anabilim dalında klinik becerilerini geliştirebilirsin.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-gray-50 hover:bg-white rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-100 group cursor-pointer">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h3 className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors text-sm">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;