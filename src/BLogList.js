const BlogList = ({blogs,title,btnHandler}) => {

    // use props in bloglist parameter 
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>

              {/* Iterate over the `blogs` array using the `map` function to generate JSX for each blog */}
              {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>

                    {/* Display the blog title */}
                    <h2>{blog.title}</h2>

                    {/* Display the author of the blog */}
                    <p>Written by {blog.author}</p>

                    {/* to delete list  */}
                    <button onClick={()=>btnHandler(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
export default BlogList;