import { Award, Shield, Users, Heart, CheckCircle } from 'lucide-react';
import { teamMembers, BUSINESS_INFO } from '../lib/data';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Poinsett Heating & Air | Greer, SC"
        description="Learn about Poinsett Heating & Air, Greer's trusted HVAC contractor with 20+ years experience. Licensed, insured, and committed to customer satisfaction."
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Poinsett Heating & Air
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Your trusted partner for expert HVAC services in the Greenville area since 2000.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Our Story</h2>
              <div className="space-y-4 text-neutralGray leading-relaxed">
                <p>
                  Founded in Greer, South Carolina, Poinsett Heating & Air has been serving homeowners and businesses throughout the Greenville area for over two decades. What started as a one-man operation has grown into a trusted team of certified HVAC professionals dedicated to keeping our community comfortable year-round.
                </p>
                <p>
                  We understand that your heating and cooling system is essential to your home's comfort and your family's well-being. That's why we treat every job—whether it's a routine maintenance visit or an emergency repair—with the same level of care and attention to detail.
                </p>
                <p>
                  Our commitment to honest, transparent service has earned us a 5.0-star rating from our customers and made us one of the most trusted HVAC contractors in the Greer and Greenville area.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg"
                alt="HVAC Technician at Work"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-coolWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Why Choose Us</h2>
            <p className="text-xl text-neutralGray">The Poinsett Heating & Air difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Licensed & Insured',
                description: 'Fully licensed, bonded, and insured for your complete protection and peace of mind.'
              },
              {
                icon: Award,
                title: 'Certified Technicians',
                description: 'EPA-certified technicians with ongoing training in the latest HVAC technology.'
              },
              {
                icon: Users,
                title: 'Family Owned',
                description: 'Locally owned and operated, we treat our customers like family.'
              },
              {
                icon: Heart,
                title: 'Customer First',
                description: '100% satisfaction guarantee on all services. Your comfort is our priority.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-neutralGray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">Meet Our Team</h2>
            <p className="text-xl text-neutralGray">Experienced professionals dedicated to your comfort</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-neutralGray text-sm leading-relaxed mb-4">{member.bio}</p>
                  {member.isTechnician && (
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                      Certified Technician
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
              <ul className="space-y-4">
                {[
                  'Honest, upfront pricing with no hidden fees',
                  'Arrive on time, every time',
                  'Respect your home and leave it cleaner than we found it',
                  'Provide expert advice without pressure or upselling',
                  'Stand behind our work with warranties and guarantees',
                  'Available 24/7 for emergency service'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Our Guarantee</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                We're not satisfied until you are. If you're not completely happy with our service, we'll make it right—no questions asked. Your comfort and satisfaction are our top priorities, and we stand behind every job we complete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-coolWhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-neutralGray mb-8">
            Join hundreds of satisfied customers in the Greer and Greenville area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-block bg-primary text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-primary transition-colors"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href="/book"
              className="inline-block bg-accent text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-accent transition-colors"
            >
              Book Service Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
