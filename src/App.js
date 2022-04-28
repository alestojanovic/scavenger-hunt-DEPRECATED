import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Three from "./components/Three";
import { One } from "./components/One";
import { Two } from "./components/Two";
import { PrivateRoutes } from "./PrivateRoutes";
import "./App.css";

const App = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 86400);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={PrivateRoutes.PARAM_THREE} element={<Three />} />
          <Route path={PrivateRoutes.PARAM_ONE} element={<One />} />
          <Route path={PrivateRoutes.PARAM_TWO} element={<Two />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
