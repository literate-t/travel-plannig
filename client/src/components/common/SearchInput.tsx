import useDebounce from "@/hooks/useDebounce";
import SearchIcon from "@icons/search.svg?react";
import { ChangeEvent, useState } from "react";

interface Props {
  onSearch: (value: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
  const [search, setSearch] = useState<string>("");

  const debounce = useDebounce();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);
    debounce(() => onSearch(value), 500);
  };

  return (
    <div className="w-full relative">
      <input
        className="w-full rounded-10 h-40 border border-gray-200 pl-10 pr-36"
        type="text"
        value={search}
        onChange={handleSearch}
      />
      <SearchIcon className="w-24 h-24  absolute top-8 right-12" />
    </div>
  );
}
