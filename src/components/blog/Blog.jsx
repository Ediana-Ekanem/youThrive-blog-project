import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // Fetching data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log("Error occured while fetching data:", error);
      });
  }, []);

  const handleBlogDetails = () => {
    console.log("yes");
    navigate("/blogOne");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-10 py-40 px-40">
      {posts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          body={post.body}
          handleClick={handleBlogDetails}
        />
      ))}
    </div>
  );
};

export default Blog;
