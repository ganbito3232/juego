import axios from "axios";

const API_URL = "https://app.lssenergysolar.cl/api";

export const getActividades = async () => {
  const response = await axios.get(`${API_URL}/actividades`);
  return response.data;
};

export const calificarActividad = async (id, calificacion) => {
  await axios.post(`${API_URL}/calificaciones`, {
    actividade_id: id,
    calificacion,
  });
};

export const agregarActividad = async (nombre, tipo_id, descripcion) => {
  await axios.post(`${API_URL}/actividades`, {
    nombre,
    tipo_id,
    descripcion,
  });
};
