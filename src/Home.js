import React from 'react'; 
import { useState } from 'react'; // Import the useState hook to manage state in a functional component
import BlogList from './BLogList';

const Home = () => {
    // Initialize the `blogs` state with an array of blog objects using the `useState` hook
    //blogs is an array that contains multiple objects
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
           
          <BlogList blogs={blogs} title="All blogs"/>
        </div>
    );
};

export default Home; // Export the `Home` component to use in other parts of the application
