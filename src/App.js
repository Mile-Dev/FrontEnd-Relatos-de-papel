import React, { useCallback, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useCart from "./hooks/useCart";
import LandingPage from "./pages/landing/LandingPage";
import BookDetail from "./pages/book/BookDetail";
import ProductListContent from "./components/ProductList";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import StepForm from "./pages/cart/stepForm/StepForm";
import productService from "./services/productService";
import MinimalLayout from "./layout/minimalLayout/MinimalLayout";
import MainLayout from "./layout/MainLayout";

function App() {
  const { cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart, setCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProductsList, setFilteredProductsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  useEffect(() => {
    productService.getProducts()
      .then(response => {
        if (response.data && Array.isArray(response.data.books)) {
          setProducts(response.data.books);
          setFilteredProductsList(response.data.books);
        } else {
          console.error("Error: la API no devolvió un array de libros", response.data);
        }
      })
      .catch(error => console.error("Error al obtener los productos:", error));
  }, []);

  const handleCategoryFilter = useCallback(
    (categories, subcategories) => {
      setSelectedCategories(categories);
      setSelectedSubcategories(subcategories);

      if (!Array.isArray(products) || products.length === 0) return;

      let filtered = [...products];

      if (searchTerm) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (categories.length > 0 || subcategories.length > 0) {
        filtered = filtered.filter((product) => {
          const categoryMatch = categories.length === 0 || categories.includes(product.category);
          const subcategoryMatch = subcategories.length === 0 || subcategories.includes(product.subcategory);
          return categoryMatch && subcategoryMatch;
        });
      }

      setFilteredProductsList(filtered);
    },
    [products, searchTerm]
  );


  const handleSearchFilter = async (term) => {
    const sanitizedTerm = typeof term === "string" ? term.trim() : "";
    setSearchTerm(sanitizedTerm);

    if (sanitizedTerm === "") {
      setFilteredProductsList(products);
      return;
    }

    try {
      const response = await productService.getProductsParams(sanitizedTerm);

      if (response.data && Array.isArray(response.data.books)) {
        setFilteredProductsList(response.data.books);
      } else {
        setFilteredProductsList([]);
      }
    } catch (error) {
      console.error("Error al buscar productos:", error);
      setFilteredProductsList([]);
    }
  };

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
                    onSearch={handleSearchFilter}
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
              <BookDetail onAddToCart={addToCart} />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
