import { Phone, AlertCircle, Thermometer, Snowflake, Droplets, Zap, Wind, Flame } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/data';
import SEO from '../components/SEO';

export default function EmergencyTypes() {
  const emergencies = [
    {
      icon: Flame,
      title: 'No Heat in Winter',
      description: 'Furnace failure during cold weather can be dangerous, especially for vulnerable family members. Common causes include thermostat issues, pilot light problems, or blower motor failure.',
      symptoms: [
        'Furnace won\'t turn on',
        'Cold air blowing from vents',
        'Strange noises or odors',
        'Thermostat not responding'
      ],
      severity: 'Critical'
    },
    {
      icon: Snowflake,
      title: 'AC Failure in Summer',
      description: 'When temperatures soar, a broken air conditioner isn\'t just uncomfortable—it can be a health risk. We prioritize these calls to keep your family safe and comfortable.',
      symptoms: [
        'Warm air from vents',
        'Unit won\'t start',
        'Frozen evaporator coil',
        'Unusual sounds or smells'
      ],
      severity: 'Critical'
    },
    {
      icon: Droplets,
      title: 'Water Leaks',
      description: 'HVAC water leaks can cause significant property damage if not addressed immediately. This often indicates a clogged drain line, frozen coil, or condensate pump failure.',
      symptoms: [
        'Water pooling around unit',
        'Ceiling water stains',
        'Musty odors',
        'High humidity indoors'
      ],
      severity: 'Urgent'
    },
    {
      icon: Zap,
      title: 'Electrical Issues',
      description: 'Electrical problems with your HVAC system pose fire hazards and should never be ignored. Signs include burning smells, tripped breakers, or sparking.',
      symptoms: [
        'Breaker keeps tripping',
        'Burning electrical smell',
        'Sparks or smoke',
        'System won\'t power on'
      ],
      severity: 'Critical'
    },
    {
      icon: Wind,
      title: 'Strange Noises',
      description: 'Loud banging, grinding, or squealing sounds often indicate serious mechanical problems that can worsen quickly without immediate attention.',
      symptoms: [
        'Loud banging or clanking',
        'Grinding metal sounds',
        'High-pitched squealing',
        'Rattling or buzzing'
      ],
      severity: 'Urgent'
    },
    {
      icon: Thermometer,
      title: 'Refrigerant Leak',
      description: 'Low refrigerant reduces cooling efficiency and can damage your compressor. Hissing sounds or ice buildup are common warning signs requiring immediate service.',
      symptoms: [
        'Ice on refrigerant lines',
        'Hissing or bubbling sounds',
        'Reduced cooling power',
        'Higher energy bills'
      ],
      severity: 'Urgent'
    }
  ];

  const getSeverityColor = (severity: string) => {
    if (severity === 'Critical') return 'bg-red-100 text-red-700 border-red-300';
    return 'bg-accent-100 text-accent-700 border-accent-300';
  };

  return (
    <>
      <SEO
        title="Common HVAC Emergencies | 24/7 Emergency Service"
        description="Recognize HVAC emergencies and get immediate help. Learn about common heating and cooling emergencies and when to call for 24/7 service in Greer, SC."
      />

      <section className="bg-gradient-primary text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-brand p-2 inline-block mb-6">
            <div className="flex items-center gap-2 text-accent">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Emergency Guide</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Common HVAC Emergencies
          </h1>

          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Recognize the warning signs and know when to call for immediate help. Our team is available 24/7 to handle any HVAC emergency.
          </p>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-white hover:text-primary transition-all transform hover:scale-105 shadow-xl"
          >
            <Phone className="w-6 h-6" />
            Call Now: {BUSINESS_INFO.phone}
          </a>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencies.map((emergency, index) => (
              <div key={index} className="bg-coolWhite rounded-brand p-6 shadow-soft hover:shadow-brand-hover transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-brand flex items-center justify-center">
                    <emergency.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getSeverityColor(emergency.severity)}`}>
                    {emergency.severity}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">
                  {emergency.title}
                </h3>

                <p className="text-neutralGray mb-4 text-sm leading-relaxed">
                  {emergency.description}
                </p>

                <div className="border-t border-slate-200 pt-4">
                  <h4 className="text-sm font-semibold text-navy mb-2">Warning Signs:</h4>
                  <ul className="space-y-1">
                    {emergency.symptoms.map((symptom, idx) => (
                      <li key={idx} className="text-sm text-neutralGray flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-coolWhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-brand shadow-xl p-8 md:p-12 text-center">
            <AlertCircle className="w-16 h-16 text-accent mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              When in Doubt, Call Us Out
            </h2>

            <p className="text-lg text-neutralGray mb-8 max-w-2xl mx-auto">
              If you're experiencing any HVAC issues, don't wait. Our experienced technicians are available 24/7 to diagnose and fix your problem quickly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-coolWhite rounded-brand p-4">
                <div className="text-3xl font-bold text-primary mb-1">2 Hours</div>
                <div className="text-sm text-neutralGray">Average Response Time</div>
              </div>
              <div className="bg-coolWhite rounded-brand p-4">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-neutralGray">Always Available</div>
              </div>
              <div className="bg-coolWhite rounded-brand p-4">
                <div className="text-3xl font-bold text-primary mb-1">No Fees</div>
                <div className="text-sm text-neutralGray">Emergency Charges</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-primary transition-all transform hover:scale-105 shadow-brand"
              >
                <Phone className="w-6 h-6" />
                Call for Emergency Service
              </a>
              <a
                href="/book"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-accent transition-all transform hover:scale-105 shadow-brand"
              >
                Schedule Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
