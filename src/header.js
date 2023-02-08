import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
const Header = () => {
    const cart=useSelector(store=>store.cart.item)
    return (
        <div className="z-30 w-full xl:p-10 h-24 shadow-md flex justify-between items-center bg-white sticky top-0 left-0">
            <Link to="/"><img className="w-16 ml-5 xl:pl-0" src="http://cdn3.vox-cdn.com/uploads/chorus_asset/file/861732/eater-logo-big.0.jpg" alt="Eater" /></Link>
            <ul className="flex items-center text-md cursor-pointer capitalize font-bold ">
                <li><Link to="/">Home</Link></li>
                <li className="px-5"><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="px-5"><Link to="/cart">Cart[{cart?.reduce((acum,val)=>{ return acum+val.qty},0)}]</Link></li>

            </ul>
        </div>
    )
}
export default Header