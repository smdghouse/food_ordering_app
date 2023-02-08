import {AiFillStar} from "react-icons/ai"
import {foodstate} from "./context.js"
const Singlecard = ({hotel}) => {
    const {cdnlink }=foodstate()
    return (
        <div className="w-96 text-center  items-center justify-start
         h-96 flex flex-col m-5 relative bg-[#e6dcdc] hover:shadow-md hover:shadow-black hover:scale-[1.03] cursor-pointer duration-300">
            <img className="w-64 mt-10" src={`${cdnlink}${hotel.cloudinaryImageId}`} alt={hotel.name} />
            <div className="flex flex-col justify-between my-5 px-10">
                <h1 className="capitalize  font-bold">
                    {hotel.name}
                </h1>
                <p>
                  {hotel.cuisines.join(", ")}
                </p>
            </div>
            <div className="flex flex-wrap justify-start items-center ">
                <h1 className=" star flex justify-start items-center bg-[#db7c38] font-bold text-white px-3">
                <AiFillStar/>  {hotel.avgRating}
                </h1>

                <p className=" text-xs px-10">{
                            hotel.slaString}
                </p>

                <p className="text-xs"> {
                            hotel.costForTwoString }
                </p>
              
            </div>
            <div className="bg-red-600 w-full font-bold text-sm absolute bottom-0 text-white">
                <p> {(hotel?.aggregatedDiscountInfo?.descriptionList[0].meta)}</p>
              
            </div>

        </div>
    )
}
export default Singlecard