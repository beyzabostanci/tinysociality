import React from 'react'
import Listing from '../Listing/Listing'
import { useEffect, useState } from "react";
const Posts = () => {

     const [posts, setPosts] = useState(null)

    useEffect(() => {
      fetch('http://localhost:8000/posts_by_date')
        .then(res => {

          return res.json();

        })
        .then(data => {
          const myposts = Object.values(data['2021-06-17']).concat(Object.values(data['2021-07-01']));
            setPosts(myposts);
        })
    }, [])




    return (
        <div className="home">
       {posts&& <Listing posts={posts}/>}
        </div>
      );
    }

export default Posts