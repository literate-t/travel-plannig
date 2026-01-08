import CalendarIcon from "@/assets/icons/calendar.svg?react";
import { usePlanStore } from "@/store";
import { format } from "date-fns";

export default function PlanControllerHeader() {
  const { startDate, endDate } = usePlanStore((state) => ({
    startDate: state.startDate,
    endDate: state.endDate,
  }));
  return (
    <div className="text-left">
      <h2 className="text-35 font-bold mb-18">도쿄</h2>
      {startDate && endDate && (
        <div className="text-17 leading-none tracking-[0.17px] flex items-center">
          <span className="mr-8">{`${format(
            startDate,
            "yyyy.MM.dd(EEE)"
          )} ~ ${format(endDate, "yyyy.MM.dd(EEE)")}`}</span>
          <CalendarIcon className="w-24 h-24" />
        </div>
      )}
    </div>
  );
}
