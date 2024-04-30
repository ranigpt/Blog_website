import React, { useState } from "react"
import { Link } from "react-router-dom";





const Navbaar =()=>{

    // const [isLogin , setIsLogin]= useState(false)
    // function authpage (){
       
    //     window.location.href="./mainyt"
    //     setIsLogin(true);
    // }
    
    // function mainpage(){
    //     signOut(auth).then(()=>{
    //         alert("your are signing Out babes!!")
    //     })
    //     .catch((error)=>{
    //         alert("your cant sign out please check your muu")
    //     })
      
       
    //     setIsLogin(true);
    // }
   
    return(
      
        <div className="flex  bg-blue-300 justify-between border border-black">
          <img src="https://cdn4.vectorstock.com/i/1000x1000/68/18/liking-words-black-icon-concept-vector-29926818.jpg" alt="img" className="w-20 h-20 rounded-full m-1"/>
      <nav>
        <ul className="flex items-center gap-3 m-3 font-sans text-2xl">
        <li className="text-3lx">Home </li>
         
            
            {/* <li>{isLogin? <button onClick={authpage}>LogOut</button>:<button onClick={mainpage}>LogIn</button>}</li> */}
        </ul>
      </nav>
        </div>
    )

}

export default Navbaar;
