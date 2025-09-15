import Rescard from "./Rescard.js";
import Mock_Data from "../utils/Mock_Data.js";

const Body=()=>{
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {
                Mock_Data.map((restaurant)=>(
                    <Rescard key={restaurant.info.id} resData={restaurant}/>
                ))
               
                }
            </div>
        </div>
    )
}


export default Body;