import Navbar from "./Navbar";
import Home from "./Home";

// React Router v6 imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar is imported from Navbar.js */}
        <Navbar />

        <div className="content">
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />

            {/* #-25  */}
            <Route path="/blog/:id" element={<BlogDetails />} />

            {/* tutorial 32 */}
            {/* So if a user navigates to a path like /randompage that doesn't exist in your app, this route will catch it. */}
            <Route path="*" element={ <NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
