import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Calendar, MapPin, Search } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-festival-red font-bold text-2xl">Indian
          </span>
            <span className="text-festival-maroon font-bold text-2xl">Fest</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`flex items-center space-x-1 transition-colors ${isActive("/") ? "text-festival-red font-medium" : "text-gray-600 hover:text-festival-red"}`}>
              <Calendar size={18} />
              <span>Festivals</span>
            </Link>
            
            <Link to="/regions" className={`flex items-center space-x-1 transition-colors ${isActive("/regions") ? "text-festival-red font-medium" : "text-gray-600 hover:text-festival-red"}`}>
              <MapPin size={18} />
              <span>Regions</span>
            </Link>
            
            <Link to="/search" className={`flex items-center space-x-1 transition-colors ${isActive("/search") ? "text-festival-red font-medium" : "text-gray-600 hover:text-festival-red"}`}>
              <Search size={18} />
              <span>Search</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          <Link to="/" className={`block px-3 py-2 rounded-md ${isActive("/") ? "bg-festival-cream text-festival-red font-medium" : "text-gray-600 hover:bg-festival-cream hover:text-festival-red"}`} onClick={closeMenu}>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>Festivals</span>
            </div>
          </Link>
          
          <Link to="/regions" className={`block px-3 py-2 rounded-md ${isActive("/regions") ? "bg-festival-cream text-festival-red font-medium" : "text-gray-600 hover:bg-festival-cream hover:text-festival-red"}`} onClick={closeMenu}>
            <div className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>Regions</span>
            </div>
          </Link>
          
          <Link to="/search" className={`block px-3 py-2 rounded-md ${isActive("/search") ? "bg-festival-cream text-festival-red font-medium" : "text-gray-600 hover:bg-festival-cream hover:text-festival-red"}`} onClick={closeMenu}>
            <div className="flex items-center space-x-2">
              <Search size={18} />
              <span>Search</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>;
};
export default Navbar;