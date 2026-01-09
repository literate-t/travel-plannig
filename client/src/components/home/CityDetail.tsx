import AirPlaneIcon from "@/assets/icons/airplane.svg?react";
import ClockIcon from "@/assets/icons/clock.svg?react";
import RightArrowIcon from "@/assets/icons/right-arrow.svg?react";
import VisaIcon from "@/assets/icons/visa.svg?react";
import VoltageIcon from "@/assets/icons/volt.svg?react";
import { City } from "@/types";
import Button from "../common/Button";

interface Props {
  city: City;
}

export default function CityDetail({ city }: Props) {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-18 flex">
        <div className="flex flex-1 flex-col mr-17">
          <div className="mb-18">
            <h3 className="text-20 text-gray-300 mb-10">
              {city.nameEn.toLocaleUpperCase()}
            </h3>
            <h2 className="text-30 font-bold">
              {city.country.name} {city.name}
            </h2>
          </div>
          <p className="text-14 leading-[160%] -tracking-[0.08px] mb-18">
            {city.description}
          </p>
          <div className="flex gap-x-26">
            <div className="flex flex-col">
              <div className="flex text-15 tracking-[0.15px] font-semibod mb-16">
                <AirPlaneIcon className="w-20 h-20 mr-8" />
                <span>항공</span>
              </div>
              <p className="text-gray-600 text-14 tracking-[0.14px] mb-8">
                직항
              </p>
              <p>약 {city.flighthour} 시간</p>
            </div>
            <div className="flex flex-col">
              <div className="flex text-15 tracking-[0.15px] font-semibod mb-16">
                <VisaIcon className="w-20 h-20 mr-8" />
                <span>비자</span>
              </div>
              <p className="text-gray-600 text-14 tracking-[0.14px] mb-8">
                {city.country.visa.required ? "비자" : "무비자"}
              </p>
              <p>{city.country.visa.duration}일</p>
            </div>
            <div className="flex flex-col">
              <div className="flex text-15 tracking-[0.15px] font-semibod mb-16">
                <VoltageIcon className="w-20 h-20 mr-8" />
                <span>전압</span>
              </div>
              <p className="text-gray-600 text-14 tracking-[0.14px] mb-8">
                콘센트
              </p>
              <p>{city.country.voltage}V</p>
            </div>
            <div className="flex flex-col">
              <div className="flex text-15 tracking-[0.15px] font-semibod mb-16">
                <ClockIcon className="w-20 h-20 mr-8" />
                <span>시차</span>
              </div>
              <p className="text-gray-600 text-14 tracking-[0.14px] mb-8">
                한국대비
              </p>
              <p>
                약{" "}
                {city.timezoneOffset === 0
                  ? "없음"
                  : `${city.timezoneOffset}시간`}
              </p>
            </div>
          </div>
        </div>
        <img
          src={city.thumbnail}
          alt={city.name}
          className="w-[261px] rounded-10"
        />
      </div>
      <div>
        <Button className="w-185 flex justify-center items-center">
          <span className="mr-5 ml-8">일정 만들기</span>
          <RightArrowIcon className="w-18 h-18" />
        </Button>
      </div>
    </div>
  );
}
