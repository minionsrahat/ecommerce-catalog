/**
 * MOLECULE: ProductCard Component
 *
 * Displays a single product with image, name, price, and rating.
 * Combines Card, Button, and Badge atoms.
 *
 * Props:
 * - product: Product object with id, name, price, rating, image, etc.
 * - onAddToCart: Function to add product to cart
 * - onViewDetails: Function to view product details
 */

import { useNavigate } from 'react-router-dom';
import { Card, Button, Badge } from '../atoms';
import { ShoppingCart, Star } from '@mui/icons-material';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    // Stop event from bubbling to card click
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <Card hover onClick={handleViewDetails}>
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {!product.inStock && (
          <div className="absolute top-2 right-2">
            <Badge variant="danger">Out of Stock</Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category Badge */}
        <Badge variant="primary" className="mb-2">
          {product.category}
        </Badge>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="text-yellow-400" sx={{ fontSize: 18 }} />
          <span className="text-sm text-gray-600">
            {product.rating} ({product.stock} in stock)
          </span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </p>
          <Button
            variant="primary"
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart sx={{ fontSize: 18 }} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
