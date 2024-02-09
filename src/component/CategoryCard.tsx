import { RiArrowRightLine } from "@remixicon/react";
import { Categories } from "../store/api";

export default function CategoryCard(category: Categories) {
  return (
    <div key={category.id}>
      <img src={category.img} alt="categories" className="rounded-xl" />
      <div className="flex items-center justify-between mt-3">
        <div>
          <h5 className="font-semibold pb-0.5 text-sm">{category.name}</h5>
          <p className="text-xs text-gray-500">Explore Now!</p>
        </div>
        <div>
          <RiArrowRightLine className="size-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
