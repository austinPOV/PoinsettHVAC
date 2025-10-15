import { useState, useEffect } from 'react';
import { Calendar, Clock, CreditCard, CheckCircle, User, Mail, Phone as PhoneIcon, MapPin, ChevronLeft } from 'lucide-react';
import { services, teamMembers, BUSINESS_INFO } from '../lib/data';
import SEO from '../components/SEO';

export default function BookingPage() {
  const [step, setStep] = useState(() => {
    const saved = sessionStorage.getItem('bookingStep');
    return saved ? parseInt(saved) : 1;
  });
  const [bookingData, setBookingData] = useState(() => {
    const saved = sessionStorage.getItem('bookingData');
    return saved ? JSON.parse(saved) : {
      serviceId: '',
      date: '',
      time: '',
      technicianId: '',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      customerAddress: '',
      notes: '',
      promoCode: '',
      paymentMethod: 'card'
    };
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('bookingStep', step.toString());
    sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
  }, [step, bookingData]);

  const technicians = teamMembers.filter(member => member.isTechnician);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    sessionStorage.removeItem('bookingStep');
    sessionStorage.removeItem('bookingData');
    console.log('Booking submitted:', bookingData);
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const selectedService = services.find(s => s.id === bookingData.serviceId);
  const selectedTechnician = technicians.find(t => t.id === bookingData.technicianId);

  if (submitted) {
    return (
      <>
        <SEO title="Booking Confirmation | Poinsett Heating & Air" />
        <div className="min-h-screen bg-coolWhite py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-charcoal mb-4">Booking Confirmed!</h1>
              <p className="text-lg text-neutralGray mb-8">
                Thank you for choosing Poinsett Heating & Air. Your appointment has been scheduled.
              </p>

              <div className="bg-coolWhite rounded-brand p-6 mb-8 text-left">
                <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutralGray">Service:</span>
                    <span className="font-semibold">{selectedService?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutralGray">Date:</span>
                    <span className="font-semibold">{bookingData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutralGray">Time:</span>
                    <span className="font-semibold">{bookingData.time}</span>
                  </div>
                  {selectedTechnician && (
                    <div className="flex justify-between">
                      <span className="text-neutralGray">Technician:</span>
                      <span className="font-semibold">{selectedTechnician.name}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-neutralGray mb-6">
                A confirmation email has been sent to {bookingData.customerEmail}. You will also receive an SMS reminder 24 hours before your appointment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-brand font-semibold hover:bg-primary transition-colors"
                >
                  Back to Home
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-block bg-gray-200 text-charcoal-light px-8 py-3 rounded-brand font-semibold hover:bg-gray-300 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title="Book an Appointment | Poinsett Heating & Air" description="Schedule your HVAC service online. Easy booking with calendar selection, service options, and secure payment." />

      <div className="min-h-screen bg-coolWhite py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-primary text-white px-8 py-6">
              <h1 className="text-3xl font-bold mb-2">Book Your Service</h1>
              <p className="text-blue-100">Schedule your HVAC service in just a few easy steps</p>
            </div>

            <div className="px-8 py-6">
              <div className="flex items-center justify-between mb-8">
                {[
                  { num: 1, label: 'Service', icon: Calendar },
                  { num: 2, label: 'Schedule', icon: Clock },
                  { num: 3, label: 'Details', icon: User },
                  { num: 4, label: 'Confirm', icon: CreditCard }
                ].map(({ num, label, icon: Icon }) => (
                  <div key={num} className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        step >= num ? 'bg-primary text-white' : 'bg-gray-200 text-neutralGray'
                      }`}
                    >
                      {step > num ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    </div>
                    <span className={`ml-2 text-sm font-medium hidden sm:inline ${step >= num ? 'text-primary' : 'text-gray-500'}`}>
                      {label}
                    </span>
                    {num < 4 && <div className={`hidden md:block w-16 h-0.5 ml-4 ${step > num ? 'bg-primary' : 'bg-gray-200'}`} />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-6">Select Your Service</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => {
                            setBookingData({ ...bookingData, serviceId: service.id });
                            setStep(2);
                          }}
                          className={`text-left p-6 rounded-brand border-2 transition-all hover:border-primary hover:shadow-lg ${
                            bookingData.serviceId === service.id
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-slate-200'
                          }`}
                        >
                          <h3 className="text-lg font-bold text-charcoal mb-2">{service.title}</h3>
                          <p className="text-sm text-neutralGray mb-3">{service.subtitle}</p>
                          <div className="flex gap-2">
                            <span className="text-xs bg-slate-100 px-2 py-1 rounded">{service.priceRange}</span>
                            <span className="text-xs bg-slate-100 px-2 py-1 rounded">{service.duration}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-6">Choose Date & Time</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-neutralGray mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split('T')[0]}
                          value={bookingData.date}
                          onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutralGray mb-2">
                          Preferred Time
                        </label>
                        <select
                          required
                          value={bookingData.time}
                          onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select a time</option>
                          <option value="8:00 AM">8:00 AM</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutralGray mb-2">
                          Select Technician (Optional)
                        </label>
                        <select
                          value={bookingData.technicianId}
                          onChange={(e) => setBookingData({ ...bookingData, technicianId: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">First available technician</option>
                          {technicians.map((tech) => (
                            <option key={tech.id} value={tech.id}>
                              {tech.name} - {tech.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex gap-4 flex-col sm:flex-row">
                        <button
                          type="button"
                          onClick={goBack}
                          className="flex-1 px-6 py-3 border border-gray-300 rounded-brand font-semibold text-neutralGray hover:bg-coolWhite transition-colors flex items-center justify-center gap-2"
                        >
                          <ChevronLeft className="w-5 h-5" />
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => bookingData.date && bookingData.time && setStep(3)}
                          className="flex-1 px-6 py-3 bg-primary text-white rounded-brand font-semibold hover:bg-primary transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                          disabled={!bookingData.date || !bookingData.time}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-6">Your Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-neutralGray mb-2">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Full Name
                          </div>
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingData.customerName}
                          onChange={(e) => setBookingData({ ...bookingData, customerName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutralGray mb-2">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email Address
                          </div>
                        </label>
                        <input
                          type="email"
                          required
                          value={bookingData.customerEmail}
                          onChange={(e) => setBookingData({ ...bookingData, customerEmail: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutralGray mb-2">
                          <div className="flex items-center gap-2">
                            <PhoneIcon className="w-4 h-4" />
                            Phone Number
                          </div>
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookingData.customerPhone}
                          onChange={(e) => setBookingData({ ...bookingData, customerPhone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="(864) 555-0123"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutralGray mb-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Service Address
                          </div>
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingData.customerAddress}
                          onChange={(e) => setBookingData({ ...bookingData, customerAddress: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="123 Main St, Greer, SC 29650"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutralGray mb-2">
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          value={bookingData.notes}
                          onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Any specific details or concerns about your HVAC system?"
                        />
                      </div>

                      <div className="flex gap-4 flex-col sm:flex-row">
                        <button
                          type="button"
                          onClick={goBack}
                          className="flex-1 px-6 py-3 border border-gray-300 rounded-brand font-semibold text-neutralGray hover:bg-coolWhite transition-colors flex items-center justify-center gap-2"
                        >
                          <ChevronLeft className="w-5 h-5" />
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            bookingData.customerName &&
                            bookingData.customerEmail &&
                            bookingData.customerPhone &&
                            bookingData.customerAddress &&
                            setStep(4)
                          }
                          className="flex-1 px-6 py-3 bg-primary text-white rounded-brand font-semibold hover:bg-primary transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                          disabled={
                            !bookingData.customerName ||
                            !bookingData.customerEmail ||
                            !bookingData.customerPhone ||
                            !bookingData.customerAddress
                          }
                        >
                          Review & Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-6">Confirm Your Appointment</h2>
                    <div className="space-y-6">
                      <div className="bg-primary-50 border border-red-200 rounded-brand p-6">
                        <h3 className="font-semibold text-lg mb-4">Booking Summary</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Service:</span>
                            <span className="font-semibold">{selectedService?.title}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Date:</span>
                            <span className="font-semibold">{bookingData.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Time:</span>
                            <span className="font-semibold">{bookingData.time}</span>
                          </div>
                          <div className="flex justify-between pt-2 border-t border-red-200">
                            <span>Deposit:</span>
                            <span className="font-bold text-lg">$0.00</span>
                          </div>
                          <p className="text-xs text-neutralGray pt-2">
                            Final cost will be determined after service. No deposit required for booking.
                          </p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutralGray mb-2">
                          Promo Code (Optional)
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={bookingData.promoCode}
                            onChange={(e) => setBookingData({ ...bookingData, promoCode: e.target.value })}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Enter promo code"
                          />
                          <button
                            type="button"
                            className="px-6 py-3 border border-gray-300 rounded-brand font-semibold text-neutralGray hover:bg-coolWhite transition-colors"
                          >
                            Apply
                          </button>
                        </div>
                      </div>

                      <div className="bg-coolWhite rounded-brand p-4">
                        <label className="flex items-center gap-3">
                          <input type="checkbox" required className="w-5 h-5 text-primary" />
                          <span className="text-sm text-neutralGray">
                            I agree to the{' '}
                            <a href="/terms" className="text-primary hover:underline">
                              Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="/privacy" className="text-primary hover:underline">
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>

                      <div className="flex gap-4 flex-col sm:flex-row">
                        <button
                          type="button"
                          onClick={goBack}
                          className="flex-1 px-6 py-3 border border-gray-300 rounded-brand font-semibold text-neutralGray hover:bg-coolWhite transition-colors flex items-center justify-center gap-2"
                        >
                          <ChevronLeft className="w-5 h-5" />
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 px-6 py-3 bg-green-600 text-white rounded-brand font-semibold hover:bg-green-700 transition-colors"
                        >
                          Confirm Booking
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
