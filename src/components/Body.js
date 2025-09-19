import Rescard from "./Rescard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import Mock_Data from "../utils/Mock_Data.js"; // <-- import JSON
import{Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData=async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.2873968&lng=83.8267367&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();
  
    const restaurantCard = json?.data?.cards.find(
  c => c.card?.card?.gridElements?.infoWithStyle?.restaurants
);

const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants



    if (restaurants) {
      setlistofRestaurants(restaurants);
      setFilteredRes(restaurants);
    }
}


  if (!filteredRes || filteredRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const searched = listofRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(searched);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listofRestaurants.filter(
              (res) => Number(res.info.avgRating) > 4.5
            );
            setFilteredRes(filtered); // <-- filterRes, not listofRestaurants
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRes.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
           <Rescard resData={restaurant}  />
           </Link>
        ))
        
        }
      </div>
    </div>
  );
};

export default Body;
