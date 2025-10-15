import { FileText, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/data';
import SEO from '../components/SEO';
import { useEffect, useState } from 'react';

export default function Terms() {
  const [hasBookingInProgress, setHasBookingInProgress] = useState(false);

  useEffect(() => {
    const bookingData = sessionStorage.getItem('bookingData');
    setHasBookingInProgress(!!bookingData);
  }, []);

  return (
    <>
      <SEO
        title="Terms of Service | Poinsett Heating & Air"
        description="Terms of Service for Poinsett Heating & Air. Read our service terms and conditions."
      />

      <div className="min-h-screen bg-coolWhite">
        <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {hasBookingInProgress && (
              <div className="mb-6">
                <a
                  href="/book"
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-brand font-semibold hover:bg-accent transition-colors shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Resume Booking
                </a>
              </div>
            )}
            <div className="flex items-center gap-4 mb-4">
              <FileText className="w-12 h-12" />
              <h1 className="text-4xl font-bold">Terms of Service</h1>
            </div>
            <p className="text-blue-100">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the services of {BUSINESS_INFO.name}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Services</h2>
            <p>
              {BUSINESS_INFO.name} provides heating, ventilation, and air conditioning (HVAC) services including installation, repair, maintenance, and emergency services in the Greenville, SC area.
            </p>

            <h2>Appointments and Scheduling</h2>
            <ul>
              <li>Appointments must be scheduled in advance through our website, phone, or email</li>
              <li>We will make every effort to arrive within the scheduled time window</li>
              <li>Cancellations must be made at least 24 hours in advance to avoid fees</li>
              <li>Emergency services are available 24/7 and may be subject to additional charges</li>
            </ul>

            <h2>Pricing and Payment</h2>
            <ul>
              <li>We provide upfront pricing estimates before beginning work</li>
              <li>Final costs may vary based on actual work performed and parts required</li>
              <li>Payment is due upon completion of services unless otherwise arranged</li>
              <li>We accept cash, checks, and major credit cards</li>
              <li>A service call fee may apply for diagnostic visits</li>
            </ul>

            <h2>Warranties and Guarantees</h2>
            <ul>
              <li>We guarantee 100% satisfaction with our services</li>
              <li>All work is warranted for 30 days from the date of service</li>
              <li>Parts are covered by manufacturer warranties</li>
              <li>Installation work carries a one-year labor warranty</li>
            </ul>

            <h2>Customer Responsibilities</h2>
            <p>Customers agree to:</p>
            <ul>
              <li>Provide accurate information about their HVAC systems</li>
              <li>Ensure safe access to equipment</li>
              <li>Secure pets during service visits</li>
              <li>Provide timely payment for services rendered</li>
              <li>Notify us immediately of any concerns with completed work</li>
            </ul>

            <h2>Liability Limitations</h2>
            <p>
              {BUSINESS_INFO.name} is not liable for:
            </p>
            <ul>
              <li>Pre-existing conditions not disclosed by the customer</li>
              <li>Damage caused by improper system use after service</li>
              <li>Acts of nature or circumstances beyond our control</li>
              <li>Consequential damages resulting from system malfunction</li>
            </ul>

            <h2>Emergency Services</h2>
            <p>
              Emergency services are available 24/7. Emergency service calls may be subject to additional fees. We will make every reasonable effort to respond promptly to emergency calls.
            </p>

            <h2>Maintenance Agreements</h2>
            <p>
              Customers enrolled in maintenance plans agree to the specific terms outlined in their maintenance agreement. Benefits may include priority scheduling, discounted rates, and regular system inspections.
            </p>

            <h2>Disputes</h2>
            <p>
              Any disputes arising from our services will be resolved through good faith negotiation. If resolution cannot be reached, disputes will be subject to arbitration in South Carolina.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, contact us:</p>
            <ul>
              <li>Phone: <a href={`tel:${BUSINESS_INFO.phoneRaw}`}>{BUSINESS_INFO.phone}</a></li>
              <li>Email: <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a></li>
              <li>Address: {BUSINESS_INFO.address.full}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
