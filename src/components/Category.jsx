import { useState } from "react";
import Menuitem from "./Menuitem";
export default function Category({data, showIndex, setShowIndex, index}){

    const [count, setCount] = useState(0);

function handleClick(){    
    console.log("Button was Clicked!");
    console.log("showItems value = ", showIndex);
    setCount(count + 1);
    count%2 == 0 ? setShowIndex(index) : setShowIndex(null);    
}

    return(
        <div className="w-full min-h-[3rem] h-auto text-lg font-bold  
        rounded-lg bg-gray-100  shadow-2xl mt-3">

        <div className="flex justify-between">
            <div className="ml-3 mt-2">{data.title} ({data.itemCards.length})</div>
            <div className="mr-3 mt-2 cursor-pointer" onClick={handleClick}>
                {showIndex ? "⬆️" : "🔽"}
            </div>
        </div>           

        {showIndex && data?.itemCards.map((item) =>{
                return <Menuitem key={item?.card?.info?.id} info={item?.card?.info} />
            })}

            
        </div>
    )
}