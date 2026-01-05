import { CityDto } from "@/types";

export const getCities = async (): Promise<CityDto[]> => {
  const response = await fetch("/api/cities");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};

export const getSearchedCities = async (search: string): Promise<CityDto[]> => {
  const response = await fetch(`/api/cities/search?q=${search}`);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return response.json();
};
