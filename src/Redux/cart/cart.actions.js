import { cartActionType } from './cartTypes';

export const toggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
});

export const AddItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
});

export const RemoveItem = (item) => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item,
})

export const ClearItemFromCart = (item) => ({
  type: cartActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
});
