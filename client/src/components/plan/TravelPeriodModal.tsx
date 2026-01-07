import { usePlanStore } from "@/store";
import Button from "../common/Button";
import Modal, { ModalBackdrop, ModalPanel } from "../common/Modal";
import TravelDateSelector from "./TravelDateSelector";

export default function TravelPeriodModal() {
  const { endDate, startDate, setEndDate, setStartDate, setStatus } =
    usePlanStore((state) => state);

  const handleDates = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleComplete = () => {
    setStatus("plan");
  };

  return (
    <Modal>
      <ModalBackdrop />
      <ModalPanel className="text-center">
        <h2 className="text-32 font-semibold mb-18">
          여행 기간을 설정해주세요
        </h2>
        <p className="text-15 leading-[1.5] mb-30">
          * 여행 일자는 최대 10일까지 설정 가능합니다.
          <br />
          현지 여행 기간(여행지 도착 날짜, 여행지 출발 날짜)으로 입력해 주세요.
        </p>
        <div className="mb-30">
          <TravelDateSelector
            startDate={startDate}
            endDate={endDate}
            onChange={handleDates}
          />
        </div>
        <div className="text-right">
          <Button
            onClick={handleComplete}
            disabled={!startDate || !endDate}
            className="px-42"
          >
            선택
          </Button>
        </div>
      </ModalPanel>
    </Modal>
  );
}
