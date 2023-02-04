import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <img
      src="./btnsalir.png"
      width="35px"
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
};

export default LogoutButton;
