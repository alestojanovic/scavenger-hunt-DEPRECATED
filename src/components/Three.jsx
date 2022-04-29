import React from "react";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { PrivateRoutes } from "../PrivateRoutes";
import { MessageThree } from "../Messages";
import logo from "../logo.svg";

const styles = StyleSheet.create({
  threeButton: {
    backgroundColor: "transparent",
    color: "#61dafb",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "3px",

    ":hover": {
      backgroundColor: "#61dafb",
    },
  },

  appLogo: {
    height: "40vmin",
    pointerEvents: "none",
  },

  footer: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "2.5rem",
  },

  footerLink: {
    color: "transparent",
    textDecoration: "none",

    ":hover": {
      color: "#61dafb",
    },
  },
});

export const Three = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_ONE}`);
  };
  return (
    <>
      <div>
        <button className={css(styles.threeButton)} onClick={routeChange}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" /> <br />
          {MessageThree.GIFT}
        </button>
      </div>
      <div className={css(styles.footer)}>
        <a
          className={css(styles.footerLink)}
          href={MessageThree.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
        >
          {MessageThree.GITHUB}
        </a>
      </div>
    </>
  );
};
