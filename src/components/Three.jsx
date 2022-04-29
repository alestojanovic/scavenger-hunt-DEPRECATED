import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { SiGithub } from "react-icons/si";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { PrivateRoutes } from "../PrivateRoutes";
import { MessageThree } from "../Messages";
import logo from "../logo.svg";

const styles = StyleSheet.create({
  threeButton: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    borderRadius: "80px",
    cursor: "pointer",
    padding: "40px",

    ":hover": {
      background: "linear-gradient(#73fb54,#ea54fb, #fbf054, #ea54fb, #73fb54)",
    },

    "::selection": { background: "transparent" },
  },

  title: {
    color: "#61dafb",
  },

  heartIcon: {
    color: "red",
    marginBottom: "25px",
  },

  appLogo: {
    height: "40vmin",
    pointerEvents: "none",
    "::selection": { background: "transparent" },
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
  const [toggleIcon, setToggleIcon] = useState(true);
  return (
    <>
      <h1 className={css(styles.title)}>{MessageThree.CONGRATS}</h1>

      {toggleIcon ? (
        <AiOutlineHeart
          onClick={() => setToggleIcon(!toggleIcon)}
          size={70}
          className={css(styles.heartIcon)}
        />
      ) : (
        <AiFillHeart
          onClick={() => setToggleIcon(!toggleIcon)}
          size={70}
          className={css(styles.heartIcon)}
        />
      )}
      <div>
        <button className={css(styles.threeButton)} onClick={routeChange}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" /> <br />
          {MessageThree.GIFT}
        </button>
      </div>
      <div>
        <a
          className={css(styles.footerLink)}
          href={MessageThree.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size={70} />
        </a>
      </div>
    </>
  );
};
