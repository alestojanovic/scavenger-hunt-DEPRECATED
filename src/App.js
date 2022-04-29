import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import One from "./components/One";
import { Two } from "./components/Two";
import { Three } from "./components/Three";
import { PrivateRoutes } from "./PrivateRoutes";

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#282c34",
    textAlign: "center",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
});

const App = () => {
  return (
    <div className={css(styles.app)}>
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
