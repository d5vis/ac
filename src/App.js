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
      </header>
    </div>
  );
}

export default App;
