import { CDN_URL } from "../utils/constants";

const Rescard=(props)=>{
    const {resData}=props;
    const{cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
    return (
        <div className="res-card">
            <div>
                <img  
                className="res-logo"
                src={CDN_URL+cloudinaryImageId
                }>
                </img>
            </div>
            <h2>{name}</h2>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}
export default Rescard;