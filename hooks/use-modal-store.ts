import {create} from "zustand";
import { Server } from "@prisma/client";

export type MadalType = "createServer"  | "invite" | "editServer" | "members" | "createChannel";

interface ModalData {
    server?: Server
}

interface ModalStore {
    type: MadalType | null;
    data: ModalData;
    isOpen: boolean;
    onOpen: (type: MadalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ type, isOpen: true, data }),
    onClose: () => set({ type: null, isOpen: false }),
}))