import SearchIcon from "@icons/search.svg?react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onCompositionEnd: (value: string) => void;
}

export default function SearchInput({
  value,
  onChange,
  onCompositionEnd,
}: Props) {
  return (
    <div className="w-full relative">
      <input
        className="w-full rounded-10 h-40 border border-gray-200 pl-10 pr-36"
        type="text"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        onCompositionEnd={(e) => onCompositionEnd(e.currentTarget.value)}
      />
      <SearchIcon className="w-24 h-24  absolute top-8 right-12" />
    </div>
  );
}
