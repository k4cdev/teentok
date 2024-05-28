import create from 'zustand';
import useAuthStore from './authStore';

interface Client {
    id: number;
    name: string;
}

interface ClientState {
    clients: Client[];
    setClients: (clients: Client[]) => void;
    addClient: (client: Client) => void;
    updateClient: (id: number, updatedClient: Client) => void;
    deleteClient: (id: number) => void;
}


const useClientStore = create<ClientState>((set) => ({
    clients: [],
    setClients: (clients) => set({ clients }),
    addClient: (client) => set((state) => ({ clients: [...state.clients, client] })),
    updateClient: (id, updatedClient) => set((state) => ({
        clients: state.clients.map((client) => (client.id === id ? updatedClient : client)),
    })),
    deleteClient: (id) => set((state) => ({
        clients: state.clients.filter((client) => client.id !== id),
    })),
    fetchClients: async () => {
        try {
            const token = useAuthStore.getState().token; // Obtén el token del store de autenticación
            const response = await fetch('http://localhost:9090/api/clients', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Envía el token en el encabezado de autorización
                },
            });

            if (!response.ok) {
                throw new Error('Error al cargar clientes');
            }

            const data = await response.json();
            set({ clients: data }); // Actualiza el estado del store con los clientes obtenidos del backend
        } catch (error) {
            console.error('Error al cargar clientes:', error);
        }
    },
}));

export default useClientStore;
