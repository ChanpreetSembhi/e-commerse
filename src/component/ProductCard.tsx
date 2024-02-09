import { Product } from "../store/api";

function ProductCard(product: Product) {
  return (
    <div>
      <img src={product.img} alt="product" className="rounded-xl" />
      <div className="flex items-center justify-between mt-4">
        <div className="w-3/5">
          <h5 className="font-semibold text-sm pb-0.5 truncate">{product.name}</h5>
          <p className="text-gray-500 text-xs">{product.brand}</p>
        </div>
        <div className="bg-gray-100 text-xs md:text-sm rounded-lg py-2 px-4">${product.price}.00</div>
      </div>
    </div>
  );
}

export default ProductCard;
