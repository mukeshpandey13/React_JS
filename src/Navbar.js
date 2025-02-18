import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>My Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>

        {/* <a href="/">Home</a> */}
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
