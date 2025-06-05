/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Hero from "@/components/women/Hero";
import ProductCard from "@/components/product/ProductCard";
import FilterBar from "@/components/product/FilterBar";
import PriceSlider from "@/components/product/PriceSlider";
import { SortButton } from "@/components/product/SortButton";
import { useSearchParams } from "next/navigation";
import {
  SlidersHorizontal,
  X,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { ProductProps } from "@/types";
import { getProducts } from "@/services/productService";
import { getCategoryById } from "@/services/categoryService"; // Make sure this path is correct

const Page = () => {
  const searchParams = useSearchParams();
  const category =
    searchParams.get("category") || "";

  const [products, setProducts] = useState<
    ProductProps[]
  >([]);
  const [categoryNameMap, setCategoryNameMap] =
    useState<Record<string, string>>({});
  const [filterBarOpen, setFilterBarOpen] =
    useState(false);
  const [selectedFilters, setSelectedFilters] =
    useState<Record<string, string[]>>({
      Gender: ["Men"],
      Material: [],
      CaseSize: [],
      CaseMaterial: [],
      CrystalType: [],
      WaterResistance: [],
      Movement: [],
      Category: category ? [category] : [],
    });

  const [priceRange, setPriceRange] = useState<
    [number, number]
  >([0, 0]);
  const [selectedPrice, setSelectedPrice] =
    useState<[number, number]>([0, 0]);
  const [sortValue, setSortValue] =
    useState("price-asc");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);

      // Fetch category names
      const uniqueCategoryIds = [
        ...new Set(
          data
            .map(
              (p: { categoryId: never }) =>
                p.categoryId
            )
            .filter(Boolean)
        ),
      ] as string[];

      const nameMap: Record<string, string> = {};
      await Promise.all(
        uniqueCategoryIds.map(async (id) => {
          try {
            const cat = await getCategoryById(id);
            nameMap[id] = cat.name;
          } catch (err) {
            console.error(
              "Failed to fetch category",
              id
            );
          }
        })
      );

      setCategoryNameMap(nameMap);

      const prices = data.map(
        (p: { price: never }) => p.price || 0
      );
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPriceRange([min, max]);
      setSelectedPrice([min, max]);
    };

    fetchProducts();
  }, []);

  const filters = useMemo(() => {
    const genderSet = new Set<string>();
    const materialSet = new Set<string>();
    const caseSizeSet = new Set<string>();
    const caseMaterialSet = new Set<string>();
    const crystalTypeSet = new Set<string>();
    const waterResistanceSet = new Set<string>();
    const movementSet = new Set<string>();
    const categorySet = new Set<string>();

    products.forEach((p) => {
      if (p.gender) genderSet.add(p.gender);
      if (p.strapMaterial)
        materialSet.add(p.strapMaterial);
      if (p.caseSize) caseSizeSet.add(p.caseSize);
      if (p.caseMaterial)
        caseMaterialSet.add(p.caseMaterial);
      if (p.crystalType)
        crystalTypeSet.add(p.crystalType);
      if (p.waterResistance)
        waterResistanceSet.add(p.waterResistance);
      if (p.movement) movementSet.add(p.movement);
      if (
        p.categoryId &&
        categoryNameMap[p.categoryId]
      )
        categorySet.add(
          categoryNameMap[p.categoryId]
        );
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
          (a, b) => parseInt(a) - parseInt(b)
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
        ).sort(
          (a, b) => parseInt(a) - parseInt(b)
        ),
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
  }, [products, categoryNameMap]);

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

  const filteredProducts = products.filter(
    (p) => {
      const priceMatch =
        p.price >= selectedPrice[0] &&
        p.price <= selectedPrice[1];
      const genderMatch =
        selectedFilters.Gender.length === 0 ||
        selectedFilters.Gender.includes(p.gender);
      const materialMatch =
        selectedFilters.Material.length === 0 ||
        selectedFilters.Material.includes(
          p.strapMaterial
        );
      const caseSizeMatch =
        selectedFilters.CaseSize.length === 0 ||
        selectedFilters.CaseSize.includes(
          p.caseSize
        );
      const caseMaterialMatch =
        selectedFilters.CaseMaterial.length ===
          0 ||
        selectedFilters.CaseMaterial.includes(
          p.caseMaterial
        );
      const crystalTypeMatch =
        selectedFilters.CrystalType.length ===
          0 ||
        selectedFilters.CrystalType.includes(
          p.crystalType
        );
      const waterResistanceMatch =
        selectedFilters.WaterResistance.length ===
          0 ||
        selectedFilters.WaterResistance.includes(
          p.waterResistance
        );
      const movementMatch =
        selectedFilters.Movement.length === 0 ||
        selectedFilters.Movement.includes(
          p.movement
        );
      const categoryMatch =
        selectedFilters.Category.length === 0 ||
        (p.categoryId &&
          selectedFilters.Category.includes(
            categoryNameMap[p.categoryId]
          ));

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
    }
  );

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
          <div className="md:w-1/4 hidden md:block">
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
              <h1 className="text-sm hidden md:flex font-sans mb-8 text-start">
                {sortedProducts.length} Products
              </h1>
              <SortButton
                value={sortValue}
                onChange={setSortValue}
              />
              <button
                className="flex md:hidden gap-2 ml-2 items-center bg-luxury-gold px-2 py-1 text-black w-full justify-center"
                onClick={() =>
                  setFilterBarOpen(true)
                }
              >
                <SlidersHorizontal size={13} />
                Filter
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {filterBarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() =>
              setFilterBarOpen(false)
            }
          />
          <div className="fixed right-0 top-0 z-50 bg-black w-72 max-w-full h-screen shadow-lg overflow-auto">
            <div className="flex justify-end p-4">
              <X
                className="cursor-pointer text-white"
                onClick={() =>
                  setFilterBarOpen(false)
                }
              />
            </div>
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
        </>
      )}
    </div>
  );
};

export default Page;
