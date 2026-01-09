import { CityDto } from "@/types";

export const getCity = async (cityId: string): Promise<CityDto> => {
  return fetch(`/api/cities/${cityId}`).then((res) => res.json());
};
