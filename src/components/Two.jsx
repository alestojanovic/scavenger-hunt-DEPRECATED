import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { useLock } from "../utils";
import { PrivateRoutes } from "../PrivateRoutes";
import { MessageTwo, PromptMessage } from "../Messages";

const styles = StyleSheet.create({
  unlockButton: {
    backgroundColor: "transparent",
    color: "transparent",
    border: "none",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "3px",

    ":hover": {
      background: "linear-gradient(#272727, #333)",
    },

    "::selection": { background: "transparent" },
  },
  continueButton: {
    background: "linear-gradient(#eee, #333)",
    borderStyle: "solid",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#61dafb, #333)",
      borderColor: "#61dafb",
    },
  },
});

export const Two = () => {
  const navigate = useNavigate();
  const [unLockNavigation, setUnlockNavigation] = useState(true);

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_THREE}`);
  };

  useLock(`${PromptMessage.DENY}`, unLockNavigation);

  const handleUnlockNavigation = () => {
    setUnlockNavigation(false);
  };

  return (
    <div>
      <button
        className={css(styles.unlockButton)}
        onClick={handleUnlockNavigation}
      >
        {" "}
        {MessageTwo.UNLOCK}{" "}
      </button>

      <h3>{MessageTwo.HINT}</h3>

      <button className={css(styles.continueButton)} onClick={routeChange}>
        {" "}
        {MessageTwo.CONTINUE}{" "}
      </button>
    </div>
  );
};
