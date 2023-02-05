import React, { useEffect, useState } from "react";
import axios from "axios";
import "./weather.css";

const Weather = () => {
  const [weather, setweather] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/clima")
      .then((response) => setweather(response.data));
  }, []);

  return (
    <>
      <h5>
        <strong>Climas de Ciudades Principales</strong>
      </h5>

      <div className="content-table table-responsive">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Temperatura</th>
            </tr>
          </thead>

          <tbody>
            {!weather
              ? "Cargando..."
              : weather.map((weather, index) => {
                  return (
                    <tr>
                      <th scope="row">{weather.id}</th>
                      <td>{weather.ciudad}</td>
                      <td>
                        <strong>{weather.temperatura}</strong>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Weather;
