const Reducer=(state,action)=>
{
    switch (action.type) {
        case "setSwiggydata":
            return action?.payload?.data?.cards[2]?.data?.data?.cards?.map((val,index)=>(val.data))
            
    
        default:
            return state
    }
}
export default Reducer
export const filterReducer =(state,action)=>{
    switch (action.type) {
        case "search":
          return {...state,search:action.payload}
    
        default:
            break;
    }
}