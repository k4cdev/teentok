import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    }
}

export default function ({ params }: Props) {

    const { slug } = params;

    if (slug === 'kids') {
        notFound();
    }
    return (
        <div>
            <h1>Mentor Page</h1>
        </div>
    );
}