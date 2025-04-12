
import { Link } from "react-router-dom";
import { Festival } from "@/utils/festivalData";
import { getShortDate, isUpcoming, getDaysRemaining } from "@/utils/dateUtils";

interface FestivalCardProps {
  festival: Festival;
}

const FestivalCard = ({ festival }: FestivalCardProps) => {
  const upcoming = isUpcoming(festival.date);
  const daysRemaining = getDaysRemaining(festival.date);
  
  return (
    <Link to={`/festival/${festival.id}`} className="festival-card group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="festival-date-badge">
          {upcoming ? (
            daysRemaining === 0 ? "Today" : 
            `In ${daysRemaining} day${daysRemaining > 1 ? 's' : ''}`
          ) : (
            getShortDate(festival.date)
          )}
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="text-xl font-bold text-festival-maroon mb-2">{festival.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{festival.description}</p>
        <div className="mt-auto">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{festival.region}</span> | {getShortDate(festival.date)}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FestivalCard;
