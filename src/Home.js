import React from 'react'; 
import { useState } from 'react'; // Import the useState hook to manage state in a functional component

const Home = () => {
    // Initialize the `blogs` state with an array of blog objects using the `useState` hook
    const [blogs, setBlogs] = useState([
        { 
            // we use object
            title: 'My new website', // Title of the blog
            body: 'lorem ipsum...',  // Placeholder content
            author: 'Mukesh',        // Name of the blog author
            id: '1'                  // Unique ID for each blog (important for mapping)
        },
        { 
            title: 'Welcome party', 
            body: 'lorem ipsum...', 
            author: 'Marcus', 
            id: '2' 
        },
        { 
            title: 'Web dev tips', 
            body: 'lorem ipsum...', 
            author: 'Harry', 
            id: '3' 
        }
    ]);

    return (
        <div className="home" id="home">
            {/* Iterate over the `blogs` array using the `map` function to generate JSX for each blog */}
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    {/* Display the blog title */}
                    <h2>{blog.title}</h2>
                    {/* Display the author of the blog */}
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default Home; // Export the `Home` component to use in other parts of the application
