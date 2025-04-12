
import FestivalCard from "@/components/FestivalCard";
import { Festival } from "@/utils/festivalData";

interface SearchResultsProps {
  filteredFestivals: Festival[];
}

const SearchResults = ({ filteredFestivals }: SearchResultsProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <h2 className="section-header">
          {filteredFestivals.length > 0 
            ? `Found ${filteredFestivals.length} Festivals` 
            : "No Festivals Found"}
        </h2>
        
        {filteredFestivals.length === 0 && (
          <p className="text-gray-600 mt-4">
            Try adjusting your search criteria or browse all festivals.
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFestivals.map((festival) => (
          <FestivalCard key={festival.id} festival={festival} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
