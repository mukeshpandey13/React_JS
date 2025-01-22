import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BLogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // data load huada loading... dikhau xa
  const [isPending, setIsPending] = useState(true);

  // error lai browser  ma show garna useState ko use 
  const [error, setError] = useState(null);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {

          // console.log(res) // response ok:true xa ki xina check garna 

          // error show vayo vani if vitra ko message show garxa
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })

        .then((data) => {
          // console.log(data);
          setBlogs(data);

          // setIspending must be false
          setIsPending(false);

          setError(null)
        })
        .catch((err) => {
          // console.log(err.message); // default error message show garxa 

          // error occourred huda message hami maly bana ko show garxa
          setError(err.message);

          //it is false because loading and error sangai show narna
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    
    <div className="home" id="home">
      {/* 51 line of code chai browser ma show garna ho  */}
      {error && <div>{error}</div> }
      {isPending && <div>Lodaing...</div>}

      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home; 
