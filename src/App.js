import Navbar from './Navbar';
import Home from './Home';


function App() {
  return (
    <div className="App">

      {/* Navbar is imported from Navabar.js  */}
      <Navbar/>

      <div className="content">
        <Home/>
      </div>

    </div>
  );
}

export default App;
