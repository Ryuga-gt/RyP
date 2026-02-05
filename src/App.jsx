import React, { useEffect, Suspense } from 'react';
import Lenis from 'lenis';
import Background from './components/Background';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy Load Heavy Components
const Projects = React.lazy(() => import('./components/Projects'));
const Manifesto = React.lazy(() => import('./components/Manifesto'));
const Profile = React.lazy(() => import('./components/Profile'));
const Interests = React.lazy(() => import('./components/Interests'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-transparent text-white min-h-screen selection:bg-white selection:text-black font-sans cursor-none">
      <Cursor />
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-white/20 font-mono uppercase tracking-widest text-xs">Loading Content...</div>}>
          <Projects />
          <Profile />
          <Manifesto />
          <Interests />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Contact />
      </Suspense>

      {/* Simple Footer Credit */}
      <footer className="w-full py-10 relative z-10 text-center text-white/30 text-xs uppercase tracking-widest bg-brand-white text-brand-black">
        © {new Date().getFullYear()} RyP. All Rights Reserved.
      </footer>
    </div>
  )
}

export default App;
