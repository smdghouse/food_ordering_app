import Singlecard from "./singlecard"
import { Link } from "react-router-dom"
import { foodstate } from "./context.js"
import Shimmer from "./shimmer"
import Search from "./search.js"
const Restro=()=>{
    const {swiggydata,filter:{search}}=foodstate()
    function display()
    {
        restrolist=swiggydata
        if(search)
        {
            restrolist=swiggydata.filter((val)=>val.name.toLowerCase().includes(search))
        }
        return restrolist
    }
    return (swiggydata==null)?(
        <div className=" flex flex-wrap justify-center">
        {[...Array(15)].map((val,i)=><Shimmer key={i}/>)}
        </div>
    ):(<>
    <Search/>
    <div className=" flex flex-wrap justify-center xl:justify-start xl:pl-32 min-h-screen">
       
        {display().map((val,index)=><Link key={index} to={"/"+val.id}><Singlecard key={index} hotel={val}  /></Link>)}
      
    </div></> )
}
export default Restro