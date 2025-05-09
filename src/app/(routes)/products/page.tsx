"use client";
import Hero from "@/components/women/Hero";
import { product } from "@/data/product";
import ProductCard from "@/components/product/ProductCard";
import FilterBar from "@/components/product/FilterBar";
import { useMemo, useState } from "react";
import PriceSlider from "@/components/product/PriceSlider";
import { SortButton } from "@/components/product/SortButton";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const category =
    searchParams.get("category") || "";
  const [selectedFilters, setSelectedFilters] =
    useState<Record<string, string[]>>({
      Gender: [],
      Material: [],
      CaseSize: [],
      CaseMaterial: [],
      CrystalType: [],
      WaterResistance: [],
      Movement: [],
      Category: category ? [category] : [],
    });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [priceRange, setPriceRange] = useState<
    [number, number]
  >(() => {
    const prices = product.map(
      (p) => p.price || 0
    );
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return [min, max];
  });

  const [selectedPrice, setSelectedPrice] =
    useState<[number, number]>(priceRange);

  // Dynamically extract unique filter options from product data
  const filters = useMemo(() => {
    const genderSet = new Set<string>();
    const materialSet = new Set<string>();
    const caseSizeSet = new Set<string>();
    const caseMaterialSet = new Set<string>();
    const crystalTypeSet = new Set<string>();
    const waterResistanceSet = new Set<string>();
    const movementSet = new Set<string>();
    const categorySet = new Set<string>();

    product.forEach((p) => {
      if (p.gender) genderSet.add(p.gender);
      if (p.strap_material)
        materialSet.add(p.strap_material);
      if (p.case_size)
        caseSizeSet.add(p.case_size);
      if (p.case_material)
        caseMaterialSet.add(p.case_material);
      if (p.crystal_type)
        crystalTypeSet.add(p.crystal_type);
      if (p.water_resistance)
        waterResistanceSet.add(
          p.water_resistance
        );
      if (p.movement) movementSet.add(p.movement);
      if (p.category) categorySet.add(p.category);
    });

    return [
      {
        name: "Gender",
        options: Array.from(genderSet),
      },
      {
        name: "Material",
        options: Array.from(materialSet),
      },
      {
        name: "Case Size",
        options: Array.from(caseSizeSet).sort(
          (a, b) => {
            const numA = parseInt(a);
            const numB = parseInt(b);
            return numA - numB;
          }
        ),
      },
      {
        name: "Case Material",
        options: Array.from(caseMaterialSet),
      },
      {
        name: "Crystal Type",
        options: Array.from(crystalTypeSet),
      },
      {
        name: "Water Resistance",
        options: Array.from(
          waterResistanceSet
        ).sort((a, b) => {
          const numA = parseInt(a);
          const numB = parseInt(b);
          return numA - numB;
        }),
      },
      {
        name: "Movement",
        options: Array.from(movementSet),
      },
      {
        name: "Category",
        options: Array.from(categorySet),
      },
    ];
  }, []);

  const [sortValue, setSortValue] =
    useState("price-asc");

  const handleFilterChange = (
    filterName: string,
    values: string[]
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterName]: values,
    }));
  };

  const handlePriceChange = (
    newValue: number[]
  ) => {
    setSelectedPrice([newValue[0], newValue[1]]);
  };

  const filteredProducts = product.filter((p) => {
    const priceMatch =
      p.price >= selectedPrice[0] &&
      p.price <= selectedPrice[1];
    const genderMatch =
      selectedFilters.Gender.length === 0 ||
      selectedFilters.Gender.includes(p.gender);
    const materialMatch =
      selectedFilters.Material.length === 0 ||
      selectedFilters.Material.includes(
        p.strap_material
      );
    const caseSizeMatch =
      selectedFilters.CaseSize.length === 0 ||
      selectedFilters.CaseSize.includes(
        p.case_size
      );
    const caseMaterialMatch =
      selectedFilters.CaseMaterial.length === 0 ||
      selectedFilters.CaseMaterial.includes(
        p.case_material
      );
    const crystalTypeMatch =
      selectedFilters.CrystalType.length === 0 ||
      selectedFilters.CrystalType.includes(
        p.crystal_type
      );
    const waterResistanceMatch =
      selectedFilters.WaterResistance.length ===
        0 ||
      selectedFilters.WaterResistance.includes(
        p.water_resistance
      );
    const movementMatch =
      selectedFilters.Movement.length === 0 ||
      selectedFilters.Movement.includes(
        p.movement
      );

    const categoryMatch =
      selectedFilters.Category.length === 0 ||
      selectedFilters.Category.includes(
        p.category
      );

    return (
      priceMatch &&
      genderMatch &&
      materialMatch &&
      caseSizeMatch &&
      caseMaterialMatch &&
      crystalTypeMatch &&
      waterResistanceMatch &&
      movementMatch &&
      categoryMatch
    );
  });

  const sortedProducts = [
    ...filteredProducts,
  ].sort((a, b) => {
    if (sortValue === "price-asc")
      return a.price - b.price;
    if (sortValue === "price-desc")
      return b.price - a.price;
    if (sortValue === "name-asc")
      return a.name.localeCompare(b.name);
    if (sortValue === "name-desc")
      return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div>
      <Hero />

      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <PriceSlider
              selectedPrice={selectedPrice}
              onPriceChange={handlePriceChange}
              min={priceRange[0]}
              max={priceRange[1]}
            />
            <FilterBar
              filters={filters}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="md:w-3/4">
            <div className="flex pl-5 justify-between items-center">
              <h1 className="text-sm font-sans mb-8 text-start">
                {sortedProducts.length} Products
              </h1>
              <div>
                <SortButton
                  value={sortValue}
                  onChange={setSortValue}
                />
              </div>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
