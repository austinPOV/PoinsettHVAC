import { Calendar, User, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../lib/data';
import SEO from '../components/SEO';

export default function BlogPost({ slug }: { slug: string }) {
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Post Not Found</h1>
          <a href="/blog" className="text-primary hover:underline">Back to Blog</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        type="article"
        image={post.featuredImage}
        article={{
          publishedTime: post.publishedAt.toISOString(),
          author: 'Poinsett Heating & Air'
        }}
      />

      <article>
        <div className="relative h-96 bg-navy">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Poinsett Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <a href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </a>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-neutralGray leading-relaxed">{post.excerpt}</p>

            <p>
              This is a sample blog post. In a full implementation, the content would be stored in a database and rendered here using a rich text editor or markdown parser.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Regular HVAC maintenance extends system lifespan</li>
              <li>Proper maintenance reduces energy costs by up to 20%</li>
              <li>Early detection prevents costly emergency repairs</li>
              <li>Professional service ensures optimal performance</li>
            </ul>

            <h2>Get Expert Help</h2>
            <p>
              Need help with your HVAC system? Contact Poinsett Heating & Air for professional service you can trust.
            </p>
          </div>

          <div className="mt-12 p-8 bg-primary-50 rounded-xl">
            <h3 className="text-2xl font-bold text-charcoal mb-4">Need HVAC Service?</h3>
            <p className="text-neutralGray mb-6">
              Our team is ready to help with all your heating and cooling needs. Schedule your service today!
            </p>
            <a
              href="/book"
              className="inline-block bg-primary text-white px-8 py-3 rounded-brand font-semibold hover:bg-primary transition-colors"
            >
              Book Service Now
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
