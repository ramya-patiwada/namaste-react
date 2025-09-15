
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
import Header from "./components/Header.js";
import Body from "./components/Body.js";





const AppLayOut=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut/>);
