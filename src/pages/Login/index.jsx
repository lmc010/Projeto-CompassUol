import React from "react";
import "./style.css";
import Input from "../../Components/Inputs/Input";
import compass from "../../../src/img/logoUol.png";
import Button from "../../Components/Button/button";
import Cadastrar from "../../Components/Account/account";
import { useNavgate, Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="container">
      <div className="titles">
        <div className="center">
          <h1 className="title">Welcome,</h1>
          <p className="subtitle">
            To continue browsing safely, log in to the network.
          </p>
          <Input />
        </div>
      </div>
      <div className="container-image">
        <img src={compass} className="logocompass"></img>
        <div className="backgrounduol"></div>
      </div>
      <Cadastrar/>
      <Button/>
    </main>
  );
};

export default Login;
