import { getDocs, collection, query, where, orderBy, deleteDoc ,doc} from "firebase/firestore";
import { db, auth } from "./firebaseConfig";
import { closeeu, smile, thumb, teeth, heart } from "./assets/image";
import React, { useEffect, useState } from 'react';
const Fetch = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null); // State to store user data

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user); // Update user state when authentication state changes
        });

        return () => unsubscribe(); // Cleanup function to unsubscribe from auth state changes
    }, []);
    const fetchPostData = async () => {

      if (!user || !user.uid) return;


      try {
       

        const q = query(collection(db, "usersPost"), where("uid", "==", user.uid),orderBy("timeStempAt","desc"));
        const querySnapshot = await getDocs(q);
        const fetchedPosts = [];
  
        querySnapshot.forEach((doc) => {
          fetchedPosts.push({ id: doc.id, ...doc.data() });
        });
  
        console.log("Fetched Posts:", fetchedPosts); // Log fetched data
        //setPosts(fetchedPosts);
        if (fetchedPosts.length === 0) {
          alert("No posts yet!");
        } else {
          setPosts(fetchedPosts);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        alert("No Post yet!!")
      }
    };
  
    const displayDate = (firebaseDate) => {
      if (!firebaseDate) return ""; // Check if firebaseDate is null or undefined
      const date = firebaseDate.toDate();
      return `${date.getDate()} ${date.toLocaleString("default", {
        month: "short",
      })} ${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
    };
  
    const getMoodImage = (mood) => {
      switch (mood) {
        case 1:
          return closeeu;
        case 2:
          return smile;
        case 3:
          return thumb;
        case 4:
          return teeth;
        case 5:
          return heart;
        default:
          return null; // Return null or default image if mood value is not recognized
      }
    };


    const deletePost = async (postId)=>{
      try {
        await deleteDoc(doc(db, "usersPost", postId));
        console.log('Deleted post with ID:', postId);

        // Remove the deleted post from the posts state
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    } catch (error) {
        console.error('Error deleting post:', error);
    }
    }
  
    return (
      <div>
        <div className="flex justify-center items-center">
          <button
            className="bg-black w-60 h-auto p-2 m-1 border black text-white rounded text-nowrap"
            onClick={fetchPostData}
          >
            See Post
          </button>
        </div>
  
        <div className="posts-section m-2">
          {posts.map((post) => (
            <div className="post flex flex-col gap-2 m-2 p-2 border border-black bg-cyan-200 rounded-lg shadow-lg" key={post.id} >
              <div className="header">
                <h3 className="font-mono">{displayDate(post.timeStempAt)}</h3>
               <span> <img src={getMoodImage(post.mood)} alt="no image"  className="w-8"/></span>
                <p className="font-serif mt-1">{post.body}</p>
              </div>
            

              <div><button onClick={()=>deletePost(post.id)} className="w-28 p-2 m-1 bg-red-300 font-serif rounded font-semibold"> Delete</button></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Fetch;
