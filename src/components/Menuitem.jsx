import { useState } from "react";
import { DESCRIPTION_MAX_LENGTH, MENU_URL } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function Menuitem({info}){

    const [descriptionExpanded, setDescriptionExpanded] = useState(false);

    const showDescription = descriptionExpanded ? info.description : info.description.substring(0, 150) + "...";

    const dispatch = useDispatch();

    function descriptionToggle(){
        setDescriptionExpanded(!descriptionExpanded);
    }

    function handleAddItem(info){
        //Dispatch an Action
        dispatch(addItem(info));
    }

    const {name, ratings, imageId, price, defaultPrice} = info;
    
    return(
        <> 
            {/* Outer div with left side(content) and right side(image) in flex ✅*/}
            <div className="w-full h-auto flex justify-between mt-[2rem] mb-1 border border-slate-400 
            rounded-xl shadow-xl">
                {/* Left side Content ✅ */}
                <div className="w-3/5 mt-5 ml-4 flex flex-col flex-wrap">
                {info.isVeg ? 
                    <div className="w-[19px] border-2 border-green-500 rounded-md">
                        <svg width="15" height="15" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="15" height="15" fill="white" className="border border-black"/> 
                        <circle cx="50" cy="50" r="30" fill="green"/>
                        </svg></div> : 
                    <div className="w-[19px] border-2 border-red-500 rounded-md">
                    <svg width="15" height="15" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="15" height="15" fill="white" /> 
                        <circle cx="50" cy="50" r="30" fill="red"/>
                        </svg></div> 
                }
                    
                    <p className="text-xl font-bold">{name}</p>
                    <p className="text-lg font-semibold">₹{(price || defaultPrice)/100}</p>
                    <p className="text-md font-semibold flex text-sm"><svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                        className="size-5 mt-1 text-green-600 fill-current">
                        <path strokeLinecap="round" strokeLinejoin="round" 
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    <p className="mt-[3px]"><span className="text-green-600">{ratings.aggregatedRating.rating}</span>{'('}
                    {ratings.aggregatedRating.ratingCount}{')'}</p></p>
                    <p className="text-slate-600 text-sm mb-4">{showDescription} 
                    {info.description.length > DESCRIPTION_MAX_LENGTH && (
                        <button onClick={descriptionToggle}
                        ><span className="text-sky-600">{!descriptionExpanded ? "Read More" : "Read Less"}</span></button>
                    )}</p>                    
                </div>
                {/* Right side Image position fixed ✅  */}
                <div className="w-2/5 mt-3 mb-7 mr-3 flex flex-col justify-center items-center">
                    <img src={MENU_URL+imageId} alt="Menu Item" 
                    className="w-[9rem] h-[9rem] mr-[-6rem] object-cover rounded-3xl" />
                    {/* Button position absolute, to be placed at the bottom of the image */}
                    <button className=" w-[6rem] h-[2rem] text-center ml-[6rem] bg-slate-50 
                    border border-slate-400 rounded-2xl hover:bg-slate-300"
                    onClick={() => handleAddItem(info)}>
                        <span className="text-green-500">ADD</span>
                    </button>
                </div>
            </div>
        </>
    )
}