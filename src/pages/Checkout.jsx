/**
 * PAGE: Checkout
 *
 * Checkout page with shipping form, order summary, and payment.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Input, Button, Badge } from '../components/atoms';
import { ShoppingCart, LocalShipping, Payment, CheckCircle, ArrowBack } from '@mui/icons-material';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  // Form state
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Bangladesh',
  });

  const [paymentMethod, setPaymentMethod] = useState('cod'); // cod, card, mobile
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate totals
  const subtotal = cartTotal;
  const shipping = subtotal > 50 ? 0 : 5;
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate cart is not empty
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      navigate('/products');
      return;
    }

    // In a real app, this would send order to backend
    setOrderPlaced(true);

    // Clear cart after order
    setTimeout(() => {
      clearCart();
    }, 3000);
  };

  // Redirect if cart is empty
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="text-center">
          <ShoppingCart className="text-gray-400 mx-auto mb-4" sx={{ fontSize: 64 }} />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to your cart before checking out</p>
          <Button onClick={() => navigate('/products')}>
            Browse Products
          </Button>
        </div>
      </div>
    );
  }

  // Order success screen
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" sx={{ fontSize: 48 }} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
          <div className="space-y-3">
            <Button variant="primary" size="lg" onClick={() => navigate('/')} className="w-full">
              Continue Shopping
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/products')} className="w-full">
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    );
  }

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

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Checkout</h1>
          <p className="text-lg text-gray-600">Complete your purchase</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <LocalShipping className="text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Shipping Information</h2>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      type="text"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleInputChange}
                    placeholder="+880 1234-567890"
                    required
                  />

                  <Input
                    label="Street Address"
                    type="text"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street, Apartment 4B"
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                      label="City"
                      type="text"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleInputChange}
                      placeholder="Dhaka"
                      required
                    />
                    <Input
                      label="Postal Code"
                      type="text"
                      name="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={handleInputChange}
                      placeholder="1205"
                      required
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Payment className="text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Payment Method</h2>
                </div>

                <div className="space-y-4">
                  {/* Cash on Delivery */}
                  <label className="flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">Cash on Delivery</span>
                        <Badge variant="success">Available</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Pay with cash when your order is delivered
                      </p>
                    </div>
                  </label>

                  {/* Mobile Banking */}
                  <label className="flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile"
                      checked={paymentMethod === 'mobile'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">Mobile Banking</span>
                        <Badge variant="primary">bKash, Nagad, Rocket</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Pay using bKash, Nagad, or Rocket
                      </p>
                    </div>
                  </label>

                  {/* Credit/Debit Card */}
                  <label className="flex items-start gap-4 p-4 border-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">Credit/Debit Card</span>
                        <Badge variant="primary">Visa, Mastercard</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Secure payment with your credit or debit card
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
                          {item.product.name}
                        </h3>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                          <span className="font-semibold text-primary-600">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing Breakdown */}
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (5%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between text-xl font-bold text-gray-900">
                    <span>Total</span>
                    <span className="text-primary-600">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full mt-6"
                >
                  Place Order
                </Button>

                {/* Security Badge */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <CheckCircle sx={{ fontSize: 16 }} />
                    Secure checkout powered by SSL encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
