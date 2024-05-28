'use client';

import { Mentor } from '@/interfaces';
import useMentorStore from '@/stores/store';
import React from 'react';

const generateSlug = (length: number): string => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let slug = '';
    for (let i = 0; i < length; i++) {
        slug += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return slug;
};

const MentorForm = () => {
    const addMentor = useMentorStore((state) => state.addMentor);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newMentor: Mentor = {
            name: formData.get('name') as string,
            role: formData.get('role') as string,
            job: "teentok",
            slug: generateSlug(10),
            images: [
                'pexels-doquyen-1520760.jpg',
            ],
            gender: 'women',
            // Asignar otros campos del formulario...
        };
        addMentor(newMentor);
        e.currentTarget.reset(); // Reiniciar el formulario después de enviar
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="role" placeholder="Role" />
            {/* Otros campos de formulario... */}
            <button type="submit">Add Mentor</button>
        </form>
    );
};

export default MentorForm;
