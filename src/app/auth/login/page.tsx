"use client"
import { SetStateAction, useState } from 'react';
import useLogin from '@/hooks/useLogin';
import { useRouter } from 'next/navigation';

interface AlertMessage {
  id: number;
  desc: string;
}

enum MessageDescription {
  username = "El nombre de usuario solo puede contener letras y debe tener entre 3 y 15 caracteres.",
  password = "La contraseña debe tener exactamente 8 caracteres, con al menos una mayúscula, una minúscula, un número y un carácter especial."
}

export default function Home() {

  const { login } = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState<AlertMessage[]>([]);
  const router = useRouter();

  const handleUsernameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const usernameRegex = /^[a-zA-Z]{3,15}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8}$/;

    let valid = true;
    const messages: AlertMessage[] = [];

    if (!usernameRegex.test(username)) {
      messages.push({ id: 0, desc: MessageDescription.username});
      valid = false;
    }

    if (!passwordRegex.test(password)) {
      messages.push({ id: 1, desc: MessageDescription.password});
      valid = false;
    }

    setAlertMessage(messages);

    if (valid) {
      login(username, password);
      router.push('/');
    }
  };



  return (
    <div className="fixed inset-0 flex justify-center items-end">
      <div className="bg-neutral-900 h-3/4 w-full max-w-md p-6 rounded-t-3xl flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center space-y-4 w-full">
          <input
            type="text"
            className="block w-3/4 h-12 p-2 rounded-full text-gray-900"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />
          <input
            type="password"
            className="block w-3/4 h-12 p-2 rounded-full text-gray-900"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
          <button type="submit" className="bg-yellow-500 w-3/4 h-12 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
            Login
          </button>

          {alertMessage.length > 0 && ( 
            <div className="mt-4 p-2 text-red-600 bg-red-100 rounded">
              <ul>
                {alertMessage.map(msg => (
                  <li key={msg.id}>{msg.desc}</li>
                ))}
              </ul>
            </div>
          )}

        </form>
      </div>
    </div>
  );


}
