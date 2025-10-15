import { Shield, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/data';
import SEO from '../components/SEO';
import { useEffect, useState } from 'react';

export default function Privacy() {
  const [hasBookingInProgress, setHasBookingInProgress] = useState(false);

  useEffect(() => {
    const bookingData = sessionStorage.getItem('bookingData');
    setHasBookingInProgress(!!bookingData);
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy | Poinsett Heating & Air"
        description="Privacy Policy for Poinsett Heating & Air. Learn how we collect, use, and protect your personal information."
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
              <Shield className="w-12 h-12" />
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-blue-100">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              {BUSINESS_INFO.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you provide to us, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Service address and property details</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Communication preferences</li>
              <li>Service history and notes</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser information</li>
              <li>Device information</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our HVAC services</li>
              <li>Schedule appointments and send service reminders</li>
              <li>Process payments and maintain records</li>
              <li>Communicate with you about our services</li>
              <li>Send promotional materials (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>

            <h2>Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information with:</p>
            <ul>
              <li>Service providers who assist in our operations</li>
              <li>Payment processors for transaction processing</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to certain data processing activities</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
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
