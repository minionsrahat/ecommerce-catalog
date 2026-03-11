/**
 * ORGANISM: CartDrawer Component
 *
 * Sliding drawer that displays cart contents.
 * Combines CartItem molecules with summary and actions.
 *
 * Props:
 * - isOpen: Boolean to control drawer visibility
 * - onClose: Function to close the drawer
 * - cartItems: Array of cart items { product, quantity }
 * - onUpdateQuantity: Function to update item quantity
 * - onRemove: Function to remove item from cart
 * - onCheckout: Function to proceed to checkout
 */

import { CartItem } from '../molecules';
import { Button } from '../atoms';
import { Close, ShoppingCartOutlined } from '@mui/icons-material';

const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemove,
  onCheckout,
}) => {
  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Close />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCartOutlined sx={{ fontSize: 64 }} />
              <p className="mt-4 text-lg">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
              />
            ))
          )}
        </div>

        {/* Summary */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-300">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={onCheckout}
              className="w-full"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
