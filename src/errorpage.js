import {useRouteError} from "react-router-dom"
const Errorpage=()=>{
    const {status,statusText}=useRouteError()
    return( <div className="text-2xl font-bold uppercase flex flex-col justify-center items-center w-full h-screen">
        <h1 >oops..! something went wrong🥲</h1>
        <h1>{status}:{statusText}</h1>
    </div>)
   
}
export default Errorpage