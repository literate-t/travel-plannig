import { CityDto } from "@/types";
import Card from "./Card";

interface Props {
  cities: CityDto[];
}

export default function CityList({ cities }: Props) {
  return (
    <div className="flex flex-wrap justify-between gap-y-28 items-start w-full">
      {cities.map((city) => (
        <Card
          key={city.code}
          title={city.nameEn.toLocaleUpperCase()}
          description={`${city.country.name} ${city.name}`}
          image={city.thumbnail}
        />
      ))}
    </div>
  );
}
