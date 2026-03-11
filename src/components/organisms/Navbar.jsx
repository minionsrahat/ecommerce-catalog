/**
 * ORGANISM: Navbar Component
 *
 * Main navigation bar with logo, search, and cart icon.
 * Combines multiple molecules and atoms.
 *
 * Props:
 * - cartItemCount: Number of items in cart
 * - onCartClick: Function to open cart drawer
 */

import { Link } from 'react-router-dom';
import { ShoppingCart, Storefront } from '@mui/icons-material';
import { Badge } from '../atoms';

const Navbar = ({ cartItemCount, onCartClick }) => {

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors">
            <Storefront sx={{ fontSize: 32 }} />
            <span className="text-2xl font-bold">ShopHub</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Cart Icon */}
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ShoppingCart className="text-gray-700" sx={{ fontSize: 28 }} />
            {cartItemCount > 0 && (
              <div className="absolute -top-1 -right-1">
                <Badge variant="danger">{cartItemCount}</Badge>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
