import { create } from "zustand";

export const useCartStore = create((set) => ({
  cartItems: [],
  total: 0,
  subtotal: 0,

  addItem: (product, quantity = 1) => {
    set((state) => {
      const existingProduct = state.cartItems.find(item => item.id === product.id);
      let newCartItems;
      let newSubtotal = state.subtotal;
      let newTotal = state.total;

      if (existingProduct) {
        newCartItems = state.cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newCartItems = [...state.cartItems, { ...product, quantity }];
      }

      newSubtotal = newCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      newTotal = newSubtotal;

      return {
        cartItems: newCartItems,
        subtotal: newSubtotal,
        total: newTotal,
      };


  })},

  updateQuantity: (productId, quantity) => {
    set((state) => {
      const newCartItems = state.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
  
      const newSubtotal = newCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const newTotal = newSubtotal;
  
      return {
        cartItems: newCartItems,
        subtotal: newSubtotal,
        total: newTotal,
      };
    });
  },
  removeItem: (productId) =>
  set((state) => {
    const newCartItems = state.cartItems.filter(item => item.id !== productId);

    const newSubtotal = newCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const newTotal = newSubtotal; 

    return {
      cartItems: newCartItems,
      subtotal: newSubtotal,
      total: newTotal,
    };
  })
    
}));
