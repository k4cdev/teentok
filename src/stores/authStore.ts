import create from 'zustand';

interface AuthState {
    token: string | null;
    setToken: (token: string) => void;
}

// const useAuthStore = create<AuthState>((set) => ({
//     token: null,
//     setToken: (token) => set({ token }),
// }));

const useAuthStore = create<AuthState>((set) => ({
    token: sessionStorage.getItem('token') ?? null, // Obtener el token de SessionStorage al inicializar el store
    setToken: (token) => {
      set({ token }); // Actualizar el estado interno del store
      if (token) {
        sessionStorage.setItem('token', token); // Guardar el token en SessionStorage al establecerlo
      } else {
        sessionStorage.removeItem('token'); // Eliminar el token de SessionStorage si es null
      }
    },
  }));

export default useAuthStore;
