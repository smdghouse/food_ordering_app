import { useSelector } from "react-redux"
import Singlemenu from "./singlemenu"
import {BiRupee} from "react-icons/bi"
const Cart = () => {
    const menu = useSelector(store => store.cart.item)
    return (
        <div className="w-full min-h-screen flex ">
            <div className="w-full">

                {
                    (menu.length > 0) &&
                    (menu.map((val, i) => (<Singlemenu key={i} item={val} style={"flex flex-row-reverse justify-between items-center border-b-[1px] p-2 border-gray-500"} />)))
                }
                <div className="flex justify-between px-10 py-5">


                    {

                        (menu.length != 0) &&
                        <h1 className="text-lg flex items-center capitalize font-bold">total price : <BiRupee /> {

                            Math.round(menu.reduce((acum, val) => val.price / 100 * val.qty + acum, 0))

                        }</h1>
                    }
                    {(menu.length != 0) &&
                        <button className="rounded-md shadow-md bg-blue-500 text-sm px-4 py-2 text-white font-bold capitalize">checkout</button>
                    }

                </div>
            </div>

        </div>
    )
}
export default Cart