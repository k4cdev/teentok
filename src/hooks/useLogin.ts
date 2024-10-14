import useAuthStore from '@/stores/authStore';
import { useRouter } from 'next/navigation';

const useLogin = () => {
    const setToken = useAuthStore((state) => state.setToken);
    const router = useRouter();

    const login = async (username: string, password: string) => {
        try {
            const response = await fetch('http://localhost:9090/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.token) {
                setToken(data.token);
                document.cookie = `token=${data.token}; path=/`;
                console.log('User login successfully:', data.token);
                router.push('/');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return { login };
};

export default useLogin;
