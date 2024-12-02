import React from 'react';

const Home = () => {
    const handleClick = () =>{
        console.log("your click me");
    }

    const handleClick2 = (name,e)=>{
        console.log('hello'+ name,e.target);
    }
    // using event function 
    const handleClick3 =(e)=>{
        console.log('hello world', e);
    }
    return (
        <div className="home" id="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>click me</button>

{/* we use a anonymous here, we can use event 
  */}
            <button onClick={(e)=>{ handleClick2(' Mukesh',e);}}>Click me again</button>

{/* we use event here  */}
            <button onClick={handleClick3}>Event</button>
        </div>

    );
}

export default Home;