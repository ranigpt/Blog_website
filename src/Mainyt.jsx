import React, { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Posts from "./Posts";
import Fetch from "./Fetch";


function MainPage() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Signing Out!!");
        window.location.href="/"
      })
      .catch((error) => {
        alert("You can't sign out. Please check your setup.");
      });
  };

  return (
    <div className="">
      <button className="bg-blue-300 m-2 p-2 rounded-md border border-blue-700 shadow-lg flex justify-center items-center" onClick={handleSignOut}>
        SignOut
      </button>
      <div>
        <h1 className="flex justify-center items-center text-3xl font-serif font-semibold m-2 p-2">Welcome  !!!!!</h1>
        {/* <img src="https://i.pinimg.com/originals/32/76/24/32762401d6c44f59320a7cecdcf85f6f.gif" alt="tom" className="w-96" /> */}
      </div>
    </div>
  );
}

const Mainyt = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Signing in");
        setUser(currentUser);
        console.log(currentUser);
      } else {
        console.log("User is signed out");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-cream-200" style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/010/839/424/non_2x/aesthetic-minimal-cute-pastel-pink-wallpaper-with-abstract-checkers-checkerboard-decoration-backdrop-illustration-perfect-for-wallpaper-backdrop-postcard-background-banner-vector.jpg')` }}>

      <div className="w-full h-auto" >
      <MainPage />
      </div>
      <div id="profile-img" className="flex  flex-col justify-center items-center m-3 p-2">
        {/* {user && (
            <>
          <img
            id="userElement"
            src={user.photoURL || "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"}
            alt="User Profile"
          />

          {console.log(user.photoURL)}
          <h1>{user.displayName}</h1>
          <h1>{user.email}</h1>
          </>
        )} */}

    {user?(
    
    
     <>
          <img
            id="userElement"
            src={user.photoURL || "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"}
            alt="User Profile"
            className="w-24 h-24 rounded-full border border-black"
          />
   <h1 className="font-serif shadow-sm text-2xl">
      {`Hello friend ${
        user.displayName ? user.displayName : "champ"
      }, How are u?`}
    </h1>
    
    </>)
    
    :(
    
        <>


    
    <h1>{`hello friend`}</h1>

    {/* {user?.photoURL && user?.displayName === null ?(
    
    <>
    <div>
        <input type="text"  value={name} placeholder="Upadte name"/>
        <img src={""} alt="img"/>
        {console.log("accour in sub condttion")}
    </div>
    
    </>):(<>
    <div>
        <img src={user?.photoURL} alt="not here img"/>
        <h1>{user?.displayName}</h1>
        {console.log("accur")}
        
    </div>
    
    
    </>)} */}
    
    </>
    
)}
</div>
<div>
  {/* <Mood/> */}
</div>
      
      <div>
        <Posts/>
      </div>
      
      <div>
        <Fetch/>
      </div>
      
    
    </div>
  );
};

export default Mainyt;
