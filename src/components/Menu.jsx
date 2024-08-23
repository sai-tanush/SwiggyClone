import Menuitem from "./Menuitem";
import Exocard from "./Exocard";
import { useParams } from "react-router-dom";
// import useRestaurantInfo from "../utils/useRestaurantInfo"
import { useEffect, useState } from "react";
import { MENU_INDEX, RESTAURANT_INFO_INDEX, RESTAURANTINFO_URL } from "../utils/constants";

export default function Menu(){

    const { resId } = useParams();
    console.log(resId);

    const [restaurantInfo, setRestaurantInfo] = useState([]);
    const [menuInfo, setMenuInfo] = useState([]);


    useEffect(() => {
        fetchMenu();
    },[])

   
    const fetchMenu = async () => {
        const data = await fetch(RESTAURANTINFO_URL + resId);
        const menujson = await data.json();
        setRestaurantInfo(menujson?.data?.cards[RESTAURANT_INFO_INDEX]?.card?.card?.info);
        setMenuInfo(menujson?.data?.cards[MENU_INDEX]?.groupedCard?.cardGroupMap?.REGULAR);
    }   

    // const [restaurantInfo, menuInfo] = useRestaurantInfo(resId);
    // console.log("restaurantInfo = ", restaurantInfo);
    
    const {name, avgRating, costForTwoMessage, totalRatingsString, cuisines, areaName} = restaurantInfo;   


    return ((restaurantInfo.length === 0 && menuInfo.length === 0 )? <Exocard /> : 
        <div className="w-full h-full min-h-screen bg-gray-100 shadow-gray-200 z-10 ">
            <div className="flex justify-center mx-auto">
                <div className="w-1/2  mt-[5rem]">
                    <h1 className="text-2xl font-bold ml-2 mb-3">{name}</h1>
                    {/* Make a border/box for restaurant  details ✅  */}
                    <div className="w-full border border-slate-400 shadow-2xl rounded-3xl">
                        {/* Rating and Price in flex */}
                        <div className="flex w-2/6 justify-between mt-3 ml-4 ">
                            <div className="font-bold text-md">{avgRating}{totalRatingsString}</div>
                            <div className="font-bold text-md">{costForTwoMessage}</div>
                        </div>
                        {/*Cuisines  */}
                        <div className="ml-4 text-red-500">{cuisines.join(", ")}</div>
                        {/* Location */}
                        <div className="font-semibold ml-4">{areaName}</div>
                        {/* Expected Time to Deliver */}
                        <div className="ml-4 font-semibold mb-3">{restaurantInfo.sla.minDeliveryTime} - {restaurantInfo.sla.maxDeliveryTime} mins</div>
                    </div>

                    {/*Listing Menu Items with a ternary condition */}
                                    
                    {menuInfo?.cards[1]?.card?.card?.carousel?.length > 0 ? 
                    (menuInfo?.cards[2]?.card?.card?.itemCards.map((item) => (
                        (item.card.info.price > 0 ? <Menuitem key={item.card.info.id}
                            name={item.card.info.name}
                            price={item.card.info.price}
                            rating={item.card.info.ratings.aggregatedRating.rating}
                            votes={item.card.info.ratings.aggregatedRating.ratingCount}
                            description={item.card.info.description}
                            imageId={item.card.info.imageId}
                        /> : <Menuitem key={item.card.info.id}
                            name={item.card.info.name}
                            price={item.card.info.defaultPrice}
                            rating={item.card.info.ratings.aggregatedRating.rating}
                            votes={item.card.info.ratings.aggregatedRating.ratingCount}
                            description={item.card.info.description}
                            imageId={item.card.info.imageId}
                        />)
                        

                    )))  : menuInfo?.cards[1]?.card?.card?.itemCards.length > 0 ? 
                    (menuInfo?.cards[1]?.card?.card?.itemCards.map((item) => (
                        <Menuitem key={item.card.info.id}
                            name={item.card.info.name}
                            price={item.card.info.price}
                            rating={item.card.info.ratings.aggregatedRating.rating}
                            votes={item.card.info.ratings.aggregatedRating.ratingCount}
                            description={item.card.info.description}
                            imageId={item.card.info.imageId}
                        />
                    ))): ((menuInfo?.cards[7]?.card?.card?.itemCards.map((item) => (
                        <Menuitem key={item.card.info.id}
                            name={item.card.info.name}
                            price={item.card.info.price}
                            rating={item.card.info.ratings.aggregatedRating.rating}
                            votes={item.card.info.ratings.aggregatedRating.ratingCount}
                            description={item.card.info.description}
                            imageId={item.card.info.imageId}
                        />
                    )))) }
                </div>
            </div>
        </div>
    )
}