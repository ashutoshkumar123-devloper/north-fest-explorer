
import { Search } from "lucide-react";

const SearchHeader = () => {
  return (
    <section className="page-header">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Search size={40} className="mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Search Festivals
          </h1>
          <p className="text-lg max-w-2xl">
            Find the perfect cultural events for your India journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchHeader;
