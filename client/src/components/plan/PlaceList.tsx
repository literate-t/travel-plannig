import HeartIcon from "@/assets/icons/like.svg?react";
import PlusIcon from "@/assets/icons/plus.svg?react";
import StarIcon from "@/assets/icons/star.svg?react";
import { Place } from "@/types";
import { categories } from "@/utils/constants";

interface Props {
  places: Place[];
}
export default function PlaceList({ places }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {places.map((place) => (
        <PlaceItem key={`${place.city}_${place.name}`} place={place} />
      ))}
    </div>
  );
}

function PlaceItem({ place }: { place: Place }) {
  return (
    <div className="flex gap-x-11 min-h-[72px] items-center mb-24">
      <img src={place.thumbnail} className="w-68 h-68 rounded-6 bg-bg" />
      <div className="flex-1 flex flex-col items-start">
        <h6 className="text-17 font-semibold tracking-[0.17px]">
          {place.name}
        </h6>
        <p className="text-14 text-gray-500 tracking-[0.14px]">
          <span className="text-main font-semibold mr-5">
            {categories[place.category]}
          </span>
          {place.address}
        </p>
        <div className="flex text-14 tracking-[0.14px] text-gray-600">
          <span>
            <HeartIcon className="inline-block w-24 h-24 mr-4" />
            {place.likes}
          </span>
          <span>
            <StarIcon className="inline-block w-24 h-24 mr-4" />
            {place.rating}
          </span>
        </div>
      </div>
      <button>
        <div className="flex justify-center items-center w-45 h-68 bg-gray-100 rounded-3">
          <PlusIcon className="w-24 h-24" />
        </div>
      </button>
    </div>
  );
}
