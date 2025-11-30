import React from 'react';
import { MonitorPlay, Users, Award, BookOpen } from 'lucide-react';

const features = [
  { icon: <MonitorPlay size={32} />, title: "Online Eğitimler", desc: "Dilediğin yerden erişim" },
  { icon: <Users size={32} />, title: "Uzman Eğitmenler", desc: "Alanında öncü isimler" },
  { icon: <Award size={32} />, title: "Sertifikalı", desc: "Kariyerine değer kat" },
  { icon: <BookOpen size={32} />, title: "+8 Yıllık Deneyim", desc: "Güvenilir platform" },
];

const FeaturesBar = () => {
  return (
    <section className="bg-[#263562] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 text-white group">
              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg">{feature.title}</h4>
                <p className="text-blue-200 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;