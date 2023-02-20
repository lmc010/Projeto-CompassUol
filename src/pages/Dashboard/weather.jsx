import "./style.css";

function Weather(){

return( 
    <div id="weather-data" className="weather" >
      <h2>
        <i class="fa-solid fa-location-dot" className="falsolid"></i>
        <span id="city" className="cidade">Registro</span>
      </h2>
      <p id="temperatura" className="graus" ><span>38</span>&deg;C</p>

    </div>
)
}

export default Weather

