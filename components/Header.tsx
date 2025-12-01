import React, { useEffect, useState } from 'react';
import { Menu, Search, ShoppingCart, X, User } from 'lucide-react';

const navItems = [
  { href: '#hero', label: 'Ana Sayfa' },
  { href: '#process', label: 'Sistem Nasıl İşliyor?' },
  { href: '#packages', label: 'Hizmet Paketleri' },
  { href: '#blog', label: 'Blog' },
  { href: '#about', label: 'Hakkımızda' },
  { href: '#contact', label: 'İletişim' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('#hero');

  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash || '#hero';
      setActiveLink(hash);
    };
    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  const linkClasses = (href: string) =>
    `px-3 py-2 rounded-full transition-colors ${
      activeLink === href
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
    }`;

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
      {/* Top Bar */}
      <div className="bg-[#263562] text-white py-2 text-xs hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2">iletisim@egzersizlab.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-200 transition">Giriş Yap / Kayıt Ol</a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full text-xs font-semibold transition">
              Şimdi Başvur
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="EgzersizLab Logo"
              className="w-auto object-contain"
              style={{ height: '6.25rem' }} // h-25 approx
            />
            <span className="text-4xl font-bold text-[#263562]">EgzersizLab</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-3 font-medium text-gray-600 bg-white/70 backdrop-blur-lg rounded-full px-3 py-2 shadow-sm border border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={linkClasses(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ara..." 
                className="pl-4 pr-10 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 w-48 transition-all focus:w-64"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart size={22} className="text-gray-700" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg absolute w-full left-0 z-50">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={linkClasses(item.href)}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t pt-4 flex flex-col gap-3">
              <button className="flex items-center gap-2 text-gray-700 font-medium">
                <User size={18} /> Giriş Yap
              </button>
              <button className="bg-[#263562] text-white py-2 rounded-lg font-medium w-full">
                Şimdi Başvur
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
