import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import One from "./components/One";
import { Two } from "./components/Two";
import { Three } from "./components/Three";
import { PrivateRoutes } from "./PrivateRoutes";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={PrivateRoutes.PARAM_ONE} element={<One />} />
          <Route path={PrivateRoutes.PARAM_TWO} element={<Two />} />
          <Route path={PrivateRoutes.PARAM_THREE} element={<Three />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
