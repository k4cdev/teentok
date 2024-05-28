import useAuthStore from '@/stores/authStore';

const useRegister = () => {
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
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return { register };
};

export default useRegister;
