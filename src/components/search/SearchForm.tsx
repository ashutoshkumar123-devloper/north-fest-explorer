
import { useState } from "react";
import { Search, Calendar, MapPin, Filter } from "lucide-react";
import { Region } from "@/utils/festivalData";

interface SearchFormProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  dateRange: { start: string; end: string };
  setDateRange: (range: { start: string; end: string }) => void;
  handleSearch: (e: React.FormEvent) => void;
  handleClearFilters: () => void;
  regions: Region[];
}

const SearchForm = ({
  searchTerm,
  setSearchTerm,
  selectedRegion,
  setSelectedRegion,
  dateRange,
  setDateRange,
  handleSearch,
  handleClearFilters,
  regions,
}: SearchFormProps) => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  
  const toggleFilters = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };

  return (
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
  );
};

export default SearchForm;
