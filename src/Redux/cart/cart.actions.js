import { cartActionType } from './cartTypes';

export const toggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN
})

export const AddItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
})
