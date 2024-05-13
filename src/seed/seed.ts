interface SeedMentor {
    name: string;
    role: string;
    job: string;
    slug: string;
    images: string[];
    gender: 'men' | 'women' | 'kid' | 'unisex'
}

interface SeedData {
    mentors: SeedMentor[],
}

export const initialData: SeedData = {
    mentors: [
        {
            name: "ahmetoktem",
            role: "Backend Developer",
            job: "Indra",
            slug: "ahmetoktem",
            images: [
                'pexels-ahmetoktem-18978811.jpg',
            ],
            gender: 'men'
        },
        {
            name: "aidilbahaman",
            role: "Backend Developer",
            job: "Indra",
            slug: "aidilbahaman",
            images: [
                'pexels-aidilbahaman-2748242.jpg',
            ],
            gender: 'men'
        },
        {
            name: "alexapopovich",
            role: "Backend Developer",
            job: "Indra",
            slug: "alexapopovich",
            images: [
                'pexels-alexapopovich-14762173.jpg',
            ],
            gender: 'men'
        },
        {
            name: "amadeo",
            role: "Backend Developer",
            job: "Indra",
            slug: "amadeo",
            images: [
                'pexels-amadeo-14807470.jpg',
            ],
            gender: 'men'
        },
        {
            name: "doquyen",
            role: "Backend Developer",
            job: "Indra",
            slug: "doquyen",
            images: [
                'pexels-doquyen-1520760.jpg',
            ],
            gender: 'men'
        },
        {
            name: "emuseshutter",
            role: "Backend Developer",
            job: "Indra",
            slug: "emuse",
            images: [
                'pexels-emuse-shutter-228842.jpg',
            ],
            gender: 'men'
        },
        {
            name: "joennguyen",
            role: "Backend Developer",
            job: "Indra",
            slug: "joennguyen",
            images: [
                'pexels-joennguyen-2599509.jpg',
            ],
            gender: 'men'
        },
        {
            name: "lucasdcrk",
            role: "Backend Developer",
            job: "Indra",
            slug: "lucasdcrk",
            images: [
                'pexels-lucasdcrk-1253664.jpg',
            ],
            gender: 'men'
        },
        {
            name: "manei",
            role: "Backend Developer",
            job: "Indra",
            slug: "manei",
            images: [
                'pexels-manei-2690323.jpg',
            ],
            gender: 'men'
        },
        {
            name: "marcelochagas",
            role: "Backend Developer",
            job: "Indra",
            slug: "marcelochagas",
            images: [
                'pexels-marcelochagas-1937434.jpg',
            ],
            gender: 'men'
        },
        {
            name: "mwabonje",
            role: "Backend Developer",
            job: "Indra",
            slug: "mwabonje",
            images: [
                'pexels-mwabonje-1820559.jpg',
            ],
            gender: 'men'
        },
        {
            name: "nipin niravath",
            role: "Backend Developer",
            job: "Indra",
            slug: "niravath",
            images: [
                'pexels-nipin-niravath-3435228-19966326.jpg',
            ],
            gender: 'men'
        },
    ]
}