import Filter from "../component/FilterSidebar";
import ProductCard from "../component/ProductCard";
import { womenPageProducts } from "../store/api";

function WomenProducts() {
  return (
    <section className="pb-10">
      <div className="grid grid-cols-4 mb-8">
        <Filter />
        <div className="col-span-3 p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xl font-semibold">Women’s Clothing</h4>
            <div className="flex items-center space-x-3 *:text-sm">
              <a href="#">New</a>
              <a href="#">Recomended</a>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {womenPageProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                img={product.img}
                name={product.name}
                brand={product.brand}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-bold border-l-4 border-indigo-500 pl-2 mb-5">
        Clothing for Women Online in India
        </h4>
        <div className="mb-5">
        <h6 className="text-gray-600 font-medium pb-4">Reexplore Women's Clothing Collection Online at Euphoria</h6>
        <p className="text-gray-600 text-sm pb-2">Women's Clothing – Are you searching for the best website to buy Clothing for Women online in India? Well, your search for the coolest and most stylish womens clothing ends here. From trendy Casual Womens Wear Online shopping to premium quality cotton women's apparel, Euphoria has closet of Women Collection covered with the latest and best designs of Women's Clothing Online.</p>
        <p className="text-gray-600 text-sm">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. </p>
        </div>
        <div>
          <h6 className="text-gray-600 font-medium pb-4">One-Stop Destination to Shop Every Clothing for Women: Euphoria</h6>
          <p className="text-gray-600 text-sm pb-2">Today, Clothing for Women is gaining more popularity above all. This is because gone are the days when women were used to carrying uncomfortable fashion. Today, a lady looks prettier when she is in Casual Womens Wear which is a comfortable outfit. Concerning this, <span className="font-medium">Euphoria</span> has a big fat range of Stylish Women's Clothing that would make her the winner wherever she goes. </p>
          <p className="text-gray-600 text-sm">Our collection of clothes for women will make you the trendsetter with an iconic resemblance of choice in Womens Wear. It is quite evident to say that there are very few Womens Clothing online stores where you can buy Western Wear for Women comprising the premium material and elegant design that you are always seeking for. Basically, </p>
        </div>
      </div>
    </section>
  );
}
export default WomenProducts;
