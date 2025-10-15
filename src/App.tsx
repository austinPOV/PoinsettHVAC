import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import BookingPage from './pages/BookingPage';
import About from './pages/About';
import Reviews from './pages/Reviews';
import ServiceAreas from './pages/ServiceAreas';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import EmergencyTypes from './pages/EmergencyTypes';
import Chatbot from './components/Chatbot';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);

    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      handleLocationChange();
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href && link.origin === window.location.origin) {
        const path = new URL(link.href).pathname;

        if (!link.hasAttribute('target')) {
          e.preventDefault();
          window.history.pushState({}, '', link.href);
          handleLocationChange();
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const renderPage = () => {
    if (currentPath === '/') return <Home />;
    if (currentPath === '/services') return <Services />;
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return <ServiceDetail slug={slug} />;
    }
    if (currentPath === '/book') return <BookingPage />;
    if (currentPath === '/about') return <About />;
    if (currentPath === '/reviews') return <Reviews />;
    if (currentPath === '/service-areas' || currentPath.startsWith('/service-areas/')) return <ServiceAreas />;
    if (currentPath === '/blog') return <Blog />;
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      return <BlogPost slug={slug} />;
    }
    if (currentPath === '/careers') return <Careers />;
    if (currentPath === '/contact') return <Contact />;
    if (currentPath === '/privacy') return <Privacy />;
    if (currentPath === '/terms') return <Terms />;
    if (currentPath === '/emergency-types') return <EmergencyTypes />;

    return <Home />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
