"use client"
import { Mentor } from "@/interfaces";
import { MentorGridItem } from "./MentorGridItem";
import MentorForm from "./MentorForm";
import { MentorsList } from "./MentorList";
import Clientes from "./Clients";
import Register from "./Register";
import useAuthStore from '@/stores/authStore';
import MostrarContenido from "./Mostrar";
import CrearClienteFormulario from "./CrearClienteFormulario";
import Image from 'next/image'

interface Props {
    mentors: Mentor[];
}

export const MentorsGrid = ({ mentors }: Props) => {
    return (
        <div className="relative max-w-sm rounded overflow-hidden shadow-lg">
            {/* <MentorForm />

            <Clientes />

            <Register />

            <CrearClienteFormulario />

            <MostrarContenido />

            <MentorsList mentors={mentors} /> */}
            <Image
                // className="w-full"
                src="/imgs/ella-don-BJ5f_N61Rik-unsplash.jpg"
                width={500}
                height={500}
                alt="girl mentoring"
            />

            {/* Contenedor del texto (posición absoluta sobre la imagen) */}
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-start items-start text-white px-6 py-4 ">
                <div className="font-bold text-xl mb-2">Teentok</div>
            </div>

            {/* Etiquetas (puedes dejarlas fuera de la imagen si lo prefieres) */}
            <div className="absolute bottom-4 right-4">
                <span className="inline-block border border-white text-white hover:bg-yellow-500 hover:text-white rounded-full px-3 py-1 text-sm font-semibold transition-colors duration-300">
                    Explore All
                </span>
            </div>
        </div>
    )
}
