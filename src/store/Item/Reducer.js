import { CLEAR_LIST, DELETE_ITEM, UPDATE_WISHLIST } from "./actions";

const { ADD_TO_LIST } = require("./actions");
const initialState = {
  items: [],
};
const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      let newItems = state.items.concat(action.payload);
      return {
        items: newItems,
      };
    case CLEAR_LIST:
      return {
        items: [],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };
    case UPDATE_WISHLIST:
      const newItem = action.payload?.newValue || "";
      // cái action payload này giờ nó là 1 object {indexUpdate: 1, newValue: 'aaa'}
      // làm việc nhớ format code cho cẩn thận
      // nhìn code thấy lung tung quá

      const oldItems = [...state.items];
      oldItems[action.payload.indexUpdate] = newItem;

      console.log('oldItems ', oldItems)
      return {
        ...state,
        items: [...oldItems],
      };

    default:
      return state;
  }
};
export default ListReducer;
