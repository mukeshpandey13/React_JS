import Navbar from "./Navbar";
import Home from "./Home";

// React Router v6 imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App =()=> {
  return (
    <Router>
      <div className="App">
        {/* Navbar is imported from Navbar.js */}
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
