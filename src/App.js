import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/counter";
import Parent from "./components/validating-props/parent";

function App() {
  return (
    <div className="App">
      <Parent></Parent>
      <Counter></Counter>
    </div>
  );
}

export default App;
