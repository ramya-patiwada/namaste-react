import Rescard from "./Rescard.js";
//import resObj from "../utils/Mock_Data.js";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body=()=>{
    //normal javascript variable 
    // let listofRestaurants=[
    //         {
    //         "info": {
    //                   "id": "5934",
    //                   "name": "Burger King",
    //                   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
    //                   "locality": "Koramangala",
    //                   "areaName": "Koramangala",
    //                   "costForTwo": "₹350 for two",
    //                   "cuisines": [
    //                     "Burgers",
    //                     "American"
    //                   ],
    //                   "avgRating": 4.2,
    //                 }
    //         },
    //         {
                     
    //                 "info": {
    //                   "id": "426776",
    //                   "name": "Theobroma",
    //                   "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/c539965e-4096-491f-8e0d-d4d4a9c63d8d_426776.JPG",
    //                   "locality": "Koramangala",
    //                   "areaName": "Koramangala",
    //                   "costForTwo": "₹400 for two",
    //                   "cuisines": [
    //                     "Desserts",
    //                     "Bakery",
    //                     "Beverages"
    //                   ],
    //                   "avgRating": 4.6,
    //                 }
    //         }


    // ]


    //useState Hooks 
    let[listofRestaurants,setlistofRestaurants]=useState([]);
    let[filteredRes,setFilteredRes]=useState([]);

    const[searchText,setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.2995312&lng=83.8320834&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();

        const restaurants= json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;


        if(restaurants){
            setlistofRestaurants(restaurants);
            setFilteredRes(restaurants);
        }
    }

  if (!listofRestaurants || listofRestaurants.length === 0) {
  return <Shimmer />;
}


    return(
        <div className="body">  

            <div className="filter">

          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}></input>

          <button onClick={()=>{
            const searched=listofRestaurants.filter((res)=>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRes(searched);

            
          }}>search</button>

                <button className="filter-btn" 
                onClick={()=>{
                    // listofRestaurants=listofRestaurants.filter((res)=>{
                    //     return res.info.avgRating>4.5;  
                    // }) ;
                    // console.log(listofRestaurants) ;
                    
                   let filtered=listofRestaurants.filter((res)=>res.info.avgRating>4.5);
                   setlistofRestaurants(filtered);

                }

                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                filteredRes?.map((restaurant)=>(
                    <Rescard key={restaurant?.info?.id} resData={restaurant}/>
                ))
               
                }
            </div>
        </div>
    )
}


export default Body;