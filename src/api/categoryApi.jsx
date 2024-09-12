export const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const categories = await response.json();
      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
};


export const fetchCategoryByName = async (name) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching category:", error);
    return [];
  }
};

  