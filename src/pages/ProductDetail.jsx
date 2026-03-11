/**
 * PAGE: ProductDetail
 *
 * Individual product page showing full details.
 * Uses route parameters to fetch specific product.
 */

import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button, Badge } from '../components/atoms';
import { Star, ArrowBack, ShoppingCart, CheckCircle } from '@mui/icons-material';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Find product by ID
  const product = products.find((p) => p.id === parseInt(id));

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <Button onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    // Could add toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6 font-medium"
        >
          <ArrowBack />
          Back
        </button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-lg shadow-md p-8">
          {/* Product Image */}
          <div>
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              {!product.inStock && (
                <div className="absolute top-4 right-4">
                  <Badge variant="danger">Out of Stock</Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Category */}
            <Badge variant="primary" className="mb-4">
              {product.category}
            </Badge>

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={
                      index < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }
                    sx={{ fontSize: 24 }}
                  />
                ))}
              </div>
              <span className="text-lg text-gray-600">
                {product.rating} / 5.0
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <p className="text-4xl font-bold text-primary-600">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="text-green-500" sx={{ fontSize: 20 }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stock Info */}
            <div className="mb-6">
              <p className="text-gray-600">
                <span className="font-semibold">Availability:</span>{' '}
                {product.inStock ? (
                  <span className="text-green-600">
                    In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="text-red-600">Out of Stock</span>
                )}
              </p>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full md:w-auto"
            >
              <ShoppingCart className="mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Related Products (Optional) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            More from {product.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xl font-bold text-primary-600">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
