/**
 * PAGE: About Us
 *
 * About page with company information, mission, and team.
 */

import { Storefront, LocalShipping, Verified, SupportAgent, People, TrendingUp } from '@mui/icons-material';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopHub</h1>
            <p className="text-xl text-primary-100">
              Your trusted partner for quality products and exceptional service since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At ShopHub, we're committed to providing our customers with the best shopping experience.
              We believe in quality products, competitive prices, and outstanding customer service.
              Our mission is to make online shopping easy, enjoyable, and accessible to everyone.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <People className="text-primary-600 mx-auto mb-3" sx={{ fontSize: 48 }} />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Storefront className="text-primary-600 mx-auto mb-3" sx={{ fontSize: 48 }} />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5000+</h3>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <TrendingUp className="text-primary-600 mx-auto mb-3" sx={{ fontSize: 48 }} />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">98%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose ShopHub?</h2>
            <p className="text-lg text-gray-600">
              We're more than just an online store - we're your shopping companion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <LocalShipping className="text-primary-600" sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Free Shipping</h3>
              <p className="text-gray-600">
                Free shipping on all orders over $50. Fast and reliable delivery to your doorstep.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Verified className="text-primary-600" sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">
                All our products are verified and come with a satisfaction guarantee.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <SupportAgent className="text-primary-600" sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated support team is always here to help you with any questions.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Storefront className="text-primary-600" sx={{ fontSize: 32 }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Prices</h3>
              <p className="text-gray-600">
                Competitive prices and regular discounts to help you save more.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2020, ShopHub started with a simple vision: to make quality products
                accessible to everyone. What began as a small online store has grown into a
                trusted platform serving thousands of customers across the country.
              </p>
              <p>
                We carefully curate our product selection to ensure that every item meets our
                high standards for quality and value. From electronics to fashion, sports equipment
                to home essentials, we've got everything you need in one convenient place.
              </p>
              <p>
                Our success is built on three pillars: quality products, competitive prices, and
                exceptional customer service. We're constantly innovating and improving to provide
                you with the best possible shopping experience.
              </p>
              <p>
                Thank you for choosing ShopHub. We're honored to be part of your shopping journey
                and look forward to serving you for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Explore our wide range of products and find exactly what you need
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Browse Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
