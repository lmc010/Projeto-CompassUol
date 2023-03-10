import React from "react";
import "./style.css";
import compass from "../../../src/img/logoUol.png";
import Usernamespace from "../../Components/Inputs/inputregister";
import Retornar from "../../Components/Back/back";
import {useNavigate,Link } from "react-router-dom";

const Cadastro =() => {
    return(
        <main className="container-cad">
            <div className="titles-cad" >
                <div  className="center-cad">
                    <h1 className="title-cad">Welcome,</h1>
                    <p className="subtitle-cad">
                        Please, register to continue
                    </p>
                    <Usernamespace/>
                </div>
            </div>
            <div className="container-image">
              <img src={compass} className="logocompass"></img>
              <div className="backgrounduol"></div>
         </div>
         <Retornar/>
        </main>

   );
};

export default Cadastro;