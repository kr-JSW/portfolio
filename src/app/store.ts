import { create } from 'zustand';

interface projectState {
    isModal: Boolean;
    src: string;
    name: string;
    des: string;
    skills: {
        FE: string;
        BE?: string;
        DB?: string;
        Deploy?: string;
    };
    modalBool: (isModal: Boolean) => void;
    modalState: (src: string, name: string, des: string, FE: string, BE: string, DB: string, Deploy: string) => void;
}

export const projectStore = create<projectState>((set) => ({
    isModal: false,
    src: '',
    name: '',
    des: '',
    skills: {
        FE: '',
        BE: '',
        DB: '',
        Deploy: '',
    },
    modalBool: (isModal) => set((state) => ({ isModal })),
    modalState: (src, name, des, FE, BE, DB, Deploy) =>
        set((state) => ({
            src,
            name,
            des,
            skills: {
                FE,
                BE,
                DB,
                Deploy,
            },
        })),
}));
