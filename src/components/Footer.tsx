import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="flex items-center mb-4 group">
              <div>
                <div className="text-xl font-bold leading-tight group-hover:text-accent transition-colors">Poinsett Heating & Air</div>
                <div className="text-xs text-gray-400">Greer, SC • 24/7 Service</div>
              </div>
            </a>
            <p className="text-gray-400 text-sm mb-4">
              Expert HVAC services in the Greenville area. Available 24/7 for all your heating and cooling needs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-navy-light rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-navy-light rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-navy-light rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/ac-installation-repair" className="text-gray-400 hover:text-accent transition-colors">A/C Installation & Repair</a></li>
              <li><a href="/services/cooling-systems-maintenance" className="text-gray-400 hover:text-accent transition-colors">Cooling Maintenance</a></li>
              <li><a href="/services/heating-furnace-service" className="text-gray-400 hover:text-accent transition-colors">Heating & Furnace</a></li>
              <li><a href="/services/preventative-maintenance-plans" className="text-gray-400 hover:text-accent transition-colors">Maintenance Plans</a></li>
              <li><a href="/services/commercial-hvac" className="text-gray-400 hover:text-accent transition-colors">Commercial HVAC</a></li>
              <li><a href="/services/emergency-repair" className="text-gray-400 hover:text-accent transition-colors">Emergency Repairs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-gray-400 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/reviews" className="text-gray-400 hover:text-accent transition-colors">Reviews</a></li>
              <li><a href="/service-areas" className="text-gray-400 hover:text-accent transition-colors">Service Areas</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-gray-400">{BUSINESS_INFO.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-gray-400 hover:text-accent transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-400 hover:text-accent transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-primary rounded-brand shadow-brand">
              <p className="text-sm font-semibold">Open 24 Hours</p>
              <p className="text-xs text-primary-100">Emergency Service Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
