
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import FestivalCard from "@/components/FestivalCard";
import { festivals, Festival, regions, Region } from "@/utils/festivalData";
import { formatDate } from "@/utils/dateUtils";
import { Search, Calendar, MapPin, Filter } from "lucide-react";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [filteredFestivals, setFilteredFestivals] = useState<Festival[]>([]);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    updateFilteredFestivals();
  }, [searchTerm, selectedRegion, dateRange]);
  
  const updateFilteredFestivals = () => {
    let filtered = [...festivals];
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(festival => 
        festival.name.toLowerCase().includes(term) || 
        festival.description.toLowerCase().includes(term) ||
        festival.location.toLowerCase().includes(term) ||
        festival.region.toLowerCase().includes(term)
      );
    }
    
    // Filter by region
    if (selectedRegion) {
      const region = regions.find(r => r.id === selectedRegion);
      if (region) {
        filtered = filtered.filter(festival => 
          festival.region.includes(region.name) || 
          region.states.some(state => festival.region.includes(state) || festival.location.includes(state))
        );
      }
    }
    
    // Filter by date range
    if (dateRange.start) {
      const startDate = new Date(dateRange.start);
      filtered = filtered.filter(festival => new Date(festival.date) >= startDate);
    }
    
    if (dateRange.end) {
      const endDate = new Date(dateRange.end);
      filtered = filtered.filter(festival => new Date(festival.date) <= endDate);
    }
    
    setFilteredFestivals(filtered);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilteredFestivals();
  };
  
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedRegion("");
    setDateRange({ start: "", end: "" });
  };
  
  const toggleFilters = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };
  
  return (
    <Layout>
      {/* Header */}
      <section className="page-header">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Search size={40} className="mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Search Festivals
            </h1>
            <p className="text-lg max-w-2xl">
              Find the perfect cultural events for your North India journey
            </p>
          </div>
        </div>
      </section>
      
      {/* Search Form */}
      <div className="bg-white shadow-md border-b">
        <div className="container mx-auto px-4 py-6">
          <form onSubmit={handleSearch} className="space-y-4">
            {/* Main Search */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search festivals, locations, or keywords"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-festival-red focus:border-festival-red"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-festival-red text-white font-medium py-3 px-6 rounded-lg hover:bg-festival-maroon transition-colors"
                >
                  Search
                </button>
                
                <button
                  type="button"
                  className="border border-gray-300 bg-white text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors md:hidden"
                  onClick={toggleFilters}
                >
                  <Filter size={20} />
                </button>
              </div>
            </div>
            
            {/* Advanced Filters */}
            <div className={`space-y-4 ${isFilterExpanded || window.innerWidth >= 768 ? "block" : "hidden"}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Region
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin size={18} className="text-gray-400" />
                    </div>
                    <select
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-festival-red focus:border-festival-red appearance-none"
                      value={selectedRegion}
                      onChange={(e) => setSelectedRegion(e.target.value)}
                    >
                      <option value="">All Regions</option>
                      {regions.map((region) => (
                        <option key={region.id} value={region.id}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-festival-red focus:border-festival-red"
                      value={dateRange.start}
                      onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="date"
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-festival-red focus:border-festival-red"
                      value={dateRange.end}
                      onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-festival-red hover:text-festival-maroon font-medium"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      {/* Search Results */}
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
    </Layout>
  );
};

export default SearchPage;
