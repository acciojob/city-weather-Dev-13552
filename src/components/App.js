import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
  const [inputValue, setInputValue] = useState("");
  const [temperature, setTemperature] = useState("")
  const [desc, setDesc] = useSate("")
  const [url, setUrl] = useSate("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

   const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      // Prevent the default form submission behavior if inside a form
      const res = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}`)
      const data = await res.json()
      setTemperature(data.main.temp)
      setDesc(data?.weather?.[0]?.description)
      setUrl(`http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`)
    }
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <input
        type="text"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />

      <div>{temperature}</div>
      <div>{weather_description}</div>
      <img src={url}></img>
    </div>
  );
};

export default App;
