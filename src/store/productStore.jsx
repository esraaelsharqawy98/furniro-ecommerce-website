import { create } from "zustand";
import { fetchProducts, fetchProductById } from "../api/productApi";
import { fetchCategoryByName } from "../api/categoryApi";

export const useProductStore = create((set) => ({
  products: [],
  currentPage: 1,
  totalPages: 1,
  selectedProduct: null,
  fetchAllProducts: async (page = 1) => {
    try {
      const allProducts = await fetchProducts();
      const startIndex = (page - 1) * 16;
      const endIndex = startIndex + 16;
      const products = allProducts.slice(startIndex, endIndex);
      set({ 
        products,
        currentPage: page,
        totalPages: Math.ceil(allProducts.length / 16),
      });
    } catch (error) {
      set({ error: 'Error fetching products' });
    }
  },

  fetchProductsByCategory: async (name, page = 1) => {
    try {
      const allProducts = await fetchCategoryByName(name);
      const startIndex = (page - 1) * 16;
      const endIndex = startIndex + 16;
      const products = allProducts.slice(startIndex, endIndex);
      set({ 
        products,
        currentPage: page,
        totalPages: Math.ceil(allProducts.length / 16),
      });
    } catch (error) {
      set({ error: 'Error fetching category' });
    }
  },

  setPage: (page) => set({ currentPage: page }),

  fetchProductById: async (id) => {
    try {
      const product = await fetchProductById(id);
      set({ selectedProduct: product });
    } catch (error) {
      set({ error: 'Error fetching product' });
    }
  },
  setSelectedProduct: (product) => set({ selectedProduct: product }),
 
}));

export default useProductStore;
