import SearchIcon from "@icons/search.svg?react";
import { useState } from "react";

interface Props {
  onCompositionEnd: (value: string) => void;
}

export default function SearchInput({ onCompositionEnd }: Props) {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="w-full relative">
      <input
        className="w-full rounded-10 h-40 border border-gray-200 pl-10 pr-36"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        onCompositionEnd={(e) => onCompositionEnd(e.currentTarget.value)}
      />
      <SearchIcon className="w-24 h-24  absolute top-8 right-12" />
    </div>
  );
}
