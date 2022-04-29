import React from "react";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../PrivateRoutes";
import { MessageOne } from "../Messages";

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

  const navigate = useNavigate();
  const [enable, setEnable] = useState(true);

  const handleEnable = () => {
    setEnable(false);
  };

  const routeChange = () => {
    navigate(`${PrivateRoutes.PARAM_TWO}`);
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
      <span className="time-counter">
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
      <p>{"If you manage to use this button it will show you the way"}</p>
      {enable ? (
        <button className="three-button" onClick={handleEnable}>
          {MessageOne.BUTTON}
        </button>
      ) : (
        <button className="three-button" onClick={routeChange}>
          {MessageOne.BUTTON}
        </button>
      )}
    </div>
  );
};

export default One;