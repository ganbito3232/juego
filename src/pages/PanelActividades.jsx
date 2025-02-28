import { Link } from "react-router-dom";

export default function PanelActividades() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Selecciona una Actividad
        </h2>
        <div className="flex flex-col gap-6">
          {/* Actividad 1 */}
          <Link
            to="/actividades/1"
            className="relative bg-blue-500 text-white text-2xl font-bold rounded-lg p-12 shadow-lg transition transform hover:scale-105"
          >
            Actividad 1
          </Link>

          {/* Actividad 2 */}
          <Link
            to="/actividades/2"
            className="relative bg-teal-500 text-white text-2xl font-bold rounded-lg p-12 shadow-lg transition transform hover:scale-105"
          >
            Actividad 2
          </Link>
        </div>
      </div>
    </div>
  );
}
