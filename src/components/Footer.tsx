import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-1">
            <img
              src="/logo.png"
              alt="Sweet Dreams Logo"
              className="h-10 w-auto"
            />
            <span className="ml-2 text-3xl font-bold">Sweet Dreams</span>
          </div>
          <p className="text-gray-400 mb-6 text-center md:text-left text-lg md:text-base">
            Premium eye masks for better sleep and relaxation.
          </p>

          <div className="flex justify-center md:justify-start space-x-6 mb-8 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8 md:pt-10">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
              Shop
            </h3>
            <ul className="space-y-2">
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  All Products
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Best Sellers
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  New Arrivals
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
              Support
            </h3>
            <ul className="space-y-2">
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Help Center
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Shipping Info
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Returns
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
              Company
            </h3>
            <ul className="space-y-2">
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  About Us
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Blog
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Careers
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-center md:text-left">
              Legal
            </h3>
            <ul className="space-y-2">
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Terms of Service
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Accessibility
                </a>
              </li>
              <li className="text-center md:text-left">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center md:text-left">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Sweet Dreams. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
