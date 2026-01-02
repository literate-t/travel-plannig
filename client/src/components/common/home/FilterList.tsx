import FilterButton from "./FilterButton";

const filters = [
  {
    key: "all",
    value: "전체",
  },
  { key: "domestic", value: "국내" },
  { key: "international", value: "해외" },
];
type Filter = (typeof filters)[number]["key"];

interface Props {
  active: Filter;
  onChange: (value: Filter) => void;
}

export default function FilterList({ active, onChange }: Props) {
  return (
    <div className="flex justify-center gap-x-25">
      {filters.map((filter) => (
        <FilterButton
          key={filter.key}
          active={filter.key === active}
          onClick={() => onChange(filter.key)}
        >
          {filter.value}
        </FilterButton>
      ))}
    </div>
  );
}
