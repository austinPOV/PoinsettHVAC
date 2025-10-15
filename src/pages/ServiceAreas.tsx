import { MapPin, Phone } from 'lucide-react';
import { serviceAreas, BUSINESS_INFO } from '../lib/data';
import SEO from '../components/SEO';

export default function ServiceAreas() {
  return (
    <>
      <SEO
        title="Service Areas | HVAC Services in Greer & Greenville, SC"
        description="Poinsett Heating & Air serves Greer, Greenville, Taylors, Simpsonville, Mauldin, Travelers Rest, and surrounding areas. 24/7 HVAC service available."
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Service Areas</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Providing expert HVAC services throughout the Greenville area
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <div key={area.id} className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal">{area.city}</h2>
                    <p className="text-neutralGray">{area.state} {area.zipCode}</p>
                  </div>
                </div>
                <p className="text-neutralGray mb-6">{area.description}</p>
                <a
                  href="/book"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-brand font-semibold hover:bg-primary transition-colors"
                >
                  Book Service
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-coolWhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">
            Don't See Your City Listed?
          </h2>
          <p className="text-xl text-neutralGray mb-8">
            We may still be able to help! Give us a call to see if we service your area.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-primary transition-colors"
          >
            <Phone className="w-6 h-6" />
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}
