import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import btn_salir from "../../img/boton_salir.png"

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <img
      src={btn_salir}
      width="35px"
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
};

export default LogoutButton;
