"use client"

import { Mentor } from "@/interfaces";
import { MentorGridItem } from "./MentorGridItem";
import useMentorStore from "@/store/store";

export const MentorsList = ({ mentors }: { mentors: Mentor[] }) => {
    // Usa el store de Zustand
    // const addMentor = useMentorStore(state => state.addMentor);
    const mentorlist = useMentorStore((state) => state.mentors);

    return (

        <div className="grid grid-cols-1 px-8 sm:grid-cols-3 gap-10 mb-10">
            {mentorlist.map((mentor: Mentor) => (
                <MentorGridItem
                    key={mentor.slug}
                    mentor={mentor}
                />
            ))}
        </div>
    );
};
