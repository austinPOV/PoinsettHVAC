import { Star, ThumbsUp } from 'lucide-react';
import { reviews, BUSINESS_INFO } from '../lib/data';
import SEO from '../components/SEO';

export default function Reviews() {
  return (
    <>
      <SEO
        title="Customer Reviews | Poinsett Heating & Air"
        description="Read reviews from satisfied customers in Greer and Greenville, SC. Rated 5.0 stars for expert HVAC service, installation, and repairs."
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-2xl text-blue-100 mb-2">Rated {BUSINESS_INFO.rating} out of 5</p>
          <p className="text-lg text-blue-200">Based on {BUSINESS_INFO.reviewCount} Google reviews</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-neutralGray mb-6 leading-relaxed italic">
                  "{review.reviewText}"
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {review.customerName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">{review.customerName}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="px-2 py-1 bg-slate-100 rounded">
                    {review.source === 'google' ? 'Google' : 'Website'}
                  </span>
                  {review.featured && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 md:p-12 text-white text-center">
            <ThumbsUp className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Had a Great Experience?</h2>
            <p className="text-xl text-blue-100 mb-8">
              We'd love to hear from you! Share your experience and help others find reliable HVAC service.
            </p>
            <a
              href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-brand text-lg font-bold hover:bg-slate-100 transition-colors"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-coolWhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-6">
            Why Customers Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-brand p-6 shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-neutralGray">Emergency Service</div>
            </div>
            <div className="bg-white rounded-brand p-6 shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-neutralGray">Years Experience</div>
            </div>
            <div className="bg-white rounded-brand p-6 shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-neutralGray">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
