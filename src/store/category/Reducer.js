import { EDIT_CATEGORY, LIST_CATEGORY } from "./actions";
import { UPDATE_WISHLIST } from "../Item/actions";

const initialState = {
  Data: [{
    id: "1",
    title: "First Item",
  },
    {
      id: "2",
      title: "Second Item",
    },
    {
      id: "3",
      title: "Third Item",
    },
    {
      id: "4",
      title: "Four Item",
    },{
      id: "5",
      title: "Five Item",
    },{
      id: "6",
      title: "Six Item",
    },
    {
      id: "7",
      title: "Seven Item",
    },{
      id: "8",
      title: "Eight Item",
    },
    {
      id: "9",
      title: "Nine Item",
    },
    {
      id: "10",
      title: "Ten Item",
    },{
      id: "11",
      title: "Eleven Item",
    },{
      id: "12",
      title: "Twelve Item",
    },{
      id: "13",
      title: "Thirteen Item",
    },{
      id: "14",
      title: "Fourteen Item",
    },{
      id: "15",
      title: "Fifteen Item",
    },{
      id: "16",
      title: "Sixteen Item",
    }
    ],
};
const CategoryReducer = (state= initialState, action) => {
  switch (action.type) {
    case LIST_CATEGORY:
      return {
        Data: action.payload,
      };
    case EDIT_CATEGORY:
      const newItem = action.payload?.newValue || "";
      // cái action payload này giờ nó là 1 object {indexUpdate: 1, newValue: 'aaa'}
      // làm việc nhớ format code cho cẩn thận
      // nhìn code thấy lung tung quá

      const oldItems = [...state.Data];
      oldItems[action.payload.indexUpdate] = newItem;

      console.log('oldItems ', oldItems)
      return {
        ...state,
        Data: [...oldItems],
      };
    default:
      return state;

  }

};
export default CategoryReducer;
