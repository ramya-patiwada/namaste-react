import{useEffect,useState} from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu=(resId)=>{
    useEffect(()=>{
        fetchData();
    },[])

    const[resInfo,setresInfo]=useState(null);

    const fetchData=async ()=>{
        const data=await fetch(MENU_API+resId);
        const json=await data.json();

        setresInfo(json);

    }
    return resInfo;
}

export default useRestaurantMenu;