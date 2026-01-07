import CalendarLeftArrow from "@/assets/icons/CalendarLeftArrow.svg?react";
import { ko } from "date-fns/locale";
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./TravelDateSelector.css";

interface Props {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (start: Date | null, end: Date | null) => void;
}

export default function TravelDateSelector({
  startDate,
  endDate,
  onChange,
}: Props) {
  const today = new Date();
  const handleChange = ([start, end]: [Date | null, Date | null]) => {
    onChange(start, end);
  };

  const renderHeader = ({
    monthDate,
    customHeaderCount,
    decreaseMonth,
    increaseMonth,
  }: ReactDatePickerCustomHeaderProps) => (
    <div className="flex justify-center mb-14">
      <button
        aria-label="Previous Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--previous"
        }
        onClick={decreaseMonth}
        style={{ visibility: customHeaderCount === 0 ? "visible" : "hidden" }}
      >
        <CalendarLeftArrow className="w-14 h-14" />
      </button>
      <span className="react-datepicker__current-month">
        {monthDate.toLocaleString("ko-KR", {
          month: "long",
          year: "numeric",
        })}
      </span>
      <button
        aria-label="Next Month"
        className={
          "react-datepicker__navigation react-datepicker__navigation--next"
        }
        onClick={increaseMonth}
        style={{
          visibility: customHeaderCount === 1 ? "visible" : "hidden",
        }}
      >
        <CalendarLeftArrow className="w-14 h-14 rotate-180" />
      </button>
    </div>
  );

  return (
    <DatePicker
      inline
      monthsShown={2}
      selectsRange
      startDate={startDate ?? undefined}
      endDate={endDate ?? undefined}
      minDate={today}
      maxDate={
        startDate && !endDate
          ? new Date(
              startDate.getFullYear(),
              startDate.getMonth(),
              startDate.getDate() + 10
            )
          : undefined
      }
      onChange={handleChange}
      locale={ko}
      dateFormatCalendar="yyyy년 M월"
      renderCustomHeader={renderHeader}
    />
  );
}
