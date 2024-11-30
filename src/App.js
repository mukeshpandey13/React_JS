import './App.css';

function App() {
  const title = "This is my first web blog"
  const like = 50;
  const link="https://www.google.com";



  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {like} times.</p>

        {/*  we can able to write js code in under {}  */}
        <p>{10}</p>
        <p>{"Hello world"}</p>
        <p>{[1,2,343,45,23]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google site</a>
      </div>
    </div>
  );
}

export default App;
