import { useEffect, useState } from 'react';

export default function PageUtilities() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-green-600 z-50 transition-all duration-300"
        style={{ width: `${scrollPercent}%` }}
      ></div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-3 sm:px-4 sm:py-2 rounded-full shadow-lg text-base transition-opacity duration-300 ease-in-out opacity-100 animate-fadeIn sm:text-sm"
          aria-label="Back to Top"
        >
          <span className="text-xl leading-none sm:hidden">↑</span>
          <span className="hidden sm:inline">↑ Back to Top</span>
        </button>
      )}


    </>
  );
}
