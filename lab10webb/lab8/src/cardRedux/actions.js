export const addToCart = (item) => {
    return {
      type: "ADD_TO_CART",
      payload: item,
    };
  };

  export const removeFromCart = (id, max_speed) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: { id, max_speed },
    };
  };

  export const increment = (id, max_speed) => {
    return {
      type: "INCREMENT",
      payload: { id, max_speed },
    };
  };

  export const decrement = (id, max_speed) => {
    return {
      type: "DECREMENT",
      payload: { id, max_speed },
    };
  };

