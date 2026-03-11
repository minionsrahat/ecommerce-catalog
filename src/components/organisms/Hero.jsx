/**
 * ORGANISM: Hero Component
 *
 * Landing page hero section with call-to-action.
 *
 * Props:
 * - onShopNow: Function to navigate to products
 */

import { Button } from '../atoms';
import { ShoppingBag, LocalShipping, Verified, SupportAgent } from '@mui/icons-material';

const Hero = ({ onShopNow }) => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shop Smart, Live Better
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.
          </p>

          {/* CTA Button */}
          <Button
            variant="secondary"
            size="lg"
            onClick={onShopNow}
            className="mb-12"
          >
            <ShoppingBag className="mr-2" />
            Shop Now
          </Button>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="flex flex-col items-center text-center">
              <LocalShipping sx={{ fontSize: 40 }} className="mb-2" />
              <p className="text-sm font-medium">Free Shipping</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Verified sx={{ fontSize: 40 }} className="mb-2" />
              <p className="text-sm font-medium">Verified Products</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <SupportAgent sx={{ fontSize: 40 }} className="mb-2" />
              <p className="text-sm font-medium">24/7 Support</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShoppingBag sx={{ fontSize: 40 }} className="mb-2" />
              <p className="text-sm font-medium">Best Prices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
