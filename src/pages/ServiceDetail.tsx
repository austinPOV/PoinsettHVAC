import { CheckCircle, Phone } from 'lucide-react';
import { services, BUSINESS_INFO } from '../lib/data';
import SEO, { ServiceSchema, FAQSchema, BreadcrumbSchema } from '../components/SEO';

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Service Not Found</h1>
          <a href="/services" className="text-primary hover:underline">View All Services</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={service.metaTitle} description={service.metaDescription} />
      <ServiceSchema service={{ name: service.title, description: service.description, provider: BUSINESS_INFO.name }} />
      <FAQSchema faqs={service.faq} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: window.location.origin },
          { name: 'Services', url: `${window.location.origin}/services` },
          { name: service.title, url: window.location.href }
        ]}
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-accent transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  Call Now
                </a>
                <a
                  href="/book"
                  className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-brand text-lg font-bold hover:bg-slate-100 transition-colors"
                >
                  Book Service
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Service Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-neutralGray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-neutralGray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-coolWhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faq.map((item, index) => (
              <div key={index} className="bg-white rounded-brand shadow-md p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.question}</h3>
                <p className="text-neutralGray leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for fast, reliable {service.title.toLowerCase()} in Greer, SC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-accent transition-colors"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <a
              href="/book"
              className="inline-block bg-white text-primary px-8 py-4 rounded-brand text-lg font-bold hover:bg-slate-100 transition-colors"
            >
              Book Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
