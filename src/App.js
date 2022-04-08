import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/counter";
import Parent from "./components/validating-props/parent";
import UseContextTutorial from "./components/Hooks/useContext/useContext";

function App() {
  return (
    <div className="App">
      {/* <Parent></Parent>
      <Counter></Counter> */}
      <UseContextTutorial></UseContextTutorial>
    </div>
  );
}

export default App;
