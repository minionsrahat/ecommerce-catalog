/**
 * APP: Main Application Component
 *
 * - Sets up routing with React Router
 * - Provides cart context to entire app
 * - Manages cart drawer state
 * - Includes Navbar on all pages
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar, CartDrawer, Footer } from './components/organisms';
import { Landing, Products, ProductDetail, About, Contact, Checkout, Login, Signup } from './pages';

// Inner component that uses useNavigate (must be inside Router)
function AppRoutes() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, cartItemCount, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar appears on all pages */}
      <Navbar cartItemCount={cartItemCount} onCartClick={handleCartClick} />

      {/* Main Content - grows to fill space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* Footer appears on all pages */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
