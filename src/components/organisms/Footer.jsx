/**
 * ORGANISM: Footer Component
 *
 * Main footer with links, social media, and company info.
 */

import { Link } from 'react-router-dom';
import { Storefront, Email, Phone, LocationOn, Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <Storefront sx={{ fontSize: 32 }} />
              <span className="text-2xl font-bold">ShopHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for quality products at unbeatable prices. Shop smart, live better.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <LinkedIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=electronics" className="hover:text-primary-400 transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=fashion" className="hover:text-primary-400 transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/products?category=sports" className="hover:text-primary-400 transition-colors">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/products?category=home" className="hover:text-primary-400 transition-colors">
                  Home & Living
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <LocationOn className="text-primary-400 mt-1" sx={{ fontSize: 20 }} />
                <span className="text-sm">123 Shopping Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-primary-400" sx={{ fontSize: 20 }} />
                <span className="text-sm">+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-2">
                <Email className="text-primary-400" sx={{ fontSize: 20 }} />
                <span className="text-sm">support@shophub.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 ShopHub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/returns" className="hover:text-primary-400 transition-colors">
                Returns Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
