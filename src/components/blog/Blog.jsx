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
        console.log("Error occurred while fetching data:", error);
      });
  }, []);

  const handleBlogDetails = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
      <h2 className="text-center mt-10 font-bold text-2xl pt-20">
        All <span className=" text-violet-700 ">Blogs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-10 py-40 mx-auto justify-items-center max-w-7xl overflow-hidden">
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            body={post.body}
            handleClick={() => handleBlogDetails(post.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
