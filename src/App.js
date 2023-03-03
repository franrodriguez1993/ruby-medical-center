import "./App.css";
import Navbar from "./components/Accesories/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
