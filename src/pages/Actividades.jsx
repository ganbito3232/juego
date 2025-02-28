import { useEffect, useState } from "react";
import { getActividades } from "../api";

export default function Actividades() {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    const fetchActividades = async () => {
      const data = await getActividades();
      // Filtrar solo las actividades con tipo === 1
      const actividadesFiltradas = data.filter((a) => a.tipo_id === 1);

      setActividades(actividadesFiltradas);
    };

    fetchActividades();
    const interval = setInterval(fetchActividades, 5000);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, []);

  if (!actividades.length)
    return <p className="text-center text-gray-500">Cargando...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Actividades 1</h2>
        {actividades.map((actividad) => (
          <div
            key={actividad.id}
            className="mb-4 p-4 border rounded-lg bg-gray-50"
          >
            <img
              src={`/${actividad?.id}.webp`}
              alt={actividad.nombre}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{actividad.nombre}</h3>
            <p className="text-gray-600">
              Calificación Promedio:
              <strong>
                {actividad.calificaciones_avg_calificacion ?? "Sin calificar"}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
