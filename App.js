import saketh from './saketh.jpg';

function App() {
  return (
    <div>
      <header>
        <h1>Hello World</h1>
        <p>Name: M.Saketh<br></br>
        Ht.no:2211CS010387<br></br>
        Group:7A</p>
        <hr></hr>
        <img src={saketh} alt="saketh" />
        <h2>About Myself</h2>
        <p>I am Saketh from group 7A,<br></br>
          I am 18 years old,<br></br>
          I like reading books,playing sports etc...
        </p>
      
      </header>
    </div>
  );
}

export default App;
