import { getPlaces } from "@/services/plan";
import { Category } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";
import SearchInput from "../common/SearchInput";
import PlaceFilterList from "./PlaceFilterList";
import PlaceList from "./PlaceList";

export default function PlaceContainer() {
  const { city } = useParams();
  const [q, setQ] = useState<string>("");
  const [filter, setFilter] = useState<Category | null>(null);

  const { isLoading, data } = useQuery({
    queryKey: ["places", city, q, filter],
    enabled: !!city,
    queryFn: () => {
      const query = {
        ...(q ? { q } : {}),
        ...(filter ? { category: filter } : {}),
      };

      return getPlaces(city!, query);
    },
  });

  const handleFilter = (category: Category) => {
    if (filter === category) {
      setFilter(null);
    } else {
      setFilter(category);
    }
  };

  return (
    <div className="flex flex-col gap-y-18 h-full">
      <SearchInput onSearch={(value) => setQ(value)} />
      <PlaceFilterList selected={filter} onFilter={handleFilter} />
      {isLoading || !data ? <Loading /> : <PlaceList places={data} />}
    </div>
  );
}
