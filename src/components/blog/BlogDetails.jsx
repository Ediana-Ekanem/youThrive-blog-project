import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Error occurred while fetching data:", error);
      });
  }, [id]);

  function handleBackClick() {
    navigate("/blog");
  }

  return (
    <>
      <div className=" bg-slate-500 pt-24 cursor-pointer">
        <FaArrowLeft
          onClick={handleBackClick}
          color="white"
          size={28}
          className="ms-3 "
        />

        <div className="flex justify-center items-center h-screen  ">
          <div className="w-[600px] shadow-lg rounded-lg p-32 bg-white">
            {post ? (
              <div>
                <h1 className="text-3xl text-center underline mb-3">
                  {post.title}
                </h1>
                <p className="text-md">{post.body}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
