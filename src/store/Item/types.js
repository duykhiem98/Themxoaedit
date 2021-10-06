import { ADD_TO_LIST, CLEAR_LIST, DELETE_ITEM, UPDATE_WISHLIST } from "./actions";

export const addTolist =(objectUpdate)=>{
  return{
    type:ADD_TO_LIST,
    payload:objectUpdate
  }
}
export const clear_list =()=>{
  return{
    type:CLEAR_LIST,
    payload:[]
  }
}
export const delete_item = (index)=>{
  return{
    type:DELETE_ITEM,
    payload:index
  }
}
export const edit = (objectUpdate)=>{
  return{
    type:UPDATE_WISHLIST,
    payload:objectUpdate
  }
}
