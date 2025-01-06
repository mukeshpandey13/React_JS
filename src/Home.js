import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BLogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // useEffect
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        // console.log(data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home" id="home">
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home; // Export the `Home` component to use in other parts of the application
