import NarrowLayout from "@/components/common/NarrowLayout";
import CityList from "@/components/home/CityList";
import FilterList from "@/components/home/FilterList";
import SearchInput from "@/components/home/SearchInput";
import { City } from "@/types";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  return (
    <NarrowLayout className="flex flex-col items-center my-30">
      <div className="w-[339px] mb-24">
        <SearchInput
          value={search}
          onChange={setSearch}
          onCompositionEnd={(value) => console.log(value)}
        />
      </div>
      <div className="mb-21">
        <FilterList active="all" onChange={() => {}} />
      </div>
      <CityList cities={dummy_city} />
    </NarrowLayout>
  );
}

const dummy_city: City[] = [
  {
    city: "seoul",
    name: "서울",
    description: "서울입니다",
    thumbnail: "https://picsum.photos/300/200?random=1",
  },
  {
    city: "busan",
    name: "부산",
    description: "부산입니다",
    thumbnail: "https://picsum.photos/300/200?random=2",
  },
  {
    city: "jeju",
    name: "제주",
    description: "제주입니다",
    thumbnail: "https://picsum.photos/300/200?random=3",
  },
  {
    city: "gwangju",
    name: "광주",
    description: "광주입니다",
    thumbnail: "https://picsum.photos/300/200?random=4",
  },
];
