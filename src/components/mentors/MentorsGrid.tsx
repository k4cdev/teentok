import { Mentor } from "@/interfaces";
import { MentorGridItem } from "./MentorGridItem";
import MentorForm from "./MentorForm";
import { MentorsList } from "./MentorList";

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
