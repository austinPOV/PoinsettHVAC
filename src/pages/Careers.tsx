import { useState } from 'react';
import { Briefcase, CheckCircle, Send } from 'lucide-react';
import { jobPostings, BUSINESS_INFO } from '../lib/data';
import SEO from '../components/SEO';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setFormData({ name: '', email: '', phone: '', coverLetter: '' });
    }, 5000);
  };

  const job = jobPostings.find(j => j.id === selectedJob);

  return (
    <>
      <SEO
        title="Careers | Join Our Team | Poinsett Heating & Air"
        description="Join the Poinsett Heating & Air team. We're hiring experienced HVAC technicians and apprentices in Greer, SC. Competitive pay and benefits."
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Be part of a growing company that values integrity, expertise, and customer service.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedJob ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-charcoal mb-4">Open Positions</h2>
                <p className="text-xl text-neutralGray">
                  Explore opportunities to grow your career with us
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {jobPostings.map((job) => (
                  <div key={job.id} className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-brand flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-charcoal mb-2">{job.title}</h3>
                        <div className="flex gap-3 text-sm text-neutralGray">
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.employmentType}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutralGray mb-6">{job.description}</p>

                    <button
                      onClick={() => setSelectedJob(job.id)}
                      className="w-full bg-primary text-white px-6 py-3 rounded-brand font-semibold hover:bg-primary transition-colors"
                    >
                      View Details & Apply
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : submitted ? (
            <div className="max-w-2xl mx-auto bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-charcoal mb-4">Application Submitted!</h2>
              <p className="text-lg text-neutralGray mb-6">
                Thank you for applying to join our team. We'll review your application and get back to you soon.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setSelectedJob(null);
                }}
                className="bg-primary text-white px-8 py-3 rounded-brand font-semibold hover:bg-primary transition-colors"
              >
                View Other Positions
              </button>
            </div>
          ) : job ? (
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedJob(null)}
                className="text-primary hover:underline mb-6"
              >
                ← Back to Openings
              </button>

              <div className="bg-white border-2 border-slate-200 rounded-xl p-8 mb-8">
                <h2 className="text-3xl font-bold text-charcoal mb-4">{job.title}</h2>
                <div className="flex gap-4 text-neutralGray mb-6">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.employmentType}</span>
                </div>

                <div className="prose max-w-none mb-8">
                  <p className="text-lg text-neutralGray">{job.description}</p>

                  <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Requirements</h3>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-charcoal mt-6 mb-3">Benefits</h3>
                  <ul>
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-coolWhite rounded-xl p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-6">Apply for this Position</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutralGray mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutralGray mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutralGray mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutralGray mb-2">
                      Cover Letter / Why do you want to join our team? *
                    </label>
                    <textarea
                      required
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-brand focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-brand text-lg font-bold hover:bg-primary transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
