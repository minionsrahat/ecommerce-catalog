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