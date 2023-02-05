import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Weather from "./components/Weather/weather";
import Navbar from "./components/Navbar/Navbar";
import Noticias from "./components/Noticias/Noticias";
import LoginButton from "./views/inicio-session/InicioSesion";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Navbar />
          <Noticias />
          <Weather />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
