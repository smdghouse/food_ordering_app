import { AiFillCopyrightCircle, AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, } from "react-icons/ai"
const Footer=()=>{
    return<>
    <div className="bg-black text-white w-full h-24 px-20 flex lg:flex-row flex-col items-center cursor-pointer justify-between">
        <h1 className="font-bold text-3xl uppercase">eater</h1>
        <h1 className="flex justify-center items-center"><AiFillCopyrightCircle size={"20px"}/>smdghouse2001@gmail.com</h1>
        <ul className="flex">
            <li><AiFillFacebook size={"30px"}/></li>
            <li><AiFillInstagram size={"30px"}/></li>
            <li><AiFillTwitterSquare size={"30px"}/></li>
        </ul>
       

    </div> 
    {/* <div className="py-10 w-full bg-black text-white text-lg font-bold flex justify-center items-center text-center"></div> */}
    </>
}
export default Footer