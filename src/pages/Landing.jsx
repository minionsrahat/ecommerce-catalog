/**
 * PAGE: Landing
 *
 * Home page with hero section and featured products.
 * This is a template/page level component that combines organisms.
 */

import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Hero, ProductGrid } from '../components/organisms';
import { products } from '../data/products';

const Landing = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Show only first 8 products as featured
  const featuredProducts = products.slice(0, 8);

  const handleShopNow = () => {
    navigate('/products');
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero onShopNow={handleShopNow} />

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600">
            Check out our best sellers and most popular items
          </p>
        </div>

        <ProductGrid
          products={featuredProducts}
          onAddToCart={handleAddToCart}
          currentPage={1}
          totalPages={1}
          onPageChange={() => {}}
        />

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleShopNow}
            className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            View All Products
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">All products are verified and authentic</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Your payment information is safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
