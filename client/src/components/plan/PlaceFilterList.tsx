import { Category } from "@/types";
import { categories } from "@/utils/constants";
import cn from "classnames";

export default function PlaceFilterList({
  selected,
  onFilter,
}: {
  selected: Category | null;
  onFilter: (category: Category) => void;
}) {
  return (
    <ul className="flex gap-x-6">
      {filters.map((filter) => {
        const active = filter === selected;
        return (
          <li key={filter}>
            <button
              className={cn(
                "border px-10 py-7 rounded-3 text-15 tracking-[0.15px]",
                {
                  "text-main border-main": active,
                  "text-gray-600 border-gray-100": !active,
                }
              )}
              onClick={() => onFilter(filter)}
            >
              {categories[filter]}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const filters: Category[] = ["attraction", "cafe", "restaurant"];
