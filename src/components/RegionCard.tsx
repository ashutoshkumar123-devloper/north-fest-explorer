
import { Link } from "react-router-dom";
import { Region } from "@/utils/festivalData";

interface RegionCardProps {
  region: Region;
}

const RegionCard = ({ region }: RegionCardProps) => {
  return (
    <Link to={`/region/${region.id}`} className="region-card group block">
      <div className="relative h-64 overflow-hidden">
        <img
          src={region.image}
          alt={region.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-1">{region.name}</h3>
            <p className="text-sm text-gray-200">{region.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RegionCard;
