import { combineReducers, createStore } from "redux";
import ListReducer from "./Item/Reducer";
import CategoryReducer from "./category/Reducer";


const rootReducer = combineReducers({
  ListReducer:ListReducer,
  CategoryReducer:CategoryReducer
});


const configStore = () => {
  return createStore(rootReducer)
}
export default configStore;
