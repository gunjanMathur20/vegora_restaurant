import products from "../data/product"
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="w-full py-12 px-4 md:px-12 lg:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        New Product
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}










