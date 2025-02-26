import React from "react";
import CategoryList from "../pages/categories/CategoryList";
import categories from "../pages/categories/list/categories";
import "../App.css";

const Categories = ({ onFilter }) => {
  return (
    <div className="categories">
      <CategoryList categories={categories} onFilter={onFilter} />
    </div>
  );
};

export default Categories;
