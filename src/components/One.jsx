import React from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { useUnlock } from "../utils";
import { PrivateRoutes } from "../PrivateRoutes";
import { MessageOne, PromptMessage } from "../Messages";

const styles = StyleSheet.create({
  timeCounter: {
    fontSize: "100px",
    color: "#61dafb",
  },

  questionIcon: {
    color: "#61dafb",
  },

  redButton: {
    background: "linear-gradient(#eee, #333)",
    borderStyle: "solid",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#ff0000, #333)",
      borderColor: "#ff0000",
    },
  },

  greenButton: {
    background: "linear-gradient(#eee, #333)",
    borderStyle: "solid",
    borderRadius: "9px",
    cursor: "pointer",
    padding: "8px",
    color: "white",
    ":hover": {
      background: "linear-gradient(#adff2f, #333)",
      borderColor: "#adff2f",
    },
  },
});

const Completionist = () => <span>{MessageOne.START}</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const getLocalStorageValue = (s) => localStorage.getItem(s);

const One = () => {
  const [data, setData] = useState(
    { date: Date.now(), delay: 86400000 } //Milliseconds
  );
  const wantedDelay = 86400000; //Milliseconds
  const [enableButton, setEnable] = React.useState(true);
  const navigate = useNavigate();

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_TWO}`);
  };

  const handleEnable = () => {
    setEnable(false);
  };
  useUnlock(`${PromptMessage.PASS}`, routeChange);

  useEffect(() => {
    const savedDate = getLocalStorageValue("end_date");
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      if (delta > wantedDelay) {
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);

  return (
    <div>
      <div>
        <h1>{MessageOne.TITLE}</h1>
      </div>
      <span className={css(styles.timeCounter)}>
        <Countdown
          date={data.date + data.delay}
          renderer={renderer}
          onStart={(delta) => {
            if (localStorage.getItem("end_date") == null)
              localStorage.setItem(
                "end_date",
                JSON.stringify(data.date + data.delay)
              );
          }}
          onComplete={() => {
            if (localStorage.getItem("end_date") != null)
              localStorage.removeItem("end_date");
          }}
        />
      </span>
      <p>
        {MessageOne.HINT}
        <BsFillPatchQuestionFill
          onClick={handleEnable}
          className={css(styles.questionIcon)}
        />
      </p>
      {enableButton ? (
        <button className={css(styles.redButton)} onClick={handleEnable}>
          {MessageOne.BUTTON}
        </button>
      ) : (
        <button className={css(styles.greenButton)} onClick={routeChange}>
          {MessageOne.BUTTON}
        </button>
      )}
    </div>
  );
};

export default One;
