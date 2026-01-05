export interface CityDto {
  code: string; // 도시 코드, 구분자 역할: seoul
  name: string; // 도시 한글 이름: 서울
  nameEn: string; // 도시 영문 이름: Seoul
  thumbnail: string; // 도시 썸네일 이미지
  description: string; // 도시 설명
  timezone: string; // 도시 타임존: Asia/Seoul
  flighthour: number; // 비행 시간
  timezoneOffset: number; // 시차
  coordinate: {
    lat: number;
    lng: number;
  };
  country: CountryDto;
}

export interface CountryDto {
  code: string; // 국가 코드: kr
  name: string; // 국가 한글 이름
  nameEn: string; // 국가 영문 이름: Korea
  voltage: number; // 전압
  visa: VisaDto; // 유효 기간
  continent: Continent;
}

export interface VisaDto {
  required: boolean;
  duration: number;
}

export type Continent =
  | "Asia"
  | "North America"
  | "Central America"
  | "South America"
  | "Europe"
  | "Africa"
  | "Oceania";
