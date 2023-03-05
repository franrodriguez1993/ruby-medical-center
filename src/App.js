import "./App.css";
import Navbar from "./components/Accesories/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Accesories/Footer";
import UpButton from "./components/Accesories/UpButton";
import { useEffect, useState } from "react";
function App() {
  const [showButton, SetShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? SetShowButton(true) : SetShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);
  return (
    <div className="App">
      <Navbar />

      <div className="outlet">
        <Outlet />
      </div>

      {showButton && (
        <div className={`scrollToTop`}>
          <UpButton />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
