import "./App.css";
import Clock from "./Clock.js";
import Forms from "./Forms.js";

// npm run deploy ; deploy to github pages

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Forms />
        <footer>
          created by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/d5vis/ac"
          >
            d5vis
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
