import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu=()=>{

   useEffect(()=>{
    fetchData()
   },[]);

     const{resId}=useParams();
    

const[resInfo,setresInfo]=useState(null);

   const fetchData=async ()=>{
    const data=await fetch(MENU_API+resId);
    const json=await data.json();
    console.log(json);
    setresInfo(json);
   }

 
   if(resInfo==null){
    <Shimmer/>;
   }


   const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards?.find(
      (c) => c.card?.card?.info
    )?.card?.card?.info || {};


   
//    resInfo?.data?.cards[2]?.card?.card?.info;


    // const{itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card;
    // console.log(itemCards);
    
//     const itemCards =
//   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const regularCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const firstCategory = regularCards.find(c => c?.card?.card?.itemCards);

    const itemCards = firstCategory?.card?.card?.itemCards;

    console.log(itemCards);




    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines}-{costForTwoMessage}</p>
            
        
            <ul>
                <h3>Menu</h3>
                {
                    itemCards?.map(item=>(
                        <li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item.card.info.price/100}</li>
                    ))
                }
            </ul>
        </div>
    )
}


export default RestaurantMenu;






// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
//   const { resId } = useParams(); // restaurant id from URL
//   const [menu, setMenu] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, [resId]);

//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.2873968&lng=83.8267367&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
//       );
//       const json = await data.json();
//       console.log("Restaurant Menu JSON:", json); // ✅ see full response in console
//       setMenu(json.data);
//     } catch (err) {
//       console.error("Error fetching menu:", err);
//     }
//   };

//   // ⏳ Loading state
//   if (!menu) return <h2>Loading Menu...</h2>;

//   // ✅ Restaurant info
//   const { name, cuisines, costForTwoMessage } =
//     menu?.cards[0]?.card?.card?.info || {};

//   // ✅ Menu items
//   const itemCards =
//     menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
//       ?.flatMap((c) => c.card?.card?.itemCards || [])
//       .map((item) => item.card?.info) || [];

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>

//       <h2>Menu</h2>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.id}>
//             {item.name} - ₹{item.price / 100 || item.defaultPrice / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;
