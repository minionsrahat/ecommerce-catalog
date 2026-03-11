/**
 * PAGE: Products
 *
 * Main products page with filtering, sorting, search, and pagination.
 * Demonstrates state management and data manipulation.
 */

import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { ProductGrid } from '../components/organisms';
import { SearchBar, CategoryFilter, SortDropdown } from '../components/molecules';
import { products as allProducts, categories } from '../data/products';

const ITEMS_PER_PAGE = 8;

const Products = () => {
  const { addToCart } = useCart();

  // State for filters and search
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('name-asc');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered and sorted products
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  // Apply filters, search, and sorting whenever dependencies change
  useEffect(() => {
    let filtered = [...allProducts];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-desc':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    // Calculate pagination
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    setTotalPages(totalPages);

    // Get current page products
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedProducts = filtered.slice(startIndex, endIndex);

    setDisplayedProducts(paginatedProducts);
  }, [searchTerm, activeCategory, sortOption, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory, sortOption]);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Could add toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">All Products</h1>
          <p className="text-lg text-gray-600">Browse our complete collection of quality products</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search products by name or description..."
          />
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Filter by Category
              </label>
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Sort Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Sort By
              </label>
              <SortDropdown value={sortOption} onChange={setSortOption} />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 font-medium">
            Showing <span className="text-primary-600 font-semibold">{displayedProducts.length}</span> of{' '}
            <span className="text-primary-600 font-semibold">
              {allProducts.filter((p) => {
                if (activeCategory === 'all') return true;
                return p.category.toLowerCase() === activeCategory.toLowerCase();
              }).length}
            </span>{' '}
            products
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={displayedProducts}
          onAddToCart={handleAddToCart}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Products;
