

import { useEffect } from 'react';
import useClientStore from '@/stores/clients';

const useFetchClients = () => {
    const setClients = useClientStore((state) => state.setClients);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch('http://localhost:9090/api/clients');
                const data = await response.json();
                setClients(data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };

        fetchClients();
    }, [setClients]);
};

export default useFetchClients;
