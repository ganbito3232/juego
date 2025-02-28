import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { agregarActividad, calificarActividad } from "../api";

export default function AgregarActividad() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  // Función para guardar la actividad
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !descripcion) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Suponiendo que tienes una API para guardar la actividad
    const nuevaActividad = {
      nombre,
      descripcion,
      tipo: 2, // Establecemos el tipo 2
    };

    try {
      // Llamada API para guardar la nueva actividad
      // Aquí debes hacer la llamada a la API de tu backend, por ejemplo:
      // await api.agregarActividad(nuevaActividad);

      console.log("Actividad guardada:", nuevaActividad);
      await agregarActividad(nombre, 2, descripcion);

      // Redirigir al panel de actividades después de guardar
      navigate("/panel/clasificar");
    } catch (error) {
      console.error("Error al guardar la actividad:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Agregar Nueva Actividad
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo para el nombre */}
          <TextField
            label="Nombre de la Actividad"
            variant="outlined"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full"
            required
          />
          {/* Campo para la descripción */}
          <TextField
            label="Descripción"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full"
            required
          />
          {/* Botón de guardar */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full py-3 text-lg"
          >
            Guardar Actividad
          </Button>
        </form>
      </div>
    </div>
  );
}
