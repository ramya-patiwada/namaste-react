
// const heading=React.createElement("h1",{},"HELLO WORLD USING REACT");
/* <div id="parent">
    <div id="child">
        <h1>1st heading</h1>
        <h2>sibling</h2>
    </div>
</div> */

// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},[React.createElement("h1",{},"1st heading"),
//     React.createElement("h1",{},"i am a sibling") 
//     ]));

 //React Element
// const Title=()=>(
//     <h1 id="head">
//     Hello world using JSX
//     </h1>
// );

///React Functional Component
// const HeadingComponent=()=>(
//      <div id="container">
//         {Title()}
//         {100+200}
//     <h1>Functional Component</h1>
//     </div>
// );
import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="/home/ramya/Desktop/Namasthe_React/logo.avif"></img>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li className="cart"><img src="/home/ramya/Desktop/Namasthe_React/cart.jpg"></img></li>
            </ul>
            </div>
        </div>
    )
}

const AppLayOut=()=>{
    return(
        <div className="app">
            <Header/>
        </div>
    )
}





const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut/>);
