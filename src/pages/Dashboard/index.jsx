import React from "react";
import "./style.css";
import compasslogodash from "../../../src/img/logoUol3.png";
import logocompassuol from "../../../src/img/logoUol2.png"
import { Link } from 'react-router-dom'
import Logout from "../../Components/Logout/logout";


const Dashboard =() => {
    return(
        <main>
            <div>
                <header className="headeruol">
                    <container className="black">
                    <div className="uollogo">
                    <img src={logocompassuol} className="logouolblack"></img>
                    <div className="headerlogouol"></div>
    
                    </div>
                    <button className="retangulo"><p className="weekly" >Weekly Planner</p>
                    <p className="parametro">Use this parametro to organize your daily issues</p></button>
                    <Logout/>
                
                    </container>
                </header>
                <div>
                    <input className='taskissue' placeholder='Task or Issue' type="text"></input>
                    <select class="select">
                       <option>Monday</option>
                       <option>Tuesday</option>
                       <option>Wednesday</option>
                       <option>Thursday</option>
                       <option>Friday</option>
                       <option>Saturday</option>
                       <option>Sunday</option>
                    </select>
                    <input  className='time' placeholder='01h32m' type="text"></input>
                    <button className="addcalendar">+ Add to caldendar</button>
                    <button className="deleteall">- Delete All</button>
                </div>
            </div>

            <div>
                <button>Monday</button>
                <button>Tuesday</button>
                <button>Wednesday</button>
                <button>Thursday</button>
                <button>Friday</button>
                <button>Monday</button>
                <button>Monday</button>
            </div>

            
            <div className="imageuoldash">
                <img src={compasslogodash} className="compassdash"></img>
                <div className="backgrounddash"></div>
              <div></div>
            </div>
            <div>
            </div>

        </main>

    )
}


export default Dashboard;