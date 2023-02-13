import React from "react";
import { useState } from "react";
import  axios from 'axios'
import "../App.css"
const Tempapp = () => {
  
  let [city,setCity]=useState("")
  const[data,setData]=useState({})
  const [temp,setTemp]=useState(0);
  const [min,setMin]=useState(0);
  const [max,setMax]=useState(0);
  const [desc,setDesc]=useState("")
  const [bg,setbg]=useState("default")
  const id="defaultbg"
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a606e1594edee059e2449c744053471c`

  const location=(event)=>{
    console.log(event);

console.log(city);
if(event.key=='Enter'){
 
axios.get(url).then((response)=>{
    setData(response.data)
    console.log(response.data);
    setTemp(Math.round((response.data.main.temp)-273.15));
    setMax(Math.round((response.data.main.temp_max)-273.15))
    setMin(Math.round((response.data.main.temp_min)-273.15));
    setDesc(response.data.weather[0].description);

  setCity('')
if(response.data.weather[0].description=="haze"){
  setbg("haze");
}
if(response.data.weather[0].description.includes("cloud")==true){
  setbg("cloud");
}
if(response.data.weather[0].description.includes("rain")==true || response.data.weather[0].description.includes("drizzle")==true & response.data.weather[0].description.includes("thunderstorm")==false){
  setbg("rain");
}
if(response.data.weather[0].description.includes("clear sky")==true){
  setbg("clear-sky");
}
if(response.data.weather[0].description.includes("cold")==true){
  setbg("cold");
}
if(response.data.weather[0].description.includes("snow")==true){
  setbg("snow");
 
}
if(response.data.weather[0].description.includes("fog")==true){
  setbg("fog");
}
if(response.data.weather[0].description.includes("mist")==true){
  setbg("mist");
}
if(response.data.weather[0].description.includes("sun")==true){
  setbg("sunny");
}
if(response.data.weather[0].description.includes("sandy")==true){
  setbg("sandy");
}
if(response.data.weather[0].description.includes("squalls")==true){
  setbg("squalls");
}
if(response.data.weather[0].description.includes("volacano")==true){
  setbg("volcanic-ash");
}
if(response.data.weather[0].description.includes("tornado")==true){
  setbg("tornado");
}
})
}
  }
    return (
    <div className={bg} id={id}> 
    <div className="box">
    <div className='inputData'>
    <input className="input-city"
    type="text"
    placeholder="Enter your City"
     onChange={ event => setCity(event.target.value)}    
     value={city}
     onKeyPress={location}
     />
      </div>
    </div>
    <div className="info">
        <h2 className="location"> 
        <i className="fas fa-street-view"></i> {data.name}
        </h2>
        <h1 className="temp">
        {temp}° C
        </h1>
<h3 className="min-max"> Min :{min}° C | Max: {max}° C</h3>
    <h4>{desc}</h4>
    </div>
    </div>
  )
}

export default Tempapp
