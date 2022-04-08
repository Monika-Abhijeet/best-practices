import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter/counter";
import Parent from "./components/validating-props/parent";
import UseContextTutorial from "./components/Hooks/useContext/useContext";
import HttpRequests from "./components/httpRequests/httpRequests";
import GetRequest from "./components/httpRequests/getRequest";

function App() {
  return (
    <div className="App">
      {/* <Parent></Parent>
      <Counter></Counter> */}
      <UseContextTutorial></UseContextTutorial>
      {/* <HttpRequests></HttpRequests> */}
      <GetRequest></GetRequest>
    </div>
  );
}

export default App;
