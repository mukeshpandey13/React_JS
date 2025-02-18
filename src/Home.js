import React from "react";
import BlogList from "./BLogList";
import useFetch from "./useFetch";

const Home = () => {
  // : symbol lay data ra blogs autai ho vanxa
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home" id="home">
      {error && <div>{error}</div>}
      {isPending && <div>Lodaing...</div>}

      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
