import { useState } from "react";
import Menuitem from "./Menuitem";

export default function Category({data}){

console.log("data passed = ", data);
const [categoryItems, setCategoryItems] = useState(false)

function handleClick(e){
    e.preventDefault();
    setCategoryItems(!categoryItems);
    console.log("categoryItems button = ", categoryItems);
}

    return(
        <div className="w-full min-h-[3rem] h-auto text-lg font-bold  
        rounded-lg bg-gray-100  shadow-2xl mt-3">

        <div className="flex justify-between">
            <div className="ml-3 mt-2">{data.title} ({data.itemCards.length})</div>
            <div className="mr-3 mt-2" onClick={handleClick}>
                {categoryItems ? "⬆️" : "🔽"}
            </div>
        </div>           

        {categoryItems && data?.itemCards.map((item) =>{
                return <Menuitem key={item?.card?.info?.id} info={item?.card?.info} />
            })}

            
        </div>
    )
}