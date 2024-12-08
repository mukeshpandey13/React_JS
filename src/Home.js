import React from "react";
import { useState,useEffect } from "react"; // Import the useState hook to manage state in a functional component
import BlogList from "./BLogList";

const Home = () => {
  // Initialize the `blogs` state with an array of blog objects using the `useState` hook
  //blogs is an array that contains multiple objects
  const [blogs, setBlogs] = useState([
    {
      // we use object
      title: "My new website", // Title of the blog
      body: "lorem ipsum...", // Placeholder content
      author: "Mukesh", // Name of the blog author
      id: "1", // Unique ID for each blog (important for mapping)
    },
    {
      title: "Welcome party",
      body: "lorem ipsum...",
      author: "Marcus",
      id: "2",
    },
    {
      title: "Web dev tips",
      body: "lorem ipsum...",
      author: "Harry",
      id: "3",
    },
  ]);

//   btn function to delete blogs 
  const btnHandler = (id) => {
    const newblogs = blogs.filter((blog) => blog.id !== id); // Filter out the blog with the matching id
    setBlogs(newblogs); // Update the state with the filtered blogs
  };

  const [name,setName]= useState("Marcus");

  // useEffect
   useEffect(() => {
    console.log('use effect run')
    console.log(name)
  },[name]);

  return (
    <div className="home" id="home">
      <BlogList blogs={blogs} title="All blogs" btnHandler={btnHandler} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author == "Mukesh")}
        title="Mukesh blogs"
      /> */}

      <h3>{name}</h3>
      <button onClick={()=>setName("Mukesh pandey")}>Change Name</button>
    </div>
  );
};

export default Home; // Export the `Home` component to use in other parts of the application
