import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import loginLogo from "./imgs/bear-face.svg";

const Login = () => {
  const login = () => {
    axios
      .post("https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin", {
        uuid: "hello",
      })
      .then((res) => {
        console.log("token: ", res.data.response.access_token);
        localStorage.setItem("token", res.data.response.access_token);
        navigate("/*");
      });
  };
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="login_cont">
        <div>
          <img src={loginLogo} />
        </div>
        <button onClick={login} className="login_button">
          let me in
        </button>
      </div>
    </div>
  );
};

export default Login;
