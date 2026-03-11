/**
 * MOLECULE: CartItem Component
 *
 * Displays a single cart item with quantity controls.
 * Combines Button atoms with product information.
 *
 * Props:
 * - item: Cart item object { product, quantity }
 * - onUpdateQuantity: Function to update item quantity
 * - onRemove: Function to remove item from cart
 */

import { Button } from '../atoms';
import { Add, Remove, Delete } from '@mui/icons-material';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <div className="flex gap-4 p-4 border-b border-gray-200">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">${product.price.toFixed(2)} each</p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdateQuantity(product.id, quantity - 1)}
            disabled={quantity <= 1}
          >
            <Remove sx={{ fontSize: 16 }} />
          </Button>
          <span className="px-3 py-1 font-medium">{quantity}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
            disabled={quantity >= product.stock}
          >
            <Add sx={{ fontSize: 16 }} />
          </Button>
        </div>
      </div>

      {/* Subtotal and Remove */}
      <div className="flex flex-col items-end justify-between">
        <p className="text-lg font-bold text-primary-600">
          ${subtotal.toFixed(2)}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onRemove(product.id)}
        >
          <Delete sx={{ fontSize: 18 }} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
