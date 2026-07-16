import { useEffect, useState } from "react";
import "../styles/App.css";
import Home from "../pages/Home.jsx";
import Formacion from "../pages/Formacion.jsx";
import Contacto from "../pages/Contacto.jsx";
import Navbar from "../pages/Navbar.jsx";

function App() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1050);
  const goTo = (index) => setCurrent(index);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []); // El array vacío [] asegura que esto solo ocurra al montar (F5)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1050);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar current={current} goTo={goTo} isMobile={isMobile} />

      <div
        style={{
          transition: isMobile ? "none" : "transform 0.6s cubic-bezier(0.77, 0, 0.18, 1)",
          transform: isMobile ? "none" : `translateY(-${current * 100}vh)`,
        }}
      >
        <Home />
        <Formacion />
        <Contacto />
      </div>
    </>
  );
}

export default App;