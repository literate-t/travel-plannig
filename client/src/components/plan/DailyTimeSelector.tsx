import UpArrowIcon from "@/assets/icons/arrow-up.svg?react";
import { usePlanStore } from "@/store";
import {
  convertMinutesToTime,
  convertTimeToMinutes,
} from "@/utils/function/date";
import cn from "classnames";
import { format } from "date-fns";
import { useState } from "react";
import Button from "../common/Button";

export default function DailyTimeSelector() {
  const [shown, setShown] = useState<boolean>(false);
  const { setDailyTime, dailyTimes } = usePlanStore((state) => ({
    dailyTimes: state.dailyTimes,
    setDailyTime: state.setDailyTime,
  }));

  const totalTime = convertMinutesToTime(
    dailyTimes.reduce((acc, dailyTime) => {
      const duration =
        convertTimeToMinutes(dailyTime.endTime) -
        convertTimeToMinutes(dailyTime.startTime);
      return acc + duration;
    }, 0)
  );

  return (
    <div className="text-left flex flex-col gap-y-18 w-[368px]">
      <p className="flex gap-x-16 items-center text-17 font-medium tracking-[0.17px]">
        <span>여행 시간 상세 설명</span>
        <span className="text-[#5A88FF]">{totalTime}</span>
        <button onClick={() => setShown((h) => !h)}>
          <UpArrowIcon className={cn("w-24 h-24", { "rotate-180": shown })} />
        </button>
      </p>
      {shown && (
        <>
          <p className="text-15 leading-[1.7] -tracking-[0.09px]">
            입력한 여행 기간이 현지 여행 기간인지 확인해주세요. 각 날짜의 일정
            시작 시간과 종료 시간을 현지 시간 기준으로 설정해주세요. 기본 설정
            시간은 10시 ~ 22시 총 12시간입니다.
          </p>
          <div>
            <table className="text-15 text-center mb-36">
              <thead>
                <tr className="bg-bg">
                  <th className="py-10 px-18">일지</th>
                  <th className="py-10 px-18">요일</th>
                  <th className="py-10 px-28">시작시간</th>
                  <th className="py-10 px-28">종료시간</th>
                </tr>
              </thead>
              <tbody className="before:content-[''] before:block before:h-6">
                {dailyTimes.map((dailyTime, index) => (
                  <tr
                    key={index}
                    className="[&>td]:py-10 border-b-1 border-gray-100"
                  >
                    <td>{format(dailyTime.date, "M/dd")}</td>
                    <td>{format(dailyTime.date, "EEE")}</td>
                    <td>
                      <input
                        type="time"
                        value={dailyTime.startTime}
                        onChange={(e) =>
                          setDailyTime(
                            index,
                            e.currentTarget.value,
                            "startTime"
                          )
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={dailyTime.endTime}
                        onChange={(e) =>
                          setDailyTime(index, e.currentTarget.value, "endTime")
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <Button className="px-47">시간 설정 완료</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
