
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


import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
//import Grocery from "./components/Grocery.js";

 
const Grocery=lazy(()=>import("./components/Grocery.js"));


const AppLayOut=()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const Approuter=createBrowserRouter(
    [
        {
            path:"/",
            element:<AppLayOut/>,
            children:[
                        {
                            path:"/",
                            element:<Body/>
                        },
                         {
                            path:"/about",
                            element:<About/>
                        },
                         {
                            path:"/contact",
                            element:<Contact/>
                         },
                         {
                            path:"/grocery",
                            element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
                         }
                         ,
                         {
                            path:"/restaurants/:resId",
                            element:<RestaurantMenu/>
                         }
            ],
            errorElement:<Error/>
        },
       
    ]
)



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter}/>);
