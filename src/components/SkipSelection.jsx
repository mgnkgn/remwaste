import React, { useState, useEffect } from "react";
import Card from "../ui/Card";
import SkipPrice from "./SkipPrice";
import RoadInfo from "./RoadInfo";
import HeavyWaste from "./HeavyWaste";
import DayHire from "./DayHire";
import services from "../services";
import SkipSkeleton from "./SkipSkeleton";
import SelectButton from "./SelectButton";
import SortAndFilter from "./SortAndFilter";
import NextStep from "./NextStep";

const SkipSelection = () => {
  const [selectedSkipId, setSelectedSkipId] = useState("");
  const [showInfo, setShowInfo] = useState(null);
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("lowToHigh");

  const [allowedOnRoad, setAllowedOnRoad] = useState(false);
  const [allowedHeavyWaste, setAllowedHeavyWaste] = useState(false);
  const [noAdditionalCosts, setNoAdditionalCosts] = useState(false);

  useEffect(() => {
    const fetchSkips = async () => {
      setLoading(true);
      try {
        const data = await services.getSkips();
        setSkips(data);
      } catch (error) {
        console.error("Error fetching skips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSelectSkip = (id) => {
    if (id === selectedSkipId) {
      setSelectedSkipId("");
      return;
    }

    setSelectedSkipId(id);
  };

  const toggleInfo = (id) => {
    setShowInfo(showInfo === id ? null : id);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedSkips = [...skips].sort((a, b) => {
    const priceA = a.price_before_vat * (1 + a.vat / 100);
    const priceB = b.price_before_vat * (1 + b.vat / 100);
    const yardA = a.size;
    const yardB = b.size;

    switch (sortOrder) {
      case "lowToHigh":
        return priceA - priceB;
      case "highToLow":
        return priceB - priceA;
      case "smallToLarge":
        return yardA - yardB;
      case "largeToSmall":
        return yardB - yardA;
      default:
        return 0;
    }
  });

  const filteredSkips = sortedSkips.filter((skip) => {
    if (allowedOnRoad && !skip.allowed_on_road) return false;
    if (allowedHeavyWaste && !skip.allows_heavy_waste) return false;
    if (noAdditionalCosts && skip.transport_cost && skip.per_tonne_cost)
      return false;
    return true;
  });

  const selectedSkip = skips.find((skip) => skip.id === selectedSkipId);

  return (
    <div className="min-h-screen bg-gray-800 text-white p-10">
      <h3 className="text-3xl font-bold text-center mb-8 text-blue-500">
        Choose Your Skip Size
      </h3>

      <SortAndFilter
        sortOrder={sortOrder}
        handleSortChange={handleSortChange}
        allowedOnRoad={allowedOnRoad}
        setAllowedOnRoad={setAllowedOnRoad}
        allowedHeavyWaste={allowedHeavyWaste}
        setAllowedHeavyWaste={setAllowedHeavyWaste}
        noAdditionalCosts={noAdditionalCosts}
        setNoAdditionalCosts={setNoAdditionalCosts}
      />

      {/* Skip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, index) => <SkipSkeleton key={index} />)
          : filteredSkips.length > 0
          ? filteredSkips.map((skip) => (
              <Card
                key={skip.id}
                className="flex flex-col justify-between h-full"
              >
                <div className="flex flex-col gap-5 flex-grow">
                  <p className="text-3xl font-bold font-sans text-blue-500 flex flex-row items-end justify-start gap-2">
                    {skip.size} <span className="text-2xl">yards</span>
                  </p>

                  <div className="mb-5 flex flex-col">
                    <DayHire skip={skip} />
                    <RoadInfo skip={skip} />
                    <HeavyWaste skip={skip} />
                  </div>
                </div>

                <SkipPrice
                  skip={skip}
                  showInfo={showInfo}
                  toggleInfo={toggleInfo}
                />

                <SelectButton
                  skip={skip}
                  selectedSkipId={selectedSkipId}
                  handleSelectSkip={handleSelectSkip}
                />
              </Card>
            ))
          : !loading && (
              <p className="text-center text-gray-400 col-span-full">
                No skips match the selected filters.
              </p>
            )}
      </div>

      <NextStep
        selectedSkip={selectedSkip}
        handleSelectSkip={handleSelectSkip}
      />
    </div>
  );
};

export default SkipSelection;
