import { EDIT_CATEGORY, LIST_CATEGORY } from "./actions";



export const listCategories =(objectUpdate)=>{
  return{
    type:LIST_CATEGORY,
    payload:objectUpdate
  }
}
export const edit_category = (objectUpdate)=>{
  return{
    type:EDIT_CATEGORY,
    payload:objectUpdate
  }
}
