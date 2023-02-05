import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import Clima from "./components/Clima/Clima";
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
          <Clima />
          <Noticias />
          
          
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
