export const getCartItems = (state) => state.cart.items;
export const getCartTotal = (state) => state.cart.total;
export const getCartItemCount = (state) => 
  state.cart.items.reduce((total, item) => total + item.quantity, 0);