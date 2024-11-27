export const initialState = {
    cart: [],
  };

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItem = state.cart.find(
          (item) =>
            item.id === action.payload.id && item.max_speed === action.payload.max_speed
        );

        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id && item.max_speed === action.payload.max_speed
                ? { ...item, quantity: item.quantity + action.payload.quantity }
                : item
            ),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: action.payload.quantity }],
          };
        }

      case "REMOVE_FROM_CART":
          return {
            ...state,
            cart: state.cart.filter(
              (item) =>
                item.id !== action.payload.id || item.max_speed !== action.payload.max_speed
            ),
          };

      case "INCREMENT":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id &&
            item.max_speed === action.payload.max_speed
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };

      case "DECREMENT":
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id &&
            item.max_speed === action.payload.max_speed &&
            item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };

      default:
        return state;
    }
  };