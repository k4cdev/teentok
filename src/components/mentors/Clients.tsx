import useFetchClients from '@/hooks/useFetchClients';
import useClientStore from '@/stores/clients';

const Clientes = () => {
    useFetchClients();
    const clients = useClientStore((state) => state.clients);

    return (
        <div>
            <h1>Clientes</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>{client.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Clientes;
