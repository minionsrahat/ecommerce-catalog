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

import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Storefront, Logout } from '@mui/icons-material';
import { Badge, Button } from '../atoms';
import { useAuth } from '../../context/AuthContext';

const Navbar = ({ cartItemCount, onCartClick }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

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

          {/* Actions: Auth & Cart */}
          <div className="flex items-center gap-4">
            {/* Auth Buttons/User Profile */}
            <div className="flex items-center gap-2 border-r border-gray-200 pr-4 mr-2">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={user?.avatar || 'https://via.placeholder.com/32'}
                      alt={user?.name}
                      className="w-8 h-8 rounded-full border border-primary-200 shadow-sm"
                    />
                    <span className="text-sm font-medium text-gray-700 hidden lg:block">
                      {user?.name}
                    </span>
                  </div>
                  <button
                    onClick={logout}
                    className="p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                    title="Logout"
                  >
                    <Logout sx={{ fontSize: 20 }} />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="hidden sm:block"
                    onClick={() => navigate('/signup')}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
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
      </div>
    </nav>
  );
};

export default Navbar;
