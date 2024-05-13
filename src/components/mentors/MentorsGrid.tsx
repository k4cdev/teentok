import { Mentor } from "@/interfaces";
import { MentorGridItem } from "./MentorGridItem";

interface Props {
    mentors: Mentor[];
}

export const MentorsGrid = ({ mentors }: Props) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
            {
                mentors.map(
                    mentor => (
                        <MentorGridItem
                            key={mentor.slug}
                            mentor={mentor}
                        />
                    )
                )
            }
        </div>
    )
}
