import React from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { PrivateRoutes } from "../PrivateRoutes";
import { MessageOne } from "../Messages";

const styles = StyleSheet.create({
  timeCounter: {
    fontSize: "100px",
    color: "#61dafb",
  },

  iconStyle: {
    color: "#61dafb",
  },

  oneButton: {
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
          className={css(styles.iconStyle)}
        />
      </p>
      {enableButton ? (
        <button className={css(styles.oneButton)} onClick={handleEnable}>
          {MessageOne.BUTTON}
        </button>
      ) : (
        <button className={css(styles.oneButton)} onClick={routeChange}>
          {MessageOne.BUTTON}
        </button>
      )}
    </div>
  );
};

export default One;
