import { ADD_ITEM, REMOVE_ITEM, CLOSE_CART, OPEN_CART } from '../actions/cart';

const initialState = {
  items: [],
  visible: false
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...state,
        visible: true
      }
    case CLOSE_CART:
      return {
        ...state,
        visible: false
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((value, index) => index !== action.index)
      }
    default:
      return state;
  }
}