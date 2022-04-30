import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import One from "./components/One";
import { Two } from "./components/Two";
import Three from "./components/Three";
import { ToastContainer } from "react-toastify";
import { PrivateRoutes } from "./PrivateRoutes";
import "react-toastify/dist/ReactToastify.css";

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

      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
