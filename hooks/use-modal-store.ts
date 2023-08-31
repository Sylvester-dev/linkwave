import {create} from "zustand";

export type MadalType = "createServer";

interface ModalStore {
    type: MadalType | null;
    isOpen: boolean;
    onOpen: (type: MadalType) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    isOpen: false,
    onOpen: (type) => set({ type, isOpen: true }),
    onClose: () => set({ type: null, isOpen: false }),
}))