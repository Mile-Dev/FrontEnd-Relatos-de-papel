import React from "react";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = ({ children, cart }) => {
  return (
    <>
      <Header />
      <Navbar cart={cart} />
      <div className="container-fluid mt-4">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
