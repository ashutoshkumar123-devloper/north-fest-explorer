
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getFestivalById, getRegionById } from "@/utils/festivalData";
import { formatDate, isUpcoming, getDaysRemaining } from "@/utils/dateUtils";
import { Calendar, MapPin, ArrowLeft, ArrowRight } from "lucide-react";

const FestivalDetailPage = () => {
  const { festivalId } = useParams<{ festivalId: string }>();
  const [festival, setFestival] = useState(festivalId ? getFestivalById(festivalId) : undefined);
  const [region, setRegion] = useState(undefined);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (festivalId) {
      const festivalData = getFestivalById(festivalId);
      setFestival(festivalData);
      
      if (festivalData) {
        // Try to find a matching region
        const regions = festivalData.region.split(",").map(r => r.trim());
        // This is a simplification - ideally we'd have proper mapping between festivals and regions
        const matchingRegionId = regions[0]?.toLowerCase().replace(/\s+/g, "-");
        if (matchingRegionId) {
          setRegion(getRegionById(matchingRegionId));
        }
      }
    }
  }, [festivalId]);
  
  if (!festival) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Festival not found</h1>
          <p className="mb-6">Sorry, we couldn't find the festival you're looking for.</p>
          <Link 
            to="/" 
            className="text-festival-red hover:text-festival-maroon font-medium inline-flex items-center"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Festivals
          </Link>
        </div>
      </Layout>
    );
  }
  
  const upcoming = isUpcoming(festival.date);
  const daysRemaining = getDaysRemaining(festival.date);
  
  return (
    <Layout>
      {/* Festival Header */}
      <section className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={festival.image}
          alt={festival.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/30 flex items-end">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center text-white mb-2">
              <MapPin size={20} className="mr-2" />
              <div className="text-sm font-medium">
                {festival.location}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{festival.name}</h1>
            <div className="flex items-center text-white">
              <Calendar size={20} className="mr-2" />
              <div className="text-sm font-medium">
                {formatDate(festival.date)}
                {upcoming && (
                  <span className="ml-2 bg-festival-red text-white px-2 py-1 rounded-full text-xs">
                    {daysRemaining === 0 ? "Today" : 
                    `In ${daysRemaining} day${daysRemaining > 1 ? 's' : ''}`}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4 py-3">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-festival-red font-medium inline-flex items-center"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Festivals
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-festival-maroon mb-4">About the Festival</h2>
              <p className="text-gray-700 mb-6 text-lg">{festival.longDescription}</p>
              
              <h2 className="text-2xl font-bold text-festival-maroon mb-4 mt-8">Traditions & Celebrations</h2>
              <ul className="space-y-2 mb-6">
                {festival.traditions.map((tradition, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-festival-gold mr-2">•</span>
                    <span>{tradition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 border mb-6">
              <h3 className="text-lg font-semibold text-festival-maroon mb-4">Festival Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Date</h4>
                  <div className="flex items-center mt-1">
                    <Calendar size={18} className="text-festival-gold mr-2" />
                    <span>{formatDate(festival.date)}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Location</h4>
                  <div className="flex items-center mt-1">
                    <MapPin size={18} className="text-festival-gold mr-2" />
                    <span>{festival.location}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Region</h4>
                  <div className="mt-1">
                    <span>{festival.region}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Travel Tips Box */}
            <div className="bg-festival-cream rounded-lg p-6">
              <h3 className="text-lg font-semibold text-festival-maroon mb-4">Travel Tips</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-festival-gold mr-2">•</span>
                  <span>Book accommodations well in advance as they fill up quickly during festival time.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-festival-gold mr-2">•</span>
                  <span>Dress appropriately for the weather and cultural context of the festival.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-festival-gold mr-2">•</span>
                  <span>Try the local festival foods and specialties for an authentic experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-festival-gold mr-2">•</span>
                  <span>Carry cash as many small vendors may not accept cards.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 border-t pt-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-festival-maroon mb-4">
              Explore More Cultural Experiences
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/" 
                className="bg-festival-red text-white font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors hover:bg-festival-maroon"
              >
                <Calendar size={18} className="mr-2" />
                Browse All Festivals
              </Link>
              <Link 
                to="/regions" 
                className="bg-white border border-festival-red text-festival-red font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors hover:bg-festival-cream"
              >
                <MapPin size={18} className="mr-2" />
                Explore Regions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FestivalDetailPage;
