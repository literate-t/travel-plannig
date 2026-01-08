import WideLayout from "@/components/common/WideLayout";
import PlanController from "@/components/plan/PlanController";
import TravelPeriodModal from "@/components/plan/TravelPeriodModal";
import { usePlanStore } from "@/store";

export default function PlanCity() {
  const status = usePlanStore((state) => state.status);
  return (
    <>
      {status === "edit_period" && <TravelPeriodModal />}
      <WideLayout>
        <div className="flex h-full">
          <PlanController />
          <div className="flex-1 bg-gray-500">map</div>
        </div>
      </WideLayout>
    </>
  );
}
