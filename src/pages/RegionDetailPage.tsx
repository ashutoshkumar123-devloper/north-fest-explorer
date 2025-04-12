
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FestivalsList from "@/components/FestivalsList";
import { 
  getRegionById, 
  getFestivalsByRegion,
  Festival
} from "@/utils/festivalData";
import { MapPin, ArrowLeft } from "lucide-react";

const RegionDetailPage = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const [region, setRegion] = useState(regionId ? getRegionById(regionId) : undefined);
  const [festivals, setFestivals] = useState<Festival[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (regionId) {
      const regionData = getRegionById(regionId);
      setRegion(regionData);
      
      if (regionData) {
        const festivalsList = getFestivalsByRegion(regionId);
        setFestivals(festivalsList);
      }
    }
  }, [regionId]);
  
  if (!region) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Region not found</h1>
          <p className="mb-6">Sorry, we couldn't find the region you're looking for.</p>
          <Link 
            to="/regions" 
            className="text-festival-red hover:text-festival-maroon font-medium inline-flex items-center"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Regions
          </Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      {/* Region Header */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={region.image}
          alt={region.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center text-white mb-2">
              <MapPin size={20} className="mr-2" />
              <div className="text-sm font-medium">
                {region.states.join(", ")}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{region.name}</h1>
          </div>
        </div>
      </section>
      
      {/* Navigation */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <Link 
            to="/regions" 
            className="text-gray-600 hover:text-festival-red font-medium inline-flex items-center"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Regions
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Region Description */}
        <div className="max-w-3xl mb-12">
          <p className="text-lg text-gray-700 mb-6">{region.description}</p>
          <div className="bg-festival-cream rounded-lg p-6">
            <h3 className="text-lg font-semibold text-festival-maroon mb-2">About this region</h3>
            <p className="text-gray-700">
              This region encompasses {region.states.join(", ")} and is known for its unique cultural heritage and 
              traditional celebrations. The festivals here reflect the local customs, history, and spiritual 
              beliefs of the people.
            </p>
          </div>
        </div>
        
        {/* Festivals in this Region */}
        <FestivalsList 
          festivals={festivals} 
          title={`Festivals in ${region.name}`}
          emptyMessage="No festivals found for this region. Check back soon for updates!"
        />
      </div>
    </Layout>
  );
};

export default RegionDetailPage;
