
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { festivals, Festival, regions } from "@/utils/festivalData";
import SearchHeader from "@/components/search/SearchHeader";
import SearchForm from "@/components/search/SearchForm";
import SearchResults from "@/components/search/SearchResults";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [filteredFestivals, setFilteredFestivals] = useState<Festival[]>([]);
  
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
  
  return (
    <Layout>
      <SearchHeader />
      
      <SearchForm 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        dateRange={dateRange}
        setDateRange={setDateRange}
        handleSearch={handleSearch}
        handleClearFilters={handleClearFilters}
        regions={regions}
      />
      
      <SearchResults filteredFestivals={filteredFestivals} />
    </Layout>
  );
};

export default SearchPage;
