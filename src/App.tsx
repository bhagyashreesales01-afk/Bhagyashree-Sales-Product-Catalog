import { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Package, ArrowLeft } from 'lucide-react';

import LoadingScreen from './components/LoadingScreen';
import CategoryGrid from './components/CategoryGrid';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import productsData from './data/products.json';
import { Product } from './types/Product';

import AboutUs from './pages/AboutUs';

function App() {
  // Prepare product data once
  const products: Product[] = useMemo(
    () =>
      productsData.map((p) => ({
        ...p,
        available: p.available ?? false,
        price: p.price ?? 'N/A',
        MRP: String(p.MRP ?? 'N/A'),
      })),
    []
  );

  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          products
            .map((p) => p.category)
            .filter(Boolean)
        )
      ),
    [products]
  );

  return (
    <div className="min-h-screen bg-[#10707A]">
      <Header
        searchTerm={globalSearchTerm}
        onSearchChange={setGlobalSearchTerm}
      />

      <div className="min-h-screen bg-[#E8F9FF]">
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                categories={categories}
                globalSearchTerm={globalSearchTerm}
                setGlobalSearchTerm={setGlobalSearchTerm}
              />
            }
          />

          <Route
            path="/product/:id"
            element={<ProductDetail products={products} />}
          />

          <Route
            path="/about"
            element={<AboutUs />}
          />
        </Routes>

        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

interface HomePageProps {
  products: Product[];
  categories: string[];
  globalSearchTerm: string;
  setGlobalSearchTerm: (term: string) => void;
}

function HomePage({
  products,
  categories,
  globalSearchTerm,
  setGlobalSearchTerm,
}: HomePageProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  const effectiveSearchTerm = globalSearchTerm.trim();

  const isSearchMode = effectiveSearchTerm !== '';

  const filteredProducts = useMemo(() => {
    const search = effectiveSearchTerm.toLowerCase();

    return products.filter((product) => {
      const name = product.name || '';

      const matchesSearch =
        search === '' ||
        name.toLowerCase().includes(search);

      const matchesCategory =
        selectedCategory === null ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [
    products,
    effectiveSearchTerm,
    selectedCategory,
  ]);

  const selectedCategoryProducts = useMemo(() => {
    if (!selectedCategory) {
      return [];
    }

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [products, selectedCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setGlobalSearchTerm('');
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setGlobalSearchTerm('');
  };

  const handleBackFromSearch = () => {
    setGlobalSearchTerm('');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-8">

      {/* SEARCH RESULTS */}
      {isSearchMode ? (
        <div>
          <div className="mb-4 lg:mb-6">
            <button
              onClick={handleBackFromSearch}
              className="
                inline-flex
                items-center
                text-sm
                font-medium
                text-blue-600
                transition-colors
                hover:text-blue-800
                lg:text-base
              "
            >
              <ArrowLeft className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              Back to{' '}
              {selectedCategory
                ? selectedCategory
                : 'Categories'}
            </button>
          </div>

          <div className="mb-4 lg:mb-6">
            <h1 className="mb-2 text-2xl font-bold text-gray-900 lg:text-3xl">
              Search Results

              {selectedCategory && (
                <span className="ml-2 text-lg font-normal text-gray-600 lg:text-xl">
                  in {selectedCategory}
                </span>
              )}
            </h1>

            <p className="text-sm text-gray-600 lg:text-base">
              {filteredProducts.length > 0
                ? `${filteredProducts.length} product${
                    filteredProducts.length !== 1
                      ? 's'
                      : ''
                  } found for "${effectiveSearchTerm}"`
                : `No products found for "${effectiveSearchTerm}"`}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <div className="py-12 text-center">
              <Package className="mx-auto mb-4 h-12 w-12 text-gray-300 lg:h-16 lg:w-16" />

              <h3 className="mb-2 text-base font-medium text-gray-900 lg:text-lg">
                No products found
              </h3>

              <p className="mb-4 text-sm text-gray-600 lg:text-base">
                Try adjusting your search terms or browse our categories
              </p>

              <button
                onClick={handleBackFromSearch}
                className="
                  inline-flex
                  items-center
                  rounded-md
                  bg-blue-100
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-blue-600
                  transition-colors
                  hover:bg-blue-200
                  lg:px-4
                  lg:text-sm
                "
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </button>
            </div>
          )}
        </div>

      ) : selectedCategory ? (

        /* CATEGORY PRODUCTS */
        <div>
          <div className="mb-4 lg:mb-6">
            <button
              onClick={handleBackToHome}
              className="
                inline-flex
                items-center
                text-sm
                font-medium
                text-blue-600
                transition-colors
                hover:text-blue-800
                lg:text-base
              "
            >
              <ArrowLeft className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              Back to Categories
            </button>
          </div>

          <div className="mb-4 lg:mb-6">
            <h1 className="mb-2 text-2xl font-bold text-gray-900 lg:text-3xl">
              {selectedCategory}
            </h1>

            <p className="text-sm text-gray-600 lg:text-base">
              {selectedCategoryProducts.length}{' '}
              product
              {selectedCategoryProducts.length !== 1
                ? 's'
                : ''}{' '}
              available
            </p>
          </div>

          <ProductList
            products={selectedCategoryProducts}
          />
        </div>

      ) : (

        /* HOME */
        <div>
          <CategoryGrid
            categories={categories}
            onCategorySelect={handleCategorySelect}
          />

          <div className="mb-4 lg:mb-6">
            <h2 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl">
              All Products
            </h2>

            <p className="mb-4 text-sm text-gray-600 lg:mb-6 lg:text-base">
              {products.length} product
              {products.length !== 1 ? 's' : ''}{' '}
              available
            </p>
          </div>

          <ProductList products={products} />
        </div>
      )}
    </div>
  );
}

export default App;
