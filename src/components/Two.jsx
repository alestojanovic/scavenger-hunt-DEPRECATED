import React from "react";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { PrivateRoutes } from "../PrivateRoutes";
import { MessageTwo } from "../Messages";

const styles = StyleSheet.create({
  twoButton: {
    backgroundColor: "transparent",
    color: "transparent",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "3px",

    ":hover": {
      backgroundColor: "#272727",
    },

    "::selection": { background: "transparent" },
  },
});

export const Two = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_THREE}`);
  };
  return (
    <div>
      <h3>{MessageTwo.HINT}</h3>
      <button className={css(styles.twoButton)} onClick={routeChange}>
        {" "}
        {MessageTwo.PEP}{" "}
      </button>
    </div>
  );
};
