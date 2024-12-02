import React from 'react'; 
import { useState } from 'react'; // Import the useState hook

const Home = () => {
    // Declare a state variable `name` with initial value 'Mukesh'
    // `setName` is the function used to update the `name` state
    const [name, setName] = useState('ram krishna');

    // we can use use state in array, object
    const[age,setAge] = useState(28);

    // Function to handle button click
    const handleClick = () => {
        // Update the `name` state to 'lord krishna'
        setName('Mukesh pandey');

        setAge(26)
    };


    return (
        <div className="home" id="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p> {/* Display the name */}
            <button onClick={handleClick}>click me</button>

        </div>

    );
}

export default Home;