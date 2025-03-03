import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Logo from "/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src={Logo}
              className="h-12 w-auto text-primary-600"
              alt="Sweet Dreams Logo"
            />
            <span className="ml-2 text-xl font-bold text-primary-900">
              Sweet Dreams
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Products
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#reviews"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#insights"
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              Insights
            </a>
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-700 hover:text-primary-600 focus:outline-none">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button
              className="ml-4 md:hidden p-2 rounded-full text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg animate-fadeIn">
          <div className="px-4 py-3 space-y-2 sm:px-5 border-t border-gray-100">
            <a
              href="#home"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#features"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#reviews"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#insights"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </a>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
              <button className="flex items-center px-4 py-3 w-full rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors">
                <ShoppingCart className="h-5 w-5 mr-2" />
                View Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
