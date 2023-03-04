import "./App.css";
import Navbar from "./components/Accesories/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Accesories/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
