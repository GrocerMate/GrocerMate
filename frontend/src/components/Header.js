import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow border-b border-gray-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        {/* Logo */}
        <a href="/">
          <img
            src="/images/logo.png"
            alt="GrocerMate Logo"
            className="h-10 md:h-12"
          />
        </a>

        {/* Burger (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center gap-2 text-gray-700"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
          <span className="text-sm font-medium">{menuOpen ? 'Close' : 'Menu'}</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-600 hover:text-green-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-green-600">About</a>
          <a
            href="https://forms.gle/48Gs3EsHeP4Mtm3G7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600"
          >
            Become a Seller
          </a>
          <a
            href="https://forms.gle/fsGnewXtwJxLC6j19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600"
          >
            Feedback
          </a>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Login / Sign Up
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4 max-w-7xl mx-auto">
          <a href="/" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-green-600">Home</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="text-gray-600 hover:text-green-600">About</a>
          <a
            href="https://forms.gle/48Gs3EsHeP4Mtm3G7"
            onClick={() => setMenuOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600"
          >
            Become a Seller
          </a>
          <a
            href="https://forms.gle/fsGnewXtwJxLC6j19"
            onClick={() => setMenuOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600"
          >
            Feedback
          </a>
          <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
            Login / Sign Up
          </button>
        </div>
      )}
    </header>
  );
}
