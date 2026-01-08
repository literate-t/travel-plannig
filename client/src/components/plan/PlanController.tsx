import DailyTimeSelector from "./DailyTimeSelector";
import PlanControllerHeader from "./PlanControllerHeader";
import PlanSteps from "./PlanSteps";

export default function PlanController() {
  return (
    <div className="h-full flex">
      <PlanSteps />
      <div className="flex flex-col gap-y-18 px-24 py-30">
        <PlanControllerHeader />
        <DailyTimeSelector />
      </div>
    </div>
  );
}
