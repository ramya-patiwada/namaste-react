import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

const Header=()=>{
    let [btnNameReact,setBtnNameReact]=useState("login");
    console.log("header render");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
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