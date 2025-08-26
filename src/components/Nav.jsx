import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a 
            href="#" 
            className="text-2xl lg:ml-10 font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            Fintekk
          </a>
          
          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-15 georama-custom">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-gray-600 py-2 hover:text-blue-600 transition-colors duration-200 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-1.5 border border-blue-600 text-gray-700 font-small rounded-xl hover:bg-gray-50 hover:border-gray-400 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              <p className='text-blue-600 py-0.5'>Login</p>
            </button>
            <button className="px-4 py-2.5 mr-25 bg-[#2E5CFF] text-white font-small rounded-xl hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200">
              Sign Up for Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">

            {/* Mobile Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-600 font-medium py-2 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <button className="w-full max-w-xl px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                Login
              </button>
              <button className="w-full px-6 py-2.5 bg-[#2E5CFF] text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200">
                Sign Up for Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;