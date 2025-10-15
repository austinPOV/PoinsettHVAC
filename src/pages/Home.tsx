import { Phone, Star, Shield, CheckCircle, Award, Snowflake, Flame, Settings, Building2, AlertCircle, MapPin, HelpCircle, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO, services, reviews, serviceAreas, faqs } from '../lib/data';
import SEO, { LocalBusinessSchema } from '../components/SEO';
import { useState } from 'react';

export default function Home() {
  const coreServices = services.slice(0, 6);
  const featuredReviews = reviews.filter(r => r.featured).slice(0, 4);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

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
    return <Icon className="w-8 h-8" />;
  };

  return (
    <>
      <SEO />
      <LocalBusinessSchema />

      <section className="relative bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 fade-in">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight slide-up">
              Greer's Trusted HVAC Repair & Installation
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed font-light">
              Fast. Fair. 24/7 Service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-accent transition-all transform hover:scale-105 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
              <a
                href="/book"
                className="flex items-center justify-center bg-white text-navy px-8 py-4 rounded-brand text-lg font-bold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Schedule Service
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm bg-white/10 backdrop-blur-sm rounded-brand px-4 md:px-6 py-3 md:py-4 max-w-max">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">4.9 Rating</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Serving Greenville & Upstate</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-gray-300 text-sm">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">40+</div>
              <div className="text-gray-300 text-sm">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-gray-300 text-sm">Satisfaction Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">4.9★</div>
              <div className="text-gray-300 text-sm">Google Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-coolWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our HVAC Services
            </h2>
            <p className="text-xl text-neutralGray max-w-2xl mx-auto">
              Complete heating and cooling solutions for residential and commercial properties throughout the Greenville area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
            {coreServices.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.slug}`}
                className="bg-white rounded-brand shadow-md hover:shadow-xl transition-all hover-lift overflow-hidden group border border-slate-200"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-slate-100 rounded-brand flex items-center justify-center text-primary mb-4">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                  <p className="text-neutralGray mb-4">{service.subtitle}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <span className="ml-1 group-hover:ml-0">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-block bg-primary text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-primary transition-all transform hover:scale-105 shadow-lg"
            >
              View All Services →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Why Choose Poinsett Heating & Air?
              </h2>
              <p className="text-lg text-neutralGray mb-8 leading-relaxed">
                {BUSINESS_INFO.about}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: 'Licensed & Insured',
                    description: 'Fully licensed, bonded, and insured for your protection.'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Upfront Pricing',
                    description: 'Transparent pricing with no hidden fees or surprises.'
                  },
                  {
                    icon: Award,
                    title: '100% Satisfaction',
                    description: 'We stand behind our work with a complete satisfaction guarantee.'
                  },
                  {
                    icon: Settings,
                    title: 'Expert Technicians',
                    description: 'Certified professionals with ongoing training.'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-brand flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy mb-1">{feature.title}</h3>
                      <p className="text-sm text-neutralGray">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg"
                alt="HVAC Technician at Work"
                className="rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-brand p-2 inline-block mb-6">
            <div className="flex items-center gap-2 text-accent">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">24/7 Emergency Service</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            HVAC Emergency? We're Here to Help 24/7
          </h2>

          <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Don't wait in discomfort. Our expert technicians are ready to restore your heating or cooling system—fast.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-brand p-4">
              <div className="text-3xl font-bold text-accent mb-1">2 Hours</div>
              <div className="text-sm text-primary-100">Average Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-brand p-4">
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-primary-100">Always Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-brand p-4">
              <div className="text-3xl font-bold text-accent mb-1">No Fees</div>
              <div className="text-sm text-primary-100">Emergency Charges</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Call for Emergency Service
            </a>
            <a
              href="/emergency-types"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-brand text-lg font-bold hover:bg-accent hover:text-white transition-all transform hover:scale-105 shadow-xl"
            >
              <AlertCircle className="w-6 h-6" />
              Common Emergencies
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-coolWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-xl text-neutralGray">
              Rated 4.9 on Google - Read our {BUSINESS_INFO.reviewCount}+ reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 fade-in">
            {featuredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover-lift">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-neutralGray-light mb-6 leading-relaxed text-sm">"{review.reviewText}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {review.customerName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{review.customerName}</div>
                    <div className="text-xs text-gray-500">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/reviews"
              className="inline-block bg-primary text-white px-8 py-3 rounded-brand font-semibold hover:bg-accent transition-colors"
            >
              Read All Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ask About Easy Financing & Maintenance Plans
              </h2>
              <p className="text-lg text-white mb-6">
                Flexible payment options available. Keep your HVAC system running smoothly with our affordable maintenance plans.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>0% Financing Available (With Approved Credit)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Priority Service for Members</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>No Hidden Fees or Surprises</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-4 rounded-brand font-bold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Learn More
              </a>
            </div>
            <div className="bg-white rounded-brand p-8 border-2 border-primary-200 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-navy">Special Offers</h3>
              <div className="space-y-4">
                <div className="bg-slate-100 border-2 border-primary-300 text-navy rounded-brand p-4 hover-lift">
                  <div className="text-4xl font-bold text-primary mb-2">$50 OFF</div>
                  <p className="text-sm">Any HVAC Repair Service</p>
                  <p className="text-xs text-gray-500 mt-2">New customers only. Mention at booking.</p>
                </div>
                <div className="bg-slate-100 border-2 border-primary-300 text-navy rounded-brand p-4 hover-lift">
                  <div className="text-4xl font-bold text-primary mb-2">FREE</div>
                  <p className="text-sm">System Safety Inspection</p>
                  <p className="text-xs text-gray-500 mt-2">With any service call. Limited time offer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutralGray">
              Get answers to common questions about our HVAC services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 6).map((faq) => (
              <div key={faq.id} className="bg-coolWhite rounded-brand overflow-hidden border border-slate-200">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                >
                  <span className="font-semibold text-navy pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openFaq === faq.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-neutralGray leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-neutralGray mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-brand font-bold hover:bg-primary transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-coolWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Proudly Serving the Greenville Area
            </h2>
            <p className="text-xl text-neutralGray">
              Expert HVAC services throughout Greer, Greenville, and surrounding communities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {serviceAreas.map((area) => (
              <a
                key={area.id}
                href={`/service-areas/${area.city.toLowerCase().replace(' ', '-')}`}
                className="bg-coolWhite hover:bg-slate-100 border border-slate-200 hover:border-primary-300 rounded-brand p-4 text-center transition-all group"
              >
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-semibold text-navy group-hover:text-primary">{area.city}</div>
                <div className="text-sm text-gray-500">{area.state}</div>
              </a>
            ))}
          </div>

          <div className="bg-white border-2 border-primary rounded-xl p-8 md:p-12 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Not Sure If We Service Your Area?
              </h3>
              <p className="text-lg text-neutralGray mb-6">
                Give us a call and we'll let you know if we can help with your HVAC needs.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-4 rounded-brand font-bold hover:bg-primary transition-all transform hover:scale-105 shadow-lg"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your service online or call us now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-accent transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.phone}
            </a>
            <a
              href="/book"
              className="inline-flex items-center justify-center bg-white text-navy px-8 py-4 rounded-brand text-lg font-bold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Book Appointment Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
