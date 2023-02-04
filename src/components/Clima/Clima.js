import React, { useEffect, useState } from "react";
import axios from "axios";
import "./clima.css";

const Clima = () => {
  const [weather, setweather] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://v1.nocodeapi.com/jhonnierdlc/ow/FEqOQgTeYyGRBBEh/oneCallAPI?lat=3.43722&lon=-76.5225"
      )
      .then((response) => setweather(response.data.message.weather));
  }, []);
  console.log(weather);
  return (
    <>
      <h4>Clima</h4>
      {weather.length === 0 ? <p>loading...</p> : <div></div>}
    </>
  );
};
export default Clima;
