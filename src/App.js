import "./App.css";
import Clock from "./Clock.js";
import Button from "./Button.js";

// dav reminders
// npm run deploy ; auto deploy to github pages

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Button />
      </header>
    </div>
  );
}

export default App;
