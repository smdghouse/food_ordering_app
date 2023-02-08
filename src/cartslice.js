import {createSlice} from "@reduxjs/toolkit"
const qty=1
const Cartslice=createSlice(
    {
        name:"cart",
        initialState:{
            item:[]
        },
        reducers:
        {
            additem:(state,action)=>{
                state.item.push({...action.payload,qty})
            },
            emptycart:(state)=>{
                state.item=[]
            },
            increment:(state,action)=>{
                state.item=state.item.filter(val=>val.id===action.payload.id?val.qty+=1:val.qty)
            },
            decqty:(state,action)=>{
              
                state.item =state.item.filter(val=>val.id===action.payload.id?val.qty-=1:val.qty)
            }
        }
    }
)
export const {additem,emptycart,increment,decqty}=Cartslice.actions
export default Cartslice.reducer