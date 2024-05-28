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

interface Props {
    mentors: Mentor[];
}

export const MentorsGrid = ({ mentors }: Props) => {
    return (
        <div className="grid grid-cols-1 px-8 sm:grid-cols-3 gap-10 mb-10">
            {/* {
                mentors.map(
                    mentor => (
                        <MentorGridItem
                            key={mentor.slug}
                            mentor={mentor}
                        />
                    )
                )
            } */}

            <MentorForm />

            <Clientes />

            <Register />

            <CrearClienteFormulario />

            <MostrarContenido />

            <MentorsList mentors={mentors} />

            {/* {
                mentors.map(
                    mentor => (
                        <MentorsList
                            key={mentor.slug}
                            mentors={mentor}
                        />
                    )
                )
            } */}
        </div>
    )
}
