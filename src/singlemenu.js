import {BiRupee} from "react-icons/bi"
import {useDispatch} from "react-redux"
import {additem,increment,decqty,emptycart} from "./cartslice"
import { useSelector } from "react-redux"
const Singlemenu=({item,style})=>{
    const cdnlink="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
    const dispatch = useDispatch()
    const menu = useSelector(store=>store.cart.item)
    
    function qty()
    {
        for(i=0;i<menu.length;i++)
        {
            if( menu[i].id==item.id)
            {
                return menu[i].qty
            }
           
        }
    }
    const mainqty=qty()
    console.log(mainqty)
       
    
    return(
        <div className={style}>
            {/* {console.log(item)} */}
            <div className="w-36 flex-col flex justify-center items-center">
                <img src={cdnlink+item.cloudinaryImageId} alt="" />
                {

                    menu.some(val=>val.id===item.id) ?(<div className="flex cursor-pointer items-center justify-between capitalize rounded-md text-green-500 border-gray-300 w-24 mt-2 font-bold hover:shadow-lg border-2 "><button className="w-8" onClick={()=>dispatch(decqty(item))}>-</button><p>{mainqty}</p><button className="w-8" onClick={()=>{dispatch(increment(item))}}>+</button></div>):  (  <div onClick={()=>{   dispatch(additem(item)) }} className="flex items-center justify-center capitalize rounded-md cursor-pointer text-green-500 border-gray-300 w-24 mt-2 font-bold hover:shadow-lg border-2 ">add</div>)
                   
                    
                } 
                 {console.log(menu)}
                
                
                {/* {
                    (menu.length==0)&&
                    (<div onClick={()=>{   dispatch(additem(item)) }} className="flex items-center justify-center capitalize rounded-md text-green-500 border-gray-300 w-32 mt-2 font-bold hover:shadow-lg border-2 ">add</div>)
                    
                    
                } */}
              
            </div>
            <div className="flex flex-col items-start flex-wrap ">
                {!item.isVeg?<div className="border-2 rounded-md flex items-center justify-center pb-[2px] text-sm border-red-600">🔴</div>:<div className="border-2 rounded-md flex items-center justify-center text-sm pb-[2px] border-green-600">🟢</div>}
                <h1 className="font-bold">{item.name}</h1>
                <p className="flex items-center"><BiRupee/>{item.price/100}</p>
            </div>
            
        </div>
    )
}
export default Singlemenu