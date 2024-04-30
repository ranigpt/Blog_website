import React, { useState } from "react";
import { useState,useEffect } from "react";
import {auth} from "./firebaseConfig"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { toast } from "react-toastify";
<ToastContainer position="top-right" theme="dark"/>








const InputBox =()=>{

    const [email , setEmail]=useState("")
    const[password , setPassword] = useState("")
    


    
    // onAuthStateChanged(auth,(user)=>{
    //     if(user){
    //         const uid = user.uid;
    //         console.log(uid);
    //     }else{
    //         console.log("user is sign Out");
    //         // window.location.href="/"
    //     }
    // })
    

      const signinWithEmail = ()=>{
   

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log("done login");
        alert("signIn")
        mainpage();
        toast.success(`you are logged in Welcome`);
        
       
     }).catch((error)=>{
        alert("user not found")
         const errorCode = error.code;
         console.log(errorCode);
         console.log("error accourd")
         const errorMessage = error.message;    
         console.log(errorMessage);

    })
}


function mainpage (){
    window.location.href="./mainyt";
}

function mainOut(){
    window.location.href="/"
}

const CreacteAccount =()=>{
    
    // const email = document.getElementById("email").value;
    // const password = document.getElementById("pass").value;
    
  
     createUserWithEmailAndPassword(auth,email,password)
     .then((userCredential)=>{
        
        alert("account Created successfully!!!!");
        console.log("done");
        mainpage();
       
     }).catch((error)=>{
        
         const errorCode = error.code;
         console.log(errorCode);
         console.log("error accourd")

         const errorMessage = error.message;    
         console.log(errorMessage);

     });
}


// console.log(auth);


    return (

        <>
        
        
        <input type="email" name="email" value={email} id="email" placeholder="Email....." className="p-2 m-1 border border-black rounded-md shadow-md hover:bg-blue-100 font-bold" onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        

        
        <input type="password" name="password" value={password} id="pass" placeholder="Password....."
        className="p-2 m-1 border border-black rounded-md shadow-md hover:bg-blue-100 font-bold"
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
        
        
        />
        

       


        <button className="cursor-pointer w-52 h-14 " onClick={signinWithEmail}> 
    <h1 className="w-full bg-blue-400 text-white font-semibold  border border-blue-500 rounded-md m-1 p-2">Log in</h1>
    </button>



    <button className="cursor-pointer shadow-md  rounded-md border border-black hover:border-blue-400 focus:bg-blue-200 m-1 p-2" onClick={CreacteAccount}> 
   <h1>Create Account</h1>
    </button>

        </>
    )
}

export default InputBox;