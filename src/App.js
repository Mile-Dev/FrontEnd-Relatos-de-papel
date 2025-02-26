import "./App.css";
import React, { useCallback, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useCart from "./hooks/useCart";
import LandingPage from "./pages/landing/LandingPage";
import BookDetail from "./pages/book/BookDetail";
import ProductListContent from "./components/ProductList";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import StepForm from "./pages/cart/stepForm/StepForm";
import products from "./pages/products/list/products";
import MinimalLayout from "./layout/minimalLayout/MinimalLayout";
import MainLayout from "./layout/MainLayout";

function App() {
  const { cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart, setCart } = useCart();
  const [filteredProductsList, setFilteredProductsList] = useState(products);

  const handleCategoryFilter = useCallback(
    (selectedCategories, selectedSubcategories) => {
      const filtered = products.filter((product) => {
        const categoryMatch = selectedCategories.includes(product.category);
        const subcategoryMatch = selectedSubcategories.includes(product.subcategory);
        return categoryMatch || subcategoryMatch;
      });
      setFilteredProductsList(filtered);
    },
    []
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MinimalLayout>
              <LandingPage />
            </MinimalLayout>
          }
        />
        <Route
          path="/books"
          element={
            <MainLayout cart={cart}>
              <div className="row mt-4">
                <div className="col-2">
                  <div className="border p-3">
                    <h5>Categorías</h5>
                    <Categories onFilter={handleCategoryFilter} />
                  </div>
                </div>
                <div className="col-10">
                  <ProductListContent
                    filteredProductsList={filteredProductsList}
                    onAddToCart={addToCart}
                  />
                </div>
              </div>
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout cart={cart}>
              <Cart
                cart={cart}
                onIncrement={incrementQuantity}
                onDecrement={decrementQuantity}
                onRemove={removeFromCart}
              />
            </MainLayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <MainLayout cart={cart}>
              <StepForm
                cart={cart}
                setCart={setCart}
                onIncrement={incrementQuantity}
                onDecrement={decrementQuantity}
                onRemove={removeFromCart}
              />
            </MainLayout>
          }
        />
        <Route
          path="/book/:id"
          element={
            <MainLayout cart={cart}>
              <BookDetail products={products} onAddToCart={addToCart} />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
