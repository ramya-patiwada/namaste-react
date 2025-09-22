import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    let [btnNameReact,setBtnNameReact]=useState("login");
    console.log("header render");

    const onlineStatus=useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
            <ul>
                <li>status:{onlineStatus===true?"✅":"🚫"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About US</Link></li>
                <li><Link to="/contact">Contact US</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>
                    <img className="cart" src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png"></img>
                </li>
                <button className="btn" onClick={
                    ()=>{
                        btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login");
                    }
                }>{btnNameReact}</button>
            </ul>
            </div>
        </div>
    )
}

export default Header; 