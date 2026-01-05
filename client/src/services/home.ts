import { CityDto } from "@/types";

export const getCities = async (): Promise<CityDto[]> => {
  const res = await fetch("/api/cities");
  return res.json();
};
