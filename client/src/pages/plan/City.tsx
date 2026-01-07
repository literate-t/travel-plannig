import TravelPeriodModal from "@/components/plan/TravelPeriodModal";
import { usePlanStore } from "@/store";

export default function PlanCity() {
  const status = usePlanStore((state) => state.status);
  return status === "edit_period" && <TravelPeriodModal />;
}
