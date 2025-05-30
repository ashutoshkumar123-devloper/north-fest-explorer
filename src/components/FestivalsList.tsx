
import { Festival } from "@/utils/festivalData";
import FestivalCard from "./FestivalCard";

interface FestivalsListProps {
  festivals: Festival[];
  title: string;
  emptyMessage?: string;
  maxItems?: number;
}

const FestivalsList = ({ 
  festivals, 
  title, 
  emptyMessage = "No festivals found",
  maxItems
}: FestivalsListProps) => {
  const displayedFestivals = maxItems ? festivals.slice(0, maxItems) : festivals;
  
  return (
    <div className="mb-12">
      <h2 className="section-header">{title}</h2>
      
      {festivals.length === 0 ? (
        <div className="text-center py-8 text-gray-500">{emptyMessage}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedFestivals.map((festival) => (
            <FestivalCard key={festival.id} festival={festival} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FestivalsList;
