import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
    </div>
  );
}

function Nav() {
  return (
    <div className="top-bar">
      <div className="logo">
        <h2>
          <span className="carrot">{"<"}</span>Mic Adams
          <span className="carrot">{"/>"}</span>
        </h2>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <a href="#home">
              Home <span className="dull">{"/>"}</span>
            </a>
          </li>
          <span className="spacing" />
          <li>
            <a href="#projects">
              Projects <span className="dull">{"/>"}</span>
            </a>
          </li>
          <span className="spacing" />
          <li>
            <a href="#about">
              About <span className="dull">{"/>"}</span>
            </a>
          </li>
          <span className="spacing" />
          <li>
            <a href="#contact">
              Contact <span className="dull">{"/>"}</span>{" "}
            </a>
          </li>
          <span className="spacing" />
        </ul>
      </div>
    </div>
  );
}

function Body() {
  return <div className="body"></div>;
}

export default App;
