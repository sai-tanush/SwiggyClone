import Menuitem from "./Menuitem";
import Exocard from "./Exocard";
import { useParams } from "react-router-dom";
// import useRestaurantInfo from "../utils/useRestaurantInfo"
import { useEffect, useState } from "react";
import {
    MENU_INDEX,
  RESTAURANT_INFO_INDEX,
  RESTAURANTINFO_URL,
} from "../utils/constants";

export default function Menu() {
  const { resId } = useParams();
  console.log(resId);

  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  };

  console.log("menuItems = ", menuItems);

  // const [restaurantInfo, menuInfo] = useRestaurantInfo(resId);
  // console.log("restaurantInfo = ", restaurantInfo);

  //return --> right item Cards(menujson)

//carousel cond --> ret cards[2] --> else crds[1] cond --> return cards[7]

//menuInfo?.cards[2]?.card?.card?.itemCards
  function getItemCards(menujson){
    const menu = menujson?.data?.cards[MENU_INDEX]?.groupedCard?.cardGroupMap?.REGULAR;
    // if(menu?.cards[1]?.card?.card?.carousel?.length == 0){
    //       if(menu?.menuInfo?.cards[1]?.card?.card?.itemCards.length > 0){
    //         return menu?.menuInfo?.cards[1]?.card?.card?.itemCards
    //       }
    //       else if(menu?.menuInfo?.cards[1]?.card?.card?.itemCards.length == 0){
    //         return (menu?.menuInfo?.cards[7]?.card?.card?.itemCards)
    //       }
    //     return (menu?.menuInfo?.cards[2]?.card?.card?.itemCards)           
    // } 
    // return menu?.menuInfo?.cards[2]?.card?.card?.itemCards;


    return menu?.cards[1]?.card?.card?.carousel?.length > 0 
        ?  (menu?.cards[2]?.card?.card?.itemCards)//carousel present          
        : menu?.cards[1]?.card?.card?.itemCards.length > 0
        ?  (menu?.cards[1]?.card?.card?.itemCards) //menu layers present
        :  (menu?.cards[7]?.card?.card?.itemCards) //menu layer absent
  }

  const {
    name,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
    areaName,
  } = restaurantInfo;

  //   return(
  //     {if(loading === true)<Exocard />}
  //   )


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

          {/*Listing Menu Items with a ternary condition */}
          {/* Not optimised code] */}

          {/* {menuInfo?.cards[1]?.card?.card?.carousel?.length > 0   carousel cond --> ret cards[2] --> else crds[1] cond --> return cards[7]
            ? menuInfo?.cards[2]?.card?.card?.itemCards.map((item) =>
                item.card.info.price > 0 ? (
                  <Menuitem key={item.card.info.id} info={item.card.info} />
                ) : (
                  <Menuitem key={item.card.info.id} info={item.card.info} />
                )
              )
            : menuInfo?.cards[1]?.card?.card?.itemCards.length > 0
            ? menuInfo?.cards[1]?.card?.card?.itemCards.map((item) => (
                <Menuitem key={item.card.info.id} info={item.card.info} />
              ))
            : menuInfo?.cards[7]?.card?.card?.itemCards.map((item) => (
                <Menuitem key={item.card.info.id} info={item.card.info} />
              ))} */}

          {/* { --> check syntax for arrow function, return not required if ( are used) 
          if {used}  --> return is required in map function*/}
          {menuItems.map((item) => <Menuitem key={item.card.info.id} info={item.card.info} />
          )}
        </div>
      </div>
    </div>
  );
}
