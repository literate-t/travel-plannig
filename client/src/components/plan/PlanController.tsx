import { PropsWithChildren } from "react";
import Wizard from "../common/Wizard";
import DailyTimeController from "./DailyTimeController";
import PlanControllerHeader from "./PlanControllerHeader";

export default function PlanController() {
  return (
    <div className="h-full flex">
      <Wizard
        steps={[
          {
            title: "날짜 확인",
            content: ({ onNext }) => (
              <Layout>
                <DailyTimeController onCompleted={onNext} />
              </Layout>
            ),
          },
          {
            title: "장소 선택",
            content: () => (
              <Layout>
                <div>장소 선택</div>
              </Layout>
            ),
          },
          {
            title: "숙소 선택",
            content: () => (
              <Layout>
                <div>숙소 선택</div>
              </Layout>
            ),
          },
        ]}
      />
    </div>
  );
}

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-y-18 px-24 py-30">
      <PlanControllerHeader />
      {children}
    </div>
  );
}
