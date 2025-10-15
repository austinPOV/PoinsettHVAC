import { Snowflake, Settings, Flame, Shield, Building2, AlertCircle } from 'lucide-react';
import { services } from '../lib/data';
import SEO, { BreadcrumbSchema } from '../components/SEO';

export default function Services() {
  const getServiceIcon = (iconName: string) => {
    const icons: Record<string, any> = {
      'Snowflake': Snowflake,
      'Settings': Settings,
      'Flame': Flame,
      'Shield': Shield,
      'Building2': Building2,
      'AlertCircle': AlertCircle
    };
    const Icon = icons[iconName] || Settings;
    return <Icon className="w-12 h-12" />;
  };

  return (
    <>
      <SEO
        title="HVAC Services in Greer, SC | Poinsett Heating & Air"
        description="Complete HVAC services: AC installation & repair, heating, maintenance plans, commercial HVAC, and 24/7 emergency repairs in Greer, SC."
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: window.location.origin },
          { name: 'Services', url: window.location.href }
        ]}
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert HVAC Services in Greer, SC
            </h1>
            <p className="text-xl text-blue-100">
              From installation to emergency repairs, we provide comprehensive heating and cooling solutions for homes and businesses throughout the Greenville area.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.slug}`}
                className="bg-white border-2 border-slate-200 rounded-xl hover:border-primary hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-brand flex items-center justify-center text-primary mb-4">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal mb-2">{service.title}</h2>
                  <p className="text-neutralGray mb-4">{service.subtitle}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    <span className="inline-block bg-slate-100 px-3 py-1 rounded-full mr-2">
                      {service.priceRange}
                    </span>
                    <span className="inline-block bg-slate-100 px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <span className="ml-1 group-hover:ml-0">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Right Away?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is available 24/7 for emergency HVAC service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18645511125"
              className="inline-block bg-accent text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-accent transition-colors"
            >
              Call (864) 551-1125
            </a>
            <a
              href="/book"
              className="inline-block bg-white text-primary px-8 py-4 rounded-brand text-lg font-bold hover:bg-slate-100 transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
