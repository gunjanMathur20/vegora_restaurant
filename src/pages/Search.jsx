import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import products from "../data/product";
import ProductCard from "../components/ProductCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = useQuery().get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return products.filter((item) =>
      item.name?.toLowerCase().includes(query.toLowerCase()) ||
      item.category?.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-[#07110a] text-white pt-[100px] px-4 sm:px-6 lg:px-10 pb-5">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-5xl font-black">
          Search Results for{" "}
          <span className="text-yellow-300">"{query}"</span>
        </h1>

        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Found {results.length} item(s)
        </p>
      </div>

      {/* EMPTY STATE */}
      {results.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-xl sm:text-2xl font-semibold">
            No results found 😕
          </h2>

          <p className="text-gray-500 mt-3">
            Try searching for Pizza, Burger, Combo etc.
          </p>

          <Link
            to="/products"
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-lime-400 to-yellow-300 text-black font-bold rounded-xl"
          >
            Browse All Products
          </Link>
        </div>
      )}

      {/* RESULTS */}
      {results.length > 0 && (
        <div className="max-w-6xl mx-auto">

          {/* CATEGORY TAG */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="px-4 py-2 text-xs uppercase tracking-[2px] bg-white/5 border border-white/10 rounded-full">
              Category: All Matching Items
            </span>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {results.map((item) => (
              <div
                key={item.id}
                className="hover:-translate-y-1 transition-all duration-300"
              >
                <ProductCard item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}