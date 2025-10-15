import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../lib/data';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <>
      <SEO
        title="HVAC Tips & Blog | Poinsett Heating & Air"
        description="Expert HVAC tips, maintenance guides, and industry news from Poinsett Heating & Air. Learn how to keep your system running efficiently."
      />

      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">HVAC Tips & Insights</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Expert advice and industry knowledge to help you make informed decisions about your heating and cooling systems.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>Poinsett Team</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutralGray mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
