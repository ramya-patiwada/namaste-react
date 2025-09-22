import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{
    constructor(props){
        super(props);
    

    console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent component did mount");
    }
    render(){
        console.log("parent render");
         return(
        <div>
            <h1>About Us</h1>
            <h2>This is Ramya Patiwada </h2>
            <UserClass name={"ramya"} location={"vijayawada"}/>
           
        </div>
    )
    }
}


export default About;