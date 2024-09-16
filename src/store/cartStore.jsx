import { create } from "zustand";

const calculateTotals = (cartItems) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return {
    subtotal,
    total: subtotal,
  };
};

export const useCartStore = create((set) => ({
  cartItems: [],

  addItem: (product, quantity = 1) => {
    set((state) => {
      const existingProduct = state.cartItems.find((item) => item.id === product.id);

      let newCartItems;
      if (existingProduct) {
        newCartItems = state.cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        newCartItems = [...state.cartItems, { ...product, quantity }];
      }

      const { subtotal, total } = calculateTotals(newCartItems);

      return {
        cartItems: newCartItems,
        subtotal,
        total,
      };
    });
  },

  updateQuantity: (productId, quantity) => {
    set((state) => {
      const newCartItems = state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );

      const { subtotal, total } = calculateTotals(newCartItems);

      return {
        cartItems: newCartItems,
        subtotal,
        total,
      };
    });
  },

  removeItem: (productId) => {
    set((state) => {
      const newCartItems = state.cartItems.filter((item) => item.id !== productId);

      const { subtotal, total } = calculateTotals(newCartItems);

      return {
        cartItems: newCartItems,
        subtotal,
        total,
      };
    });
  },
}));
