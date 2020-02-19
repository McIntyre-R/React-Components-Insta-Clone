//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";
import dataFile from '../../dummy-data';
// import data 

const PostsPage = () => {
  // set up state for your data
    

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      dataFile.map(data => {
        return(
          <Post post = {data}/>
        )
      })
      }
      

    </div>
  );
};

export default PostsPage;

