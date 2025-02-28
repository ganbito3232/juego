import { useState, useEffect } from "react";
import { getActividades, calificarActividad } from "../api";
import { useNavigate } from "react-router-dom";

export default function Clasificar() {
  const [actividades, setActividades] = useState([]);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getActividades();

      const filtrados = data.filter((e) => e.tipo_id === "1");
      setActividades(filtrados);
    };
    fetchData();
  }, []);

  const handleCalificar = async (calificacion) => {
    console.log("ACTIV", actividades[index].id);
    await calificarActividad(actividades[index].id, calificacion);
    if (index < actividades.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(index + 1);
    }
  };

  if (actividades.length === 0)
    return <p className="text-center text-gray-500">Cargando...</p>;

  if (index >= actividades.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¡Clasificación completada!
          </h2>
          <button
            onClick={() => navigate("/panel/clasificar")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Volver a Actividades
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <img
          src={`/${actividades[index].id}.webp`}
          alt={actividades[index].id}
          className="w-full h-80 object-cover rounded-md mb-3"
        />
        <h2 className="text-2xl font-bold mb-4">{actividades[index].nombre}</h2>
        <p className="text-gray-600">Selecciona una calificación:</p>
        <div className="grid grid-cols-5 gap-2 mt-4">
          {[...Array(10)].map((_, i) => (
            <button
              key={i}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => handleCalificar(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
