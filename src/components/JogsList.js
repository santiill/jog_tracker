import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import jogIcon from "./imgs/icon.svg";
import addIcon from "./imgs/add.svg";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";

const JogsList = () => {
  const [jogs, setJogs] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios("https://jogtracker.herokuapp.com/api/v1/data/sync", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      console.log("jogs: ", res.data.response);
      setJogs(res.data.response.jogs);
    });
  }, []);
  const navigate = useNavigate();
  const addJog = () => {
    navigate("/add");
  };
  return (
    <div>
      <Header />
      <Filter />
      <div className="jog_list_cont">
        {jogs.map((jog) => {
          return (
            <div className="jog_cont" key={jog.id}>
              <img className="jog_icon" src={jogIcon} />
              <ul className="jog_desc">
                <li className="item">{jog.date}</li>
                <li className="item">
                  <span className="name">Speed </span>
                  {jog.user_id}
                </li>
                <li className="item">
                  <span className="name">Distance </span>
                  {jog.distance}
                </li>
                <li className="item">
                  <span className="name">Time </span>
                  {jog.time}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <img onClick={addJog} className="addIcon" src={addIcon} />
    </div>
  );
};

export default JogsList;
