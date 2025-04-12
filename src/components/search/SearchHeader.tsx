
import { Search } from "lucide-react";

const SearchHeader = () => {
  return (
    <section className="page-header bg-festival-maroon border-b-4 border-festival-gold py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 bg-white p-2 border-4 border-festival-gold rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
            <Search size={32} className="text-festival-maroon" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white" style={{ fontFamily: 'monospace' }}>
            SEARCH FESTIVALS
          </h1>
          <p className="text-lg text-festival-cream font-bold" style={{ fontFamily: 'monospace' }}>
            FIND YOUR NEXT ADVENTURE
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchHeader;
