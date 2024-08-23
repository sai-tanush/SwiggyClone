// import { useEffect, useState } from "react";
// import { MENU_INDEX, RESTAURANT_INFO_INDEX, RESTAURANT_URL } from "./constants";

// export default function useRestaurantInfo(resId){

//     const [restaurantInfo, setRestaurantInfo] = useState(null);
//     const [menuInfo, setMenuInfo] = useState(null);

//     useEffect(() => {
//         fetchMenu();
//     },[])

//     async function fetchMenu() {
//         const data = await fetch(RESTAURANT_URL + resId);
//         const menujson = await data.json();
//         setRestaurantInfo(menujson?.data?.cards[RESTAURANT_INFO_INDEX]?.card?.card?.info);
//         console.log("Inside useRestaurantInfo restaurantInfo= ",menujson?.data?.cards[RESTAURANT_INFO_INDEX]?.card?.card?.info );
//         setMenuInfo(menujson?.data?.cards[MENU_INDEX]?.groupedCard?.cardGroupMap?.REGULAR);
//         console.log("Inside useRestaurantInfo menuInfo= ",menujson?.data?.cards[MENU_INDEX]?.groupedCard?.cardGroupMap?.REGULAR )
//     }   
//     return [restaurantInfo, menuInfo];
// }