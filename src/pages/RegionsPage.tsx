
import { useEffect } from "react";
import Layout from "@/components/Layout";
import RegionCard from "@/components/RegionCard";
import { regions } from "@/utils/festivalData";
import { MapPin } from "lucide-react";

const RegionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Header */}
      <section className="page-header">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <MapPin size={40} className="mb-4 animate-float" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Regions of North India
            </h1>
            <p className="text-lg max-w-2xl">
              Discover the unique festivals and cultural traditions of different regions across North India
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RegionsPage;
