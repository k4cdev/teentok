import { Mentor } from '@/interfaces';
import create from 'zustand';

interface SeedMentor {
    name: string;
    role: string;
    job: string;
    slug: string;
    images: string[];
    gender: 'men' | 'women' | 'kid' | 'unisex'
}

// interface SeedData {
//     mentors: SeedMentor[],
// }
type State = {
  mentors: Mentor[];
  addMentor: (mentor: Mentor) => void;
};

interface MentorStore {
    mentors: SeedMentor[];
    setMentors: (mentors: SeedMentor[]) => void;
    addMentor: (mentor: SeedMentor) => void;
    updateMentor: (slug: string, updatedMentor: SeedMentor) => void;
    deleteMentor: (slug: string) => void;
  }
  
  const useMentorStore = create<State>((set) => ({
    mentors: [],
    setMentors: (mentors: Mentor[]) => set({ mentors }),
    addMentor: (mentor) => set((state) => ({ mentors: [...state.mentors, mentor] })),
    updateMentor: (slug: string, updatedMentor: Mentor) => set((state) => ({
      mentors: state.mentors.map((mentor) => (mentor.slug === slug ? updatedMentor : mentor)),
    })),
    deleteMentor: (slug: string) => set((state) => ({
      mentors: state.mentors.filter((mentor) => mentor.slug !== slug),
    })),
  }));
  
  export default useMentorStore;
  