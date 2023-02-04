import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./inicioSesion.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div
        className="fondoInicio"
        style={{ backgroundImage: `url(../fondonews.jpg)` }}
      >
        <div className="cont-Inicio">
          <br></br>
          <h1>Portal de Noticias</h1>
          <h5>Inicio de sesion para usuarios</h5>
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginButton;
