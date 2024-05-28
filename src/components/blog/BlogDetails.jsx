import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("BlogDetails");
  });
  function handleBackClick() {
    navigate("/blog");
  }

  return (
    <>
      <div> Blog Details</div>
      <button onClick={handleBackClick}>Back</button>
    </>
  );
};

export default BlogDetails;
