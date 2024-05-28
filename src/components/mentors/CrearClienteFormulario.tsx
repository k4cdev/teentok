// components/CrearClienteFormulario.tsx
"use client"
import { useState } from 'react';
import useClientStore from '@/stores/clients';
import useAuthStore from '@/stores/authStore';

const CrearClienteFormulario = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const token = useAuthStore((state) => state.token);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:9090/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Reemplaza TU_TOKEN con el token JWT del usuario actual
        },
        body: JSON.stringify({ name: nombre }),
      });

      if (!response.ok) {
        throw new Error('Error al crear el cliente');
      }

      const data = await response.json();
      setMensaje(`Cliente creado con ID: ${data.id}`);
      // Agregar el nuevo cliente al store
      useClientStore.getState().addClient({ id: data.id, name: nombre });
    } catch (error) {
      console.error('Error al crear el cliente:', error);
      setMensaje('Error al crear el cliente');
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <button type="submit">Crear Cliente</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default CrearClienteFormulario;
