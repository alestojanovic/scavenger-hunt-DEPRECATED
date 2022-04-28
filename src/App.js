import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyTimer from "./MyTimer";
import { One } from "./One";
import { Two } from "./Two";
import { PrivateRoutes } from "./PrivateRoutes";
import "./App.css";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path={PrivateRoutes.PARAM_THREE}
            element={<MyTimer expiryTimestamp={time} />}
          />
          <Route path={PrivateRoutes.PARAM_ONE} element={<One />} />
          <Route path={PrivateRoutes.PARAM_TWO} element={<Two />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
