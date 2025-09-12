
// const heading=React.createElement("h1",{},"HELLO WORLD USING REACT");
/* <div id="parent">
    <div id="child">
        <h1>1st heading</h1>
        <h2>sibling</h2>
    </div>
</div> */
import React from "react";
import ReactDOM from "react-dom/client";

// const parent=React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},[React.createElement("h1",{},"1st heading"),
//     React.createElement("h1",{},"i am a sibling") 
//     ]));

const heading=(<h1 id="head">
    Hello world using JSX
    </h1>);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
