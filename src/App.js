import Navbar from "./Navbar";
import Home from "./Home";

// React Router v6 imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";

const App =()=> {
  return (
    <Router>
      <div className="App">
        {/* Navbar is imported from Navbar.js */}
        <Navbar />

        <div className="content">
          <Routes>
            
            <Route   path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
