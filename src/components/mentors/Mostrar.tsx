"use client"
import useAuthStore from '@/stores/authStore';

const MostrarContenido = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <div>
      <h2>Contenido del Store de Zustand</h2>
      <p>Token JWT: {token}</p>
    </div>
  );
};

export default MostrarContenido;