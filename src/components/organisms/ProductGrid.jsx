/**
 * ORGANISM: ProductGrid Component
 *
 * Grid layout displaying multiple ProductCard molecules.
 * Handles pagination and empty states.
 *
 * Props:
 * - products: Array of product objects to display
 * - onAddToCart: Function to add product to cart
 * - currentPage: Current page number
 * - totalPages: Total number of pages
 * - onPageChange: Function to handle page changes
 */

import { ProductCard } from '../molecules';
import { Button } from '../atoms';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const ProductGrid = ({
  products,
  onAddToCart,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Empty state
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-gray-600">No products found</p>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search term</p>
      </div>
    );
  }

  return (
    <div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => onPageChange(pageNumber)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === pageNumber
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
