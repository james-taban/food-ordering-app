/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const exisitngCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (exisitngCartItemIndex > -1) {
      const existingItem = state.items[exisitngCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems[exisitngCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type == 'REMOVE_ITEM') {
    const exisitngCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const exisitngCartItem = state.items[exisitngCartItemIndex];

    const updatedItems = [...state.items];

    if (exisitngCartItem.quantity === 1) {
      updatedItems.splice(exisitngCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...exisitngCartItem,
        quantity: exisitngCartItem.quantity - 1,
      };
      updatedItems[exisitngCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  console.log('Current cart state:', cart);

  function addItem(item) {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item: item,
    });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id,
    });
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  console.log(CartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
