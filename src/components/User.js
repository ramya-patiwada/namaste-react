import {useState} from "react";

const User=()=>{

    const[count]=useState(0);
    const[count2]=useState(1);
    return(
        <div className="user-card">
            <h1>count={count}</h1>
            <h1>count2={count2}</h1>
            <h1>Name:Ramya</h1>
            <h2>Location:Vizag</h2>
            <h3>Contact:ramyapatiwada@gmail.com</h3>
        </div>
    )
}

export default User;