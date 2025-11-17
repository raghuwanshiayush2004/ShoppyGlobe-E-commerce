import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CLEAR_CART } from '../actions/cartActions';

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };

    case REMOVE_FROM_CART:
      const itemToRemove = state.items.find(item => item.id === action.payload);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0),
      };

    case UPDATE_QUANTITY:
      const { productId, quantity } = action.payload;
      if (quantity < 1) return state;
      
      const itemToUpdate = state.items.find(item => item.id === productId);
      if (!itemToUpdate) return state;
      
      const quantityDiff = quantity - itemToUpdate.quantity;
      return {
        ...state,
        items: state.items.map(item =>
          item.id === productId ? { ...item, quantity } : item
        ),
        total: state.total + (itemToUpdate.price * quantityDiff),
      };

    case CLEAR_CART:
      return {
        items: [],
        total: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;