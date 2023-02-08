import {  useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import Header from "./header"
import { AiFillStar } from "react-icons/ai"
import{BiRupee} from "react-icons/bi"
import {  TbDiscount2} from "react-icons/tb"
import Shimmer_cart from "./shimmer_cart.js"
import Singlemenu from "./singlemenu"
import {foodstate} from "./context"
import {useSelector} from "react-redux"
import { BiRupee } from "react-icons/bi"
import { Link } from "react-router-dom"


const Restromenu=()=>{
    const cart = useSelector(store=>store.cart.item)
    const {cdnlink}=foodstate()

    const {resid}=useParams()

    const [foodmenu, setFoodmenu] = useState({
        menu:null
        ,restodetail:null
    })


    useEffect(
        ()=>{
           async function fetchmenu()
            {
                const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=14.471971&lng=78.8231989&menuId="+resid)
                const jsondata= await data.json()
                
                const maindata = Object.values(jsondata?.data?.menu?.items)
               setFoodmenu({menu:maindata,restodetail:jsondata.data}
                    )
            }
            fetchmenu()
        },[] )
    
    

        
    return foodmenu.restodetail==null? <Shimmer_cart/> : (
    //    fillscreen div for the restro display and menu 
        <div className="w-full min-h-screen">
            {/* inside this div we have restro display for this  */}
            {/* {console.log(foodmenu.menu[1])} */}
            <Header/>

            <div className="flex w-full  bg-[#e6dcdc] flex-col xl:flex-row justify-center xl:justify-start items-center min-h-52 flex-wrap sticky left-0 top-20">
                {/* first comes 1/3 div of img */}
                <div className="  xl:w-1/3  flex h-full  xl:justify-center items-center">
                     <img className="xl:w-72 w-52  rounded-sm" src={cdnlink+foodmenu.restodetail.cloudinaryImageId} alt="" />
                </div>
                <div>

                </div>
                {/* next come 1/3 div of rating , price , delivery time etc */}
                <div className="xl:hidden ">
                <h1 className="text-lg font-bold capitalize">
                    {
                        foodmenu.restodetail.name
                    }

                </h1>
                </div>

               <div className="w-1/3  h-full  hidden xl:flex flex-col  justify-center">
                <h1 className="text-2xl font-bold capitalize">
                    {
                        foodmenu.restodetail.name
                    }

                </h1>
                <p className="text-sm text-gray-500 py-3">
                    {
                        foodmenu.restodetail.cuisines?.join(", ")
                    }
                </p>
                    <p  className="text-sm text-gray-500">
                        {
                            foodmenu.restodetail.area
                        }
                    </p>
                    <div className="w-full flex items-start h-14">
                        <div className=" xl:w-1/3 flex flex-col justify-end">
                            <h1 className="flex items-center font-bold">
                                <AiFillStar/>{foodmenu.restodetail.avgRating}
                            </h1>
                            <span className="text-sm text-gray-500">
                                {
                                    foodmenu.restodetail.totalRatingsString
                                }
                            </span>
                        </div >
                        <div className="w-1/3 flex flex-col justify-end">
                            <h1 className="font-bold">
                                {
                                    foodmenu.restodetail.sla.deliveryTime
                                }mins
                            </h1>
                            <span className="text-sm text-gray-500">Delivery Time</span>
                        </div>
                        <div className="w-1/3 flex flex-col justify-end">
                            <h1  className="font-bold flex items-center"><BiRupee/>{foodmenu.restodetail.costForTwo/100}</h1>
                            <span className="text-sm text-gray-500">Cost for two</span>
                        </div>
                    </div>
               </div>
               {/* this is the last 1/3 div for offers */}
               <div className=" w-1/3 hidden xl:flex h-full justify-center items-start flex-col"> 
               <h1 className="capitalize text-2xl font-bold mb-8 border-b-4 border-black ">
                offers
               </h1>
               <span className="flex items-center justify-start py-4">
                <TbDiscount2 size={"20px"}/>
                {
                    foodmenu.restodetail.aggregatedDiscountInfo?.descriptionList[0]?.meta
                }
               </span>
               <span className="flex items-center">
               <TbDiscount2 size={"20px"}/>
                {
                    foodmenu.restodetail.aggregatedDiscountInfo?.descriptionList[1]?.meta
                }
               </span>
               </div>
            </div>
            <div>

            </div>
            <div className="mt-5 min-h-screen flex xl:flex-row flex-col flex-wrap">
                <div className="xl:w-2/3 w-full ">
                    {foodmenu.menu.map((val,i)=>(<Singlemenu key={i} item={val} style={"flex flex-row-reverse justify-between items-center border-b-[1px] p-10 border-gray-500"} />))}
                </div>
                <div className="w-1/3 h-96 hidden xl:flex justify-start items-center border-4 border-gray-400 flex-col sticky top-72">
                    <h1 className="capitalize font-bold text-3xl">
                        Cart
                    </h1>
                    <div className="w-full h-full  overflow-scroll">
                        {
                            cart.map((val,i)=>(<Singlemenu key={i} item={val} style={"flex flex-row-reverse justify-between items-center border-b-[1px] p-2 border-gray-500"} />))
                        }
                        <div className="flex justify-between px-10 py-5">

                      
                        {
                        
                        (cart.length!=0)&&
                        <h1 className="text-lg flex items-center capitalize font-bold">total price : <BiRupee/> {
                        
                            Math.round(cart.reduce((acum,val)=>val.price/100*val.qty+acum,0))
                           
                        }</h1>
                    }
                    {(cart.length!=0)&&
                        <button className="rounded-md shadow-md bg-blue-500 text-sm px-4 py-2 text-white font-bold capitalize">checkout</button>
                    }
                    
                      </div>
                       

                </div>
                    </div>{
                        (cart.length>0)&&

                         <div className=" text-white font-bold text-2xl w-full h-24 fixed xl:hidden items-center justify-between px-10 bottom-0 rounded-t-3xl bg-green-400 left-0 flex"><h1 className="flex items-center">
                             {
                                cart.reduce((acum,val)=>val.qty+acum,0)
                            }{cart.reduce((acum,val)=>val.qty+acum,0)>1?("items "):("item ")} <span className="text-lg"> | </span><BiRupee/> {Math.round(cart.reduce((acum,val)=>val.price*val.qty/100+acum,0))}
                         </h1>
                          <Link to="/cart"><h1 className="capitalize">
                            view cart
                           </h1></Link> 
                         </div>
                    }
                   
                 
            </div>
           
        </div> 
    )
}
export default Restromenu