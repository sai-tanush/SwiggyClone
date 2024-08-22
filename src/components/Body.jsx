import Cards from "./Cards";
import CDN_URL from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export default function Body() {

    const [resNumber, setResNumber] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=> {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const apijson = await data.json();
        setResNumber(apijson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurant(apijson.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    

    function handleFilter(){
        console.log("Filter was Clicked");
        const filteredList = resNumber.filter(
            (restaurant) => restaurant.info?.avgRating > 4.4
        );
        setFilteredRestaurant(filteredList);      
    }

    function handleChange(e){
        e.preventDefault();
        setSearchText(e.target.value);
    }

    function handleSearch(e){
        e.preventDefault();
        console.log(searchText);
        const filteredRestaurants = resNumber.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        )

        setFilteredRestaurant(filteredRestaurants);
    }

    if(resNumber.length ===0){
        return <Skeleton />
    }
    else{
        return (
            <div className="w-full h-full min-h-screen bg-gray-100 shadow-gray-200 mt-[4rem]">
              <div className="w-4/5 h-10 mx-auto flex items-center gap-10 mb-4">
                <button
                  type="button"
                  className="text-black border-2 border-slate-400
                        shadow-red-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-8 ml-7"
                  onClick={handleFilter}
                >Filter: Top
                </button>
                <form className="max-w-md  h-2 mt-[-20px]">
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
                    Search
                  </label>
                  <div className="relative w-full flex">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-[35rem] p-4 ps-10 text-sm text-gray-900 rounded-lg
                 bg-white h-[3rem] mt-1"
                      placeholder="Search Dishes, Restaurants..."
                      value={searchText}
                      onChange={handleChange}
                    />
                    <button
                      type="submit"
                      className="text-white  bg-orange-400
                        font-medium rounded-lg text-sm px-4 py-2 right=0 mt-1"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
        
              <div className="w-4/5 mx-auto flex flex-wrap">
              
                {filteredRestaurant.map((restaurant) => {
                    const restaurantData = restaurant.info;
                return (
                  <Link to={"restaurants/" + restaurant.info.id}
                  key={restaurant.info?.id}><Cards                                  
                  image={CDN_URL + restaurantData?.cloudinaryImageId}
                  name={restaurantData?.name}
                  rating={restaurantData?.avgRating}
                  tod={restaurantData.sla.deliveryTime}
                  cuisines={restaurantData.cuisines.join(", ")}
                  location={restaurantData.areaName}
                  cost={restaurantData.costForTwo}
                /></Link>                
                )          
                })}
              </div>
            </div>
          );        
    }

 
}
