import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS_INFO } from '../lib/data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="hidden sm:block">
              <span className="font-medium">24/7 Emergency Service Available</span>
            </div>
            <div className="flex items-center gap-4">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center">
            <div>
              <div className="text-xl font-bold text-navy leading-tight">Poinsett Heating & Air</div>
              <div className="text-xs text-neutralGray">Greer, SC • 24/7 Service</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutralGray hover:text-primary hover:bg-coolWhite rounded-brand transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/book"
              className="bg-primary text-white px-6 py-3 rounded-brand font-semibold hover:bg-accent shadow-brand hover:shadow-accent transition-all"
            >
              Book Now
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-neutralGray"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-neutralGray hover:bg-coolWhite hover:text-primary rounded-brand transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/book"
              className="block w-full text-center bg-primary text-white px-6 py-3 rounded-brand font-semibold hover:bg-accent shadow-brand transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 pb-safe">
        <div className="grid grid-cols-2 gap-2 p-2 sm:p-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center justify-center gap-1 sm:gap-2 bg-primary text-white px-3 sm:px-4 py-3 rounded-brand font-semibold hover:bg-accent shadow-brand transition-all text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Call Now</span>
          </a>
          <a
            href="/book"
            className="flex items-center justify-center gap-1 bg-accent text-white px-3 sm:px-4 py-3 rounded-brand font-semibold hover:bg-primary shadow-accent transition-all text-sm sm:text-base"
          >
            <span>Book Online</span>
          </a>
        </div>
      </div>
    </header>
  );
}
