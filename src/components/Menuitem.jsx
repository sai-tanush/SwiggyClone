import { MENU_URL } from "../utils/constants"

export default function Menuitem({name, price, rating, votes, description, imageId}){
    return(
        <>  
            {/* Outer div with left side(content) and right side(image) in flex ✅*/}
            <div className="w-full h-auto flex relative justify-between mt-[2rem] mb-1 border border-slate-400 rounded-xl shadow-xl">
                {/* Left side Content ✅ */}
                <div className="w-3/5 mt-5 ml-4 flex flex-col flex-wrap">
                    <p className="text-xl font-bold">{name}</p>
                    <p className="text-lg font-semibold">₹{price/100}</p>
                    <p className="text-md font-semibold">{rating}{'('}{votes}{')'}</p>
                    <p className="text-slate-700">{description}</p>
                </div>
                {/* Right side Image position fixed ✅  */}
                <div className="w-2/5 mt-3 mb-7 mr-3 flex flex-col justify-center items-center">
                    <img src={MENU_URL+imageId} alt="Menu Item" className="w-[9rem] h-[9rem] mr-[-6rem] object-cover rounded-3xl border border-slate-400" />
                    {/* Button position absolute, to be placed at the bottom of the image */}
                    <button className="absolute bottom-3 w-[6rem] h-[2rem] text-center ml-[6rem] bg-slate-50 border border-black rounded-2xl z-40">
                        <span className="text-green-500">Add</span>
                    </button>
                </div>
            </div>
        </>
    )
}