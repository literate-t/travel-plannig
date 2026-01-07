import { FunctionComponent } from "react";
import { create } from "zustand";

interface State {
  startDate: Date | null;
  endDate: Date | null;
  status: Status;
}

type Status = "edit_period" | "plan";

type Action = {
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setStatus: (status: Status) => void;
};

// TODO: useDateStore으로 변경해보기
export const usePlanStore = create<State & Action>((set) => ({
  startDate: null,
  endDate: null,
  status: "edit_period",
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setStatus: (status: Status) => set({ status }),
}));

interface ModalState {
  modals: FunctionComponent<{ onClose: () => void }>[];
}

type ModalAction = {
  openModal: (modal: FunctionComponent<{ onClose: () => void }>) => void;
  closeModal: (index: number) => void;
};

export const useModalStore = create<ModalState & ModalAction>((set) => ({
  modals: [],
  openModal: (modal) => set((state) => ({ modals: [...state.modals, modal] })),
  closeModal: (index) =>
    set((state) => ({ modals: state.modals.filter((_, i) => i !== index) })),
}));
