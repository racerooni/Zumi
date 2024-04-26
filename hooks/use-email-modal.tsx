import { create } from "zustand";

interface useEmailModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useEmailModal = create<useEmailModalProps>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
