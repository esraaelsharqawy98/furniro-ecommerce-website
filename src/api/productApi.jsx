export const fetchProducts = async (limit) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching product:", error);
    return [];
  }
};

