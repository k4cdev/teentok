"use client";
import { useEffect, useState } from 'react';
import useAuthStore from '@/stores/authStore';

export default function InventoryPage() {
  const { token, initializeToken } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialize = () => {
      if (typeof window !== 'undefined') {
        initializeToken();
        setLoading(false);
      }
    };

    initialize();
  }, [initializeToken]);

  if (loading) {
    return <div>Loading...</div>; // Opcional: puedes mostrar un mensaje de carga mientras se inicializa el token
  }

  return (
    <div>
      <h1>Inventory Page {token ? 'Logged in' : 'Not logged in'}</h1>
    </div>
  );
}
