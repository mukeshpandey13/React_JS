import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {/* Iterate over the `blogs` array using the `map` function to generate JSX for each blog */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>

          {/*#-25 it let you go inside the blogs  */}
          <Link to={`/blog/${blog.id}`}>

            {/* Display the blog title */}
            <h2>{blog.title}</h2>

            {/* Display the author of the blog */}
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
