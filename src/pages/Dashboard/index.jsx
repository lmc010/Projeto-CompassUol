import React from "react";
import "./style.css";
import compasslogodash from "../../../src/img/logoUol3.png";
import logocompassuol from "../../../src/img/logoUol2.png";
import { BsArrowLeftSquare } from "react-icons/bs";
import Logout from "../../Components/Logout/logout";
import Relogio from "./script";
import { useState, useEffect } from "react";
import axios from "axios";


const Dashboard = () => {
  const [taskissue, setTaskissue] = useState("");
  const [inputselect, setInputselect] = useState("monday");
  const [inputhours, setInputhours] = useState("");
  const [inputtask, setInputtask] = useState ("");
  const [tasks, setTasks] = useState ([])
  const [filterday, setFilterday] = useState ("monday")

  function filterdayofweek (dia){
    catchttask (dia)
    setFilterday(dia)
  }

  const tasksarm = {
    id:Math.random(), tarefas:taskissue ,dia:inputselect, horas:inputhours
  };
   

   function adddash (event){
       
   event.preventDefault();

   const userToken = localStorage.getItem("token");

  axios.post("https://latam-challenge-2.deta.dev/api/v1/events",
   {
   
    description:taskissue,
    dayOfWeek: inputselect.toLocaleLowerCase(),
   },
  {headers:{"Authorization":`Bearer ${userToken}`}})


   
   .then(data=>{catchttask(filterday)}).catch(error=>console.log(error))
   }

   function catchttask (dia){
    const userToken = localStorage.getItem("token");
    axios.get("https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek="+dia,{headers:{"Authorization":`Bearer ${userToken}`}})
    .then(data=>{setTasks(data.data.events)})
    .catch(error=>console.log(error))
   }


  useEffect(()=>{catchttask(filterday)},[inputselect])


  return (
    <main>
      <div>
        <header className="headeruol">
          <div className="black">
            <div className="uollogo">
              <img src={logocompassuol} className="logouolblack"></img>
              <div className="headerlogouol"></div>
            </div>
            <button className="retangulo">
              <p className="weekly">Weekly Planner</p>
              <p className="parametro">
                Use this parametro to organize your daily issues
              </p>
            </button>

            <div className="relogio">
              <Relogio />
            </div>

            <div className="logoutdiv">
              <BsArrowLeftSquare className="arrowlogout" />
              <Logout className="logoutlink" />
            </div>
          </div>
        </header>
        <form onSubmit={adddash} >
          <input
            onChange={(event) => setTaskissue(event.target.value)}
            className="taskissue"
            placeholder="Task or Issue"
            type="text"
          ></input>
          <select
            onChange={(event) => setInputselect(event.target.value)}
            className="select"
          >
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
          <input
            onChange={(event) => setInputhours(event.target.value)}
            className="selecttime"
            placeholder="Digite o horario"
            type="text"
          ></input>
          <button type="submit" className="addcalendar">+ Add to caldendar</button>
          <button type="button" className="deleteall">
            - Delete All
          </button>
        </form>
      </div>


      <div>
        <button onClick={()=>filterdayofweek("monday")} className="monday">Monday</button>
        <button onClick={()=>filterdayofweek("tuesday")} className="tuesday">Tuesday</button>
        <button onClick={()=>filterdayofweek("wednesday")} className="wednesday">Wednesday</button>
        <button onClick={()=>filterdayofweek("thursday")} className="thursday">Thursday</button>
        <button onClick={()=>filterdayofweek("friday")} className="friday">Friday</button>
        <button onClick={()=>filterdayofweek("saturday")} className="saturday">Saturday</button>
        <button onClick={()=>filterdayofweek("sunday")} className="sunday">Sunday</button>
      </div>

      <div>
        {tasks.map((task)=>(
         <>
         <div class="hourscolor">{task.createdAt.substring(11,16)}</div>
         <div class="squarecolor">{task.createdAt.substring(11,16)}</div>
         <div class="barracolor">{task.createdAt.substring(11,16)}</div>
         <div class="taskcolor">{task.description}</div>
         <div class="deletecolor">{task.description}</div>
         <div class="deletewordcolor">{task.description} Delete</div>
         
         </>
        ))}    
      </div>

      <div className="imageuoldash">
        <img src={compasslogodash} className="compassdash"></img>
        <div className="backgrounddash"></div>
        <div></div>
      </div>
      <div></div>
    </main>
    
  )

}

export default Dashboard;
