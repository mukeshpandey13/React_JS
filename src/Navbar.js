const Navbar = () => {
    
    return ( 
        <nav className="Navbar">
            <h1>My Blog</h1>
            <div className="links"></div>
            <a href="/">Home</a>
            <a href="/">New Blog</a>
        </nav>
     );
}
  
// using export we can use navbar in other page 
export default Navbar;