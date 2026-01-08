import { addDays, differenceInCalendarDays } from "date-fns";
import { FunctionComponent } from "react";
import { create } from "zustand";

interface State {
  startDate: Date | null;
  endDate: Date | null;
  status: Status;
  dailyTimes: { startTime: string; endTime: string; date: Date }[];
}

type Status = "edit_period" | "plan";

type Action = {
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  setStatus: (status: Status) => void;
  setDailyTime: (
    index: number,
    time: string,
    type: "startTime" | "endTime"
  ) => void;
};

// TODO: useDateStore으로 변경해보기
export const usePlanStore = create<State & Action>((set, get) => ({
  startDate: null,
  endDate: null,
  status: "edit_period",
  dailyTimes: [],
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => {
    if (date) {
      const start = get().startDate!;
      const diff = differenceInCalendarDays(date, start) + 1;
      const dailyTimes = Array.from({ length: diff }, (_, i) => ({
        startTime: "10:00",
        endTime: "22:00",
        date: addDays(start, i),
      }));
      set({ endDate: date, dailyTimes });
    } else {
      set({ endDate: null, dailyTimes: [] });
    }
  },
  setStatus: (status: Status) => set({ status }),
  setDailyTime: (index, time, type) => {
    set((state) => ({
      dailyTimes: state.dailyTimes.map((item, i) =>
        index === i ? { ...item, [type]: time } : item
      ),
    }));
  },
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
