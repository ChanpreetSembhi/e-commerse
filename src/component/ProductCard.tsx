import { RiHeartFill, RiHeartLine } from "@remixicon/react";
import { Product } from "../store/api";
import { useState } from "react";

function ProductCard(product: Product) {
  const [like, isLike] = useState(false);
  return (
    <div>
      <div className="relative">
        <img src={product.img} alt="product" className="rounded-xl" />
        <div
          className="bg-white rounded-full p-1.5 absolute top-0 right-0 m-3 cursor-pointer"
          onClick={() => isLike(!like)}
        >
          {!like ? <RiHeartLine className="size-4" /> : <RiHeartFill className="text-red-500 size-4" /> }
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="w-3/5">
          <h5 className="font-semibold text-sm pb-0.5 truncate">
            {product.name}
          </h5>
          <p className="text-gray-500 text-xs">{product.brand}</p>
        </div>
        <div className="bg-gray-100 text-xs md:text-sm rounded-lg py-2 px-4">
          ${product.price}.00
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
