import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import cancelIcon from "./imgs/cancel.svg";

const AddJog = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      distance: "",
      time: "",
      date: "",
    },
    onSubmit: (data) => {
      console.log("data: ", data);
      axios
        .post("https://jogtracker.herokuapp.com/api/v1/data/jog", data, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          console.log("data_res: ", res);
          navigate("/list");
        });
    },
  });
  return (
    <>
      <Header />
      <form onSubmit={formik.handleSubmit} className="add_cont">
        <img
          onClick={() => navigate("/list")}
          className="cancel_icon"
          src={cancelIcon}
        />
        <div className="inpt">
          <div className="input_cont">
            <label className="label">Date</label>
            <label className="label">Time</label>
            <label className="label">Distance</label>
          </div>
          <div className="input_cont">
            <input
              name="date"
              onChange={formik.handleChange}
              className="input"
            />
            <input
              name="time"
              onChange={formik.handleChange}
              className="input"
            />
            <input
              name="distance"
              onChange={formik.handleChange}
              className="input"
            />
          </div>
        </div>
        <button className="add_button">Save</button>
      </form>
    </>
  );
};

export default AddJog;
