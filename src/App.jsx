import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Actividades from "./pages/Actividades";
import Clasificar from "./pages/Clasificar";
import "./App.css";
import PanelActividades from "./pages/PanelActividades";
import PanelClasificar from "./pages/PanelClasificar";
import ListaActiviades2 from "./pages/ListaActiviades2";
import AgregarActividad from "./pages/AgregarActividad.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/actividades/:id" element={<Actividades />} />
        <Route path="/actividades/2" element={<ListaActiviades2 />} />
        <Route path="/clasificar" element={<Clasificar />} />
        <Route path="/actividades/panel" element={<PanelActividades />} />
        <Route path="/panel/clasificar" element={<PanelClasificar />} />
        <Route path="/agregar/clasificar" element={<AgregarActividad />} />
      </Routes>
    </Router>
  );
}

export default App;
