import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CategoryList = ({ categories, onFilter }) => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handleCategoryCheckbox = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((cat) => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleSubcategoryCheckbox = (subcategoryName) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategoryName)
        ? prev.filter((subcat) => subcat !== subcategoryName)
        : [...prev, subcategoryName]
    );
  };

  useEffect(() => {
    onFilter(selectedCategories, selectedSubcategories);
  }, [selectedCategories, selectedSubcategories, onFilter]);

  return (
    <ul style={styles.ul}>
      {categories.map((category, index) => (
        <li key={index} style={styles.li}>
          <div>
            <button
              onClick={() => toggleCategory(category.name)}
              style={styles.button}
            >
              <FontAwesomeIcon
                icon={expandedCategories[category.name] ? faChevronDown : faChevronRight}
              />{" "}
              {category.name}
            </button>
            <input
              type="checkbox"
              onChange={() => handleCategoryCheckbox(category.name)}
              style={styles.checkbox}
            />
          </div>
          {expandedCategories[category.name] &&
            category.subcategories.map((subcategory, subIndex) => (
              <ul key={subIndex} style={styles.subcategoryList}>
                <li style={styles.li}>
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => handleSubcategoryCheckbox(subcategory.name)}
                      style={styles.checkbox}
                    />
                    {subcategory.name}
                  </div>
                </li>
              </ul>
            ))}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  ul: {
    listStyle: "none",
    padding: 0,
  },
  li: {
    listStyle: "none",
  },
  button: {
    background: "none",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
  },
  checkbox: {
    marginLeft: "10px",
  },
  subcategoryList: {
    paddingLeft: "20px",
    listStyle: "none",
  },
};

export default CategoryList;
