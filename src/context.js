import { createContext,useReducer,useContext,useEffect, useState } from "react";
import Reducer,{filterReducer} from "./readucer"
const foodapp =createContext()
const Context=({children})=>

{  
    
    useEffect(()=>{
        async function fetchdata()
        {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.471971&lng=78.8231989&page_type=DESKTOP_WEB_LISTING")
            const jsondata = await data.json()
            swiggydataDispatch({type:"setSwiggydata",payload:jsondata})
        }
        fetchdata()
    },[])

    const[swiggydata,swiggydataDispatch]=useReducer(Reducer)
    const[filter , filterDispatch]=useReducer(filterReducer,{search:"",veg:false})
    const cdnlink="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
    return(

        <foodapp.Provider value={{swiggydata,swiggydataDispatch , filter,filterDispatch,cdnlink}}>
            {children}
         </foodapp.Provider>
    )
    
}
export default Context
export const foodstate=()=>{
    return useContext(foodapp)
}