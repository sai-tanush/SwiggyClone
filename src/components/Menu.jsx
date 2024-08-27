import Exocard from "./Exocard";
import { useParams } from "react-router-dom";
import Category from "./Category";
import { useEffect, useState } from "react";
import {
    MENU_INDEX,
  RESTAURANT_INFO_INDEX,
  RESTAURANTINFO_URL,
} from "../utils/constants";


export default function Menu() {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANTINFO_URL + resId);
    const menujson = await data.json();
    setRestaurantInfo(
      menujson?.data?.cards[RESTAURANT_INFO_INDEX]?.card?.card?.info
    );
    setMenuItems(
      //menujson?.data?.cards[MENU_INDEX]?.groupedCard?.cardGroupMap?.REGULAR
      getItemCards(menujson)
    );

    //setCategoryItems(menujson?.data?.cards[MENU_INDEX]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    setCategoryItems(
      getCategory(menujson)
    );

    
    setLoading(false);
    console.log("menujson = ", menujson);

    //setting categories value to a variable
    //const categories = menujson?.data?.cards[MENU_INDEX]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    //console.log("All categories cards = ", categories);
  };

  function getItemCards(menujson){
    console.log("getItemCards was called!");
    const menu = menujson?.data?.cards[MENU_INDEX]?.groupedCard?.cardGroupMap?.REGULAR;
    return menu?.cards[1]?.card?.card?.carousel?.length > 0 
        ?  (menu?.cards[2]?.card?.card?.itemCards)//carousel present          
        : menu?.cards[1]?.card?.card?.itemCards.length > 0
        ?  (menu?.cards[1]?.card?.card?.itemCards) //menu layers present
        :  (menu?.cards[7]?.card?.card?.itemCards) //menu layer absent
  }

  console.log("menuItems = ",menuItems);

  //setting the categories/filtering the cards with category
  function getCategory(menujson){
    console.log("getCategory was called");    
    console.log("menujson inside getCategory = ", menujson);
    console.log("menujson length = ", menujson?.data?.length);
    const categories = menujson?.data?.cards[MENU_INDEX]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => 
      item?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log("categories = ",categories);

    return categories;
  }  

  const {
    name,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
    areaName,
  } = restaurantInfo;

  //use shimmer ui assoiciated with api fetch not ternary operator
  if (loading) {
    return <Exocard />;
  }

  return (
    <div className="w-full h-full min-h-screen bg-gray-100 shadow-gray-200 z-10 ">
      <div className="flex justify-center mx-auto">
        <div className="w-1/2  mt-[5rem]">
          <h1 className="text-2xl font-bold ml-2 mb-3">{name}</h1>
          {/* Make a border/box for restaurant  details ✅  */}
          <div className="w-full border border-slate-400 shadow-2xl rounded-3xl">
            {/* Rating and Price in flex */}
            <div className="flex w-2/6 justify-between mt-3 ml-4 ">
              <div className="font-bold text-md">
                {avgRating}
                {totalRatingsString}
              </div>
              <div className="font-bold text-md">{costForTwoMessage}</div>
            </div>
            {/*Cuisines  */}
            <div className="ml-4 text-red-500">{cuisines.join(", ")}</div>
            {/* Location */}
            <div className="font-semibold ml-4">{areaName}</div>
            {/* Expected Time to Deliver */}
            <div className="ml-4 font-semibold mb-3">
              {restaurantInfo.sla.minDeliveryTime} -{" "}
              {restaurantInfo.sla.maxDeliveryTime} mins
            </div>
          </div>

          {/* <div className="mt-3">
            <Category name="Recommended" itemsLength={11}/>
          </div> */}

          {categoryItems.map((item, index) => {
           return <Category key={item?.card?.card?.title} data={item?.card?.card}
                    showIndex = {index === showIndex ? true : false}
                    setShowIndex= {setShowIndex}
                    index={index}
                    />
          })}

          {/* {console.log("setShowIndex = ", setShowIndex)}
          {menuItems.map((item) => <Menuitem key={item.card.info.id} info={item.card.info} />
          )} */}
        </div>
      </div>
    </div>
  );
}
