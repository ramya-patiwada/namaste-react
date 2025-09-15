import { LOGO_URL } from "../utils/constants";

const Header=()=>{
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
            </ul>
            </div>
        </div>
    )
}

export default Header; 