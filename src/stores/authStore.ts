import create from 'zustand';

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  initializeToken: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null, // Inicializa el token como null
  setToken: (token) => {
    set({ token });
    // Manejo de cookies directamente
    if (typeof window !== 'undefined') {
      if (token) {
        document.cookie = `token=${token}; path=/`; // Guardar en cookies
      } else {
        document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`; // Remover cookie
      }
    }
  },
  initializeToken: () => {
    if (typeof window !== 'undefined') {
      const cookieArray = document.cookie.split('; ');
      const storedToken = cookieArray.find(row => row.startsWith('token='));
      if (storedToken) {
        const tokenValue = storedToken.split('=')[1]; // Extraer el valor del token
        set({ token: tokenValue }); // Si hay un token almacenado, setéalo
      }
    }
  },
}));

export default useAuthStore;
