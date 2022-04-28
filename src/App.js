import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyTimer from "./MyTimer";
import { Way } from "./Way";
import "./App.css";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MyTimer expiryTimestamp={time} />} />
          <Route path="/way" element={<Way />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
