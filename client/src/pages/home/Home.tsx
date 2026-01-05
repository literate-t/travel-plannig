import Loading from "@/components/common/Loading";
import NarrowLayout from "@/components/common/NarrowLayout";
import CityList from "@/components/home/CityList";
import FilterList from "@/components/home/FilterList";
import SearchInput from "@/components/home/SearchInput";
import { getCities } from "@/services/home";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });

  return isLoading || !data ? (
    <Loading />
  ) : (
    <NarrowLayout className="flex flex-col items-center my-30">
      <div className="w-[339px] mb-24">
        <SearchInput onCompositionEnd={(value) => console.log(value)} />
      </div>
      <div className="mb-21">
        <FilterList active="all" onChange={() => {}} />
      </div>
      <CityList cities={data} />
    </NarrowLayout>
  );
}
