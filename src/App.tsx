import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Package, ArrowLeft } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import { useImagePreloader } from './hooks/useImagePreloader';
import CategoryGrid from './components/CategoryGrid';
import productsData from './data/products.json';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import { Product } from './types/Product';
import AboutUs from './pages/AboutUs';

function App() {
  const products: Product[] = productsData.map(p => ({
    ...p,
    available: p.available ?? false,
    price: p.price ?? 'N/A',
    MRP: String(p.MRP ?? 'N/A'),
  }));

  const [globalSearchTerm, setGlobalSearchTerm] = useState('');

  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category))), [products]);

  // ✅ Preload both products and category images
  const { isLoading, loadingProgress, preloadedImages } = useImagePreloader({ 
    products, 
    categories,
    minLoadingTime: 3500 
  });

  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} />;
  }

  return (
    <div className="min-h-screen bg-[#10707A]">
      <Header searchTerm={globalSearchTerm} onSearchChange={setGlobalSearchTerm} />

      <div className="bg-[#E8F9FF] min-h-screen">
        <Routes>
          <Route path="/" element={
            <HomePage 
              products={products} 
              categories={categories}
              preloadedImages={preloadedImages}
              globalSearchTerm={globalSearchTerm} 
              setGlobalSearchTerm={setGlobalSearchTerm} 
            />} 
          />
          <Route path="/product/:id" element={<ProductDetail products={products} />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function HomePage({ 
  products, 
  categories,
  preloadedImages,
  globalSearchTerm, 
  setGlobalSearchTerm 
}: { 
  products: Product[]; 
  categories: string[];
  preloadedImages?: Record<string, HTMLImageElement>;
  globalSearchTerm: string; 
  setGlobalSearchTerm: (term: string) => void; 
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const effectiveSearchTerm = globalSearchTerm;
  const isSearchMode = globalSearchTerm.trim() !== '';

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const name = product.name || '';
      const matchesSearch = name.toLowerCase().includes(effectiveSearchTerm.toLowerCase());
      const matchesCategory = selectedCategory === null || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, effectiveSearchTerm, selectedCategory]);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
      {isSearchMode ? (
        <div>
          <div className="mb-4 lg:mb-6">
            <button
              onClick={handleBackFromSearch}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm lg:text-base"
            >
              <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Back to {selectedCategory ? selectedCategory : 'Categories'}
            </button>
          </div>

          <div className="mb-4 lg:mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Search Results
              {selectedCategory && (
                <span className="text-lg lg:text-xl font-normal text-gray-600 ml-2">
                  in {selectedCategory}
                </span>
              )}
            </h1>
            <p className="text-sm lg:text-base text-gray-600">
              {filteredProducts.length > 0 
                ? `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} found for "${effectiveSearchTerm}"`
                : `No products found for "${effectiveSearchTerm}"`}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <div className="text-center py-12">
              <Package className="w-12 h-12 lg:w-16 lg:h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-base lg:text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-sm lg:text-base text-gray-600 mb-4">
                Try adjusting your search terms or browse our categories
              </p>
              <button
                onClick={handleBackFromSearch}
                className="inline-flex items-center px-3 lg:px-4 py-2 border border-transparent text-xs lg:text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </div>
          )}
        </div>
      ) : selectedCategory ? (
        <div>
          <div className="mb-4 lg:mb-6">
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm lg:text-base"
            >
              <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
              Back to Categories
            </button>
          </div>

          <div className="mb-4 lg:mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{selectedCategory}</h1>
            <p className="text-sm lg:text-base text-gray-600">
              {products.filter(p => p.category === selectedCategory).length} product
              {products.filter(p => p.category === selectedCategory).length !== 1 ? 's' : ''} available
            </p>
          </div>

          <ProductList products={products.filter(p => p.category === selectedCategory)} />
        </div>
      ) : (
        <div>
          <CategoryGrid 
            categories={categories} 
            onCategorySelect={handleCategorySelect}
            preloadedImages={preloadedImages} // ✅ pass preloaded category images
          />

          <div className="mb-4 lg:mb-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-4">All Products</h2>
            <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6">
              {products.length} product{products.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <ProductList products={products} />
        </div>
      )}
    </div>
  );
}

export default App;
