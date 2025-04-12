
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import FestivalsList from "@/components/FestivalsList";
import RegionCard from "@/components/RegionCard";
import { Calendar, ArrowRight, MapPin } from "lucide-react";
import { 
  getUpcomingFestivals, 
  getFeaturedFestivals, 
  regions 
} from "@/utils/festivalData";

const Index = () => {
  const [upcomingFestivals, setUpcomingFestivals] = useState(getUpcomingFestivals());
  const [featuredFestivals, setFeaturedFestivals] = useState(getFeaturedFestivals());
  const featuredRegions = regions.slice(0, 3);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-festival-maroon to-festival-red text-white">
        <div className="container mx-auto px-4">
          <div className="md:w-2/3">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Explore North India's Vibrant Festivals
            </h1>
            <p className="text-lg mb-8 text-gray-100">
              Discover the colorful traditions, celebrations, and cultural events 
              across Northern India's diverse regions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/regions" 
                className="bg-white text-festival-red font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors hover:bg-festival-cream"
              >
                <MapPin size={18} className="mr-2" />
                Explore Regions
              </Link>
              <Link 
                to="/search" 
                className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors hover:bg-white/10"
              >
                <Calendar size={18} className="mr-2" />
                View Calendar
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-1/3 h-full hidden md:block">
          {/* Decorative element - could be replaced with an actual image */}
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M39.9,-68.3C51.1,-62.1,59.9,-51.1,65.9,-39C71.9,-26.8,75.1,-13.4,76.3,0.7C77.5,14.8,76.7,29.6,69.8,41.1C62.9,52.6,49.9,60.8,36.6,67.2C23.3,73.5,9.7,78,-2.8,82.1C-15.3,86.3,-30.5,90.1,-42.6,85.2C-54.7,80.4,-63.6,66.9,-71.5,53.3C-79.3,39.6,-86,25.8,-88.6,10.8C-91.2,-4.2,-89.7,-20.4,-83.6,-34.1C-77.4,-47.9,-66.6,-59.1,-53.2,-64.5C-39.9,-69.9,-24.1,-69.3,-9.7,-66.9C4.7,-64.4,19.3,-60.1,29.6,-56.6C39.9,-53.1,50.1,-50.2,60.4,-44.1C70.7,-37.9,81,-28.4,78.8,-18.3C76.6,-8.2,62,-1.1,53.5,7.8C45,16.6,42.7,27.1,37,37.2C31.3,47.2,22.2,56.9,11.1,59.8C0.1,62.8,-12.9,59.1,-25.3,54.9C-37.7,50.7,-49.4,46,-59.9,38.1C-70.4,30.1,-79.6,18.9,-81.8,6.1C-84,-6.7,-79.2,-20.9,-71.8,-33.4C-64.5,-45.9,-54.7,-56.8,-42.7,-63.1C-30.7,-69.5,-16.7,-71.4,-1.9,-68.5C12.9,-65.6,28.6,-58,39.9,-53.2C51.2,-48.5,58.1,-46.8,63.5,-41.5C68.9,-36.3,72.8,-27.5,66.3,-17.7C59.9,-7.9,43.1,3,33.9,14.6C24.6,26.1,23,38.2,17.9,43.3C12.9,48.5,4.4,46.6,-2.4,50.1C-9.2,53.5,-14.5,62.4,-21.7,64.6C-28.9,66.9,-38,62.6,-44.8,56.6C-51.7,50.6,-56.2,42.9,-60.2,35.1C-64.1,27.2,-67.5,19.1,-69.8,10.3C-72.1,1.4,-73.4,-8.2,-70.6,-16.4C-67.8,-24.6,-60.9,-31.5,-53.2,-38.2C-45.5,-44.9,-37,-51.5,-27.9,-56.3C-18.8,-61.1,-9.4,-64.2,1.5,-66.6C12.4,-69,24.7,-70.8,37.6,-67.9C50.4,-65.1,63.7,-57.6,69,-47.5C74.3,-37.4,71.6,-24.6,67.2,-13.4C62.9,-2.3,56.8,7.3,51.5,16C46.2,24.7,41.5,32.5,36.4,42.3C31.2,52.1,25.5,63.9,17.7,66.9C9.9,69.8,0,63.8,-6.7,56.5C-13.3,49.2,-16.7,40.5,-24.1,35.9C-31.6,31.2,-43.2,30.5,-49.8,25.3C-56.3,20.1,-57.9,10.1,-60.6,-0.7C-63.4,-11.5,-67.3,-22.9,-64.6,-32C-61.8,-41.1,-52.5,-47.8,-42.6,-54.1C-32.7,-60.4,-22.3,-66.3,-11.1,-67.2C0.1,-68.2,11.2,-64.2,20.9,-60.9C30.7,-57.7,39.1,-55.1,45.7,-50.6C52.4,-46,57.2,-39.4,57.6,-32.1C58,-24.7,54,-16.6,51.5,-9.2C49,-1.8,48,-5.1,47.3,0.1C46.7,5.3,46.4,11.9,43.7,17.2C41,22.6,35.9,26.6,30.3,30.7C24.8,34.8,18.9,38.9,12.3,43.1C5.7,47.3,-1.5,51.7,-9.9,52.7C-18.3,53.7,-27.8,51.3,-34.5,46.3C-41.1,41.4,-44.8,33.7,-49.4,26.4C-54.1,19.1,-59.8,12,-60.5,4.6C-61.2,-2.9,-56.9,-10.6,-53.2,-18.6C-49.6,-26.5,-46.6,-34.6,-41.5,-44.3C-36.4,-54,-29.2,-65.3,-19.7,-70.3C-10.3,-75.3,1.4,-74,12.6,-71.9C23.7,-69.8,34.2,-66.8,37.4,-58.3C40.6,-49.9,36.5,-36,36.9,-24.8C37.4,-13.6,42.4,-5.2,44.1,4.5C45.8,14.3,44.2,25.3,40.3,35.5C36.5,45.7,30.5,55.1,22.2,59.4C13.9,63.8,3.4,63.2,-7.2,63C-17.9,62.9,-28.6,63.3,-36.9,58.9C-45.2,54.5,-51,45.3,-57,36.4C-63,27.5,-69.3,18.8,-72.7,8.6C-76.1,-1.6,-76.7,-13.1,-71.9,-22.1C-67.1,-31.1,-56.9,-37.4,-47.1,-44.1C-37.3,-50.8,-27.9,-57.8,-17.4,-60.7C-6.9,-63.6,4.7,-62.4,15.5,-61C26.2,-59.7,36.1,-58.1,41.6,-52.3C47.1,-46.4,48.2,-36.1,48.8,-27.3C49.5,-18.4,49.7,-10.8,50.2,-2.6C50.7,5.6,51.4,14.5,48.6,22.1C45.8,29.7,39.4,36.1,32.5,42.8C25.7,49.5,18.3,56.5,10.3,58.3C2.3,60,-6.4,56.5,-14.2,53.1C-22.1,49.8,-29.2,46.7,-35.4,41.9C-41.5,37.1,-46.8,30.7,-51.6,23.6C-56.3,16.5,-60.7,8.7,-61.3,0.5C-61.8,-7.8,-58.5,-16.5,-52.9,-22.5C-47.3,-28.6,-39.3,-32,-32.2,-37.5C-25.1,-43,-18.8,-50.7,-10.8,-55.3C-2.8,-60,6.8,-61.6,16.2,-60.5C25.6,-59.3,34.7,-55.3,43.1,-50.9C51.6,-46.4,59.3,-41.4,64.2,-34.3C69.2,-27.2,71.3,-18,69.4,-9.9C67.5,-1.8,61.7,5.2,54.7,10.2C47.7,15.1,39.5,18,33.6,24.2C27.7,30.4,24.1,39.9,18,48.2C11.9,56.5,3.4,63.5,-6.7,65.6C-16.8,67.8,-28.5,65.1,-39.4,60.3C-50.4,55.5,-60.6,48.6,-64.5,39.1C-68.5,29.5,-66.1,17.3,-65.5,5.9C-64.9,-5.5,-66,-17.1,-60.2,-23.3C-54.4,-29.5,-41.7,-30.4,-32.7,-35.3C-23.7,-40.3,-18.5,-49.2,-9.2,-55C0.1,-60.8,13.4,-63.4,24.9,-63.8C36.3,-64.1,45.9,-62.2,54.3,-58.2C62.7,-54.1,69.9,-48,72.1,-40.3C74.3,-32.7,71.6,-23.6,70.1,-15.1C68.7,-6.7,68.5,1.2,67.3,8.9C66.2,16.5,64.1,23.9,60.1,30.5C56.1,37.1,50.1,43,43,48.3C35.9,53.6,27.7,58.4,19.4,60.7C11.1,63,2.6,62.8,-5.6,63.8C-13.9,64.8,-22,67,-30.7,66.4C-39.3,65.8,-48.6,62.3,-55.4,56.3C-62.2,50.4,-66.7,41.9,-70.2,33.2C-73.7,24.5,-76.3,15.6,-76.3,6.9C-76.3,-1.8,-73.6,-10.1,-69.1,-17.3C-64.5,-24.4,-58,-30.3,-51.2,-36.6C-44.5,-42.9,-37.6,-49.5,-29.4,-52.8C-21.3,-56.1,-11.9,-56.1,-2.7,-56.3C6.5,-56.6,13.1,-57.1,19.6,-54.5C26.1,-51.9,32.6,-46.2,38.6,-41.2C44.6,-36.1,50.3,-31.7,52.6,-25.8C54.8,-19.9,53.7,-12.4,54.5,-5.2C55.3,2,58,8.9,57.9,15.3C57.8,21.7,54.9,27.6,50.5,32.5C46.1,37.3,40.2,41.1,33.9,44.3C27.5,47.5,20.8,50.1,13.3,50.9C5.9,51.7,-2.3,50.7,-9.5,48.8C-16.7,46.8,-22.9,44,-30.2,41C-37.4,38.1,-45.7,35.2,-51.8,29.5C-57.9,23.9,-61.9,15.6,-64.2,7C-66.5,-1.6,-67.3,-10.6,-64.5,-18.2C-61.7,-25.8,-55.4,-32.1,-48.5,-38.1C-41.6,-44.1,-34.2,-49.9,-25.8,-52.5C-17.4,-55.1,-8.7,-54.4,0.7,-55.5C10.1,-56.6,20.2,-59.4,28.1,-57.9C36,-56.4,41.7,-50.5,47,-44.8C52.2,-39.1,56.9,-33.6,59.4,-27.3C61.9,-21,62.2,-13.8,62.9,-6.7C63.7,0.5,64.9,7.6,63.2,14.1C61.6,20.7,57.1,26.8,52.3,33.2C47.4,39.6,42.2,46.3,35.2,50.9C28.2,55.6,19.5,58.2,10.7,59.1C1.9,60,-6.9,59.1,-15.4,57.3C-23.8,55.4,-31.9,52.5,-40.1,48.7C-48.4,44.9,-56.8,40.1,-61.4,33C-66,25.8,-66.8,16.2,-68.5,6.7C-70.2,-2.9,-72.9,-12.4,-70.1,-20.4C-67.3,-28.4,-59,-34.9,-49.9,-39.4C-40.8,-43.9,-30.9,-46.3,-22.2,-51.1C-13.5,-55.9,-6,-63,-0.3,-62.5C5.4,-62,9.3,-54,15.9,-49.9C22.6,-45.8,32,-45.7,38.3,-42.3C44.6,-38.9,47.9,-32.2,51.2,-25.5C54.6,-18.8,57.9,-12.1,57.3,-5.6C56.6,0.9,51.9,7.3,48.6,14.1C45.3,20.9,43.4,28.1,39.5,34.5C35.6,40.9,29.8,46.5,22.9,49.9C16,53.3,8.2,54.5,0.6,55.1C-7,55.7,-14,55.8,-20.5,53.9C-27,52,-33,48.1,-39.2,43.5C-45.4,38.9,-51.7,33.5,-55.3,26.8C-59,20.1,-60,12.1,-60.8,4C-61.6,-4.1,-62.3,-12.2,-60.6,-20.5C-58.9,-28.7,-54.8,-37.1,-48.4,-44.5C-42,-51.9,-33.2,-58.5,-23.7,-62.4C-14.1,-66.3,-3.9,-67.5,6,-66.9C15.8,-66.2,25.4,-63.6,32.7,-58.8C40,-54,45,-47,50.2,-39.9C55.4,-32.8,60.7,-25.7,63.7,-17.8C66.7,-9.9,67.4,-1.2,67.3,7.4C67.1,16,66.1,24.5,62.5,32.2C58.9,39.9,52.7,46.6,45.3,51.7C37.9,56.8,29.3,60.2,20.7,62.2C12.1,64.2,3.5,64.9,-4.8,64.5C-13.1,64.1,-21.2,62.7,-28.7,60C-36.3,57.3,-43.4,53.3,-49.3,47.7C-55.2,42.1,-59.9,34.9,-63.1,27.1C-66.2,19.3,-67.8,11,-66.9,3.2C-66,3.2,9,-1,5,-1,5,-1,9,9.3,9,9.3,9,9.3,0,0,0,0"/>
            </svg>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Upcoming Festivals */}
        <FestivalsList 
          festivals={upcomingFestivals} 
          title="Upcoming Festivals" 
          emptyMessage="No upcoming festivals at the moment. Check back soon!" 
        />
        
        {/* Featured Regions */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="section-header">Popular Regions</h2>
            <Link to="/regions" className="text-festival-red hover:text-festival-maroon font-medium inline-flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRegions.map((region) => (
              <RegionCard key={region.id} region={region} />
            ))}
          </div>
        </div>
        
        {/* Featured Festivals */}
        <FestivalsList 
          festivals={featuredFestivals} 
          title="Featured Festivals" 
        />
        
        {/* Call to Action */}
        <div className="bg-festival-cream rounded-lg p-8 text-center my-12">
          <h2 className="text-2xl font-bold text-festival-maroon mb-4">
            Planning a Trip to North India?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Discover the perfect festivals to include in your itinerary. From colorful Holi celebrations
            to traditional harvest festivals, find the cultural experiences that will make your trip unforgettable.
          </p>
          <Link 
            to="/search" 
            className="bg-festival-red text-white font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center transition-colors hover:bg-festival-maroon"
          >
            <Calendar size={18} className="mr-2" />
            Search by Date
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
