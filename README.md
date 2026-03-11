# ShopHub - E-Commerce Product Catalog

A modern, responsive e-commerce product catalog built with React, Tailwind CSS, and following Atomic Design principles.

## 🎯 Purpose

This project is designed for **teaching frontend best practices** to students. It demonstrates:
- ✅ Atomic Design Pattern (Atoms → Molecules → Organisms → Pages)
- ✅ Component-Driven Development
- ✅ Clean Code Architecture
- ✅ React Context for State Management
- ✅ React Router for Navigation
- ✅ Responsive Design with Tailwind CSS
- ✅ Reusable Components
- ✅ Industry Coding Standards

## 🚀 Features

- **Landing Page** with hero section and featured products
- **Product Catalog** with filtering, searching, and sorting
- **Product Detail Pages** with full information
- **Shopping Cart** with add/remove/update functionality
- **Category Filtering** (Electronics, Fashion, Sports, Home)
- **Sorting** (by name, price, rating)
- **Search** functionality
- **Pagination** for product listings
- **Responsive Design** (mobile, tablet, desktop)
- **Persistent Cart** (saved to localStorage)

## 📁 Project Structure

Following **Atomic Design Principles**:

```
ecommerce-catalog/
├── src/
│   ├── components/           # UI Components (Atomic Design)
│   │   ├── atoms/           # Smallest building blocks
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Card.jsx
│   │   │   └── index.js
│   │   ├── molecules/       # Combinations of atoms
│   │   │   ├── ProductCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── CategoryFilter.jsx
│   │   │   ├── SortDropdown.jsx
│   │   │   ├── CartItem.jsx
│   │   │   └── index.js
│   │   └── organisms/       # Complex UI sections
│   │       ├── Navbar.jsx
│   │       ├── ProductGrid.jsx
│   │       ├── CartDrawer.jsx
│   │       ├── Hero.jsx
│   │       └── index.js
│   ├── pages/               # Route-level components
│   │   ├── Landing.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   └── index.js
│   ├── context/             # Global state management
│   │   └── CartContext.jsx
│   ├── data/                # Dummy data
│   │   └── products.js
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Material UI Icons** - Icon library
- **Vite** - Build tool and dev server
- **Context API** - State management

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Navigate to project directory**
   ```bash
   cd ecommerce-catalog
   ```

2. **Install dependencies (already done)**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🎓 Learning Objectives

### 1. Atomic Design Pattern

**Atoms** (Basic building blocks):
- `Button` - Reusable button with variants
- `Badge` - Small labels for counts/status
- `Input` - Form input fields
- `Card` - Container component

**Molecules** (Combinations of atoms):
- `ProductCard` - Product display with image, name, price
- `SearchBar` - Input + Icon
- `CategoryFilter` - Multiple buttons
- `CartItem` - Product info + quantity controls

**Organisms** (Complex sections):
- `Navbar` - Logo + Navigation + Cart icon
- `ProductGrid` - Grid of ProductCards + Pagination
- `CartDrawer` - Sliding cart with items + summary
- `Hero` - Landing page hero section

**Pages** (Full layouts):
- `Landing` - Home page
- `Products` - Product listing
- `ProductDetail` - Single product view

### 2. Component Composition

Learn how small components combine to build complex UIs:
```
ProductCard (Molecule)
  ├─ Card (Atom)
  ├─ Badge (Atom)
  └─ Button (Atom)

ProductGrid (Organism)
  ├─ ProductCard (Molecule) × N
  └─ Pagination Buttons (Atoms)
```

### 3. State Management

**Local State** (useState):
- Search term
- Current page
- Sort option
- Filters

**Global State** (Context API):
- Shopping cart
- Cart item count
- Cart total

### 4. Props Pattern

All components accept props for:
- **Data** (`product`, `items`)
- **Callbacks** (`onClick`, `onChange`)
- **Configuration** (`variant`, `size`)

Example:
```jsx
<Button
  variant="primary"
  size="lg"
  onClick={handleClick}
>
  Add to Cart
</Button>
```

### 5. Separation of Concerns

- **Presentational Components** (Atoms, Molecules) - Only UI
- **Container Components** (Pages) - Data + Logic
- **Context** - Global state
- **Data Layer** - Separate data files

## 🔍 Key Concepts Explained

### Why Atomic Design?

1. **Reusability**: Build once, use everywhere
   - `Button` used in Navbar, ProductCard, CartDrawer

2. **Consistency**: Same components = same look & feel

3. **Maintainability**: Fix in one place = fixed everywhere

4. **Scalability**: Easy to add new features

### Why Component Composition?

Instead of one big component:
```jsx
// ❌ BAD: God Component
function ProductPage() {
  // 500 lines of code doing everything
}
```

Break into small pieces:
```jsx
// ✅ GOOD: Composed Components
function ProductPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
}
```

### Why Context API?

Without Context (Prop Drilling):
```jsx
// ❌ Passing props through multiple levels
<App cart={cart}>
  <Navbar cart={cart}>
    <CartIcon cart={cart} />
  </Navbar>
</App>
```

With Context:
```jsx
// ✅ Access cart anywhere
<CartProvider>
  <App>
    <Navbar>
      <CartIcon />  {/* Gets cart from context */}
    </Navbar>
  </App>
</CartProvider>
```

## 📝 Code Examples for Teaching

### Example 1: Creating a Reusable Button

```jsx
// components/atoms/Button.jsx
const Button = ({ children, variant = 'primary', onClick }) => {
  const styles = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-200 text-gray-800',
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

**Usage:**
```jsx
<Button variant="primary" onClick={handleClick}>
  Add to Cart
</Button>
```

### Example 2: Using Context

```jsx
// 1. Create context
const CartContext = createContext();

// 2. Provide context
<CartContext.Provider value={{ cart, addToCart }}>
  <App />
</CartContext.Provider>

// 3. Use context anywhere
function ProductCard() {
  const { addToCart } = useContext(CartContext);
  return <button onClick={() => addToCart(product)}>Add</button>;
}
```

### Example 3: Filtering and Sorting

```jsx
// Filter by category
const filtered = products.filter(p =>
  p.category === selectedCategory
);

// Sort by price
const sorted = filtered.sort((a, b) => a.price - b.price);

// Paginate
const paginated = sorted.slice(start, end);
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YOUR_COLOR',
        600: '#YOUR_COLOR',
        // ...
      }
    }
  }
}
```

### Adding New Products

Edit `src/data/products.js`:
```js
export const products = [
  {
    id: 21,
    name: "New Product",
    price: 99.99,
    // ...
  }
];
```

## 🧪 Testing the App

1. **Navigation**
   - Click logo → goes to home
   - Click "Products" → goes to products page
   - Click product card → goes to detail page

2. **Filtering**
   - Select category → shows only those products
   - Search for product → filters by name
   - Change sort → products reorder

3. **Cart**
   - Add to cart → cart count increases
   - Open cart → see items
   - Change quantity → total updates
   - Remove item → item disappears

4. **Persistence**
   - Add items to cart
   - Refresh page
   - Cart items still there (localStorage)

## 📚 Teaching Notes

### Day 1: Introduction
- Show folder structure
- Explain Atomic Design
- Create a simple Button atom

### Day 2: Building Blocks
- Build atoms (Button, Badge, Input)
- Show how to make components reusable
- Discuss props

### Day 3: Composition
- Build ProductCard molecule
- Combine atoms into molecules
- Understand component hierarchy

### Day 4: Pages
- Build Products page
- Use filtering and sorting
- Implement pagination

### Day 5: State Management
- Introduce Context API
- Build cart functionality
- Understand global vs local state

### Day 6: Routing
- Set up React Router
- Create navigation
- Handle URL parameters

## 🐛 Common Issues

### Issue: Tailwind classes not working
**Solution**: Make sure Tailwind directives are in `index.css`

### Issue: Images not loading
**Solution**: Using Unsplash images - requires internet connection

### Issue: Cart not persisting
**Solution**: Check browser localStorage is enabled

## 📖 Additional Resources

- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [React Router Docs](https://reactrouter.com)

---

**Built with ❤️ for teaching frontend development**

Happy Learning! 🚀
