import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BLogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  
  // data load huada loading... dikhau xa 
  const [isPending, setIsPending] = useState(true);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })

        .then((data) => {
          // console.log(data);
          setBlogs(data);

          // setIspending must be false 
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home" id="home">
      {isPending && <div>Lodaing...</div>}

      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home; // Export the `Home` component to use in other parts of the application
