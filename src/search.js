import { foodstate } from "./context.js"
const Search=()=>{
    const {filter:{search,veg},filterDispatch}=foodstate()
    console.log(search,veg)
    return(
        <div className="w-full h-20 flex justify-center items-center" >
            <input type="text" placeholder="search" className="py-2 px-10 focus:outline-none  border-b-2 border-black" value={search} onChange={(e)=>{
                filterDispatch({type:"search",payload:e.target.value})
            }} />
        </div>
    )
}
export default Search