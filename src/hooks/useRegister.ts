import useAuthStore from '@/stores/authStore';
import { useRouter } from 'next/navigation';

const useRegister = () => {
    const router = useRouter();
    const setToken = useAuthStore((state) => state.setToken);

    const register = async (username: string, password: string) => {
        try {
            const response = await fetch('http://localhost:9090/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.token) {
                setToken(data.token);
                console.log('User registered successfully:', data.token);
                router.push('/auth/login'); 
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return { register };
};

export default useRegister;
