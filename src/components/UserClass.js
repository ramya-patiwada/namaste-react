import React from "react";
class UserClass extends React.Component{
    constructor(props){
            super(props);
            
            this.state={
                // count:0,
                // count2:1
                userInfo:{
                    name:"dummy",
                    location:"default",
                    // image_ulr:""

                }

            }

            console.log("child constructor");
        }

       async componentDidMount(){
         const data=await fetch("https://api.github.com/users/akshaymarch7");
         const json=await data.json();
         console.log(json);

         this.setState({
            userInfo:json,


         })
            console.log("child Componet did mount");
        }

        componentDidUpdate(){
            console.log("component did upadte");
        }


        componentWillUnmount(){
            console.log("component will unmount");  
        }
    render(){

        console.log("child render");
        const{name,location,avatar_url}=this.state.userInfo;

        // const{name,location}=this.props;
        // const{count,count2}=this.state;
        return (
            <div className="user-card">
                {/* <h1>count={count}</h1>
                <h1>count2={count2}</h1>
                <button onClick={()=>{
                    this.setState(
                        {
                            count:this.state.count+1,
                            count2:this.state.count2+1
                        }
                    )
                }}>Count Increase</button> */}

                <img src={avatar_url}/>
                <h1>Name:{name}</h1>
                <h2>Loaction:{location}</h2>
              
            </div>
        )
    }
}

export default UserClass;