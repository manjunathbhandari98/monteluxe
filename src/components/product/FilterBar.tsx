/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

interface FilterBarProps {
  filters: {
    name: string;
    options: string[];
  }[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (
    name: string,
    values: string[]
  ) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
}) => {
  const [openSection, setOpenSection] = useState<
    string | null
  >(null);

  const toggleSection = (name: string) => {
    setOpenSection((prev) =>
      prev === name ? null : name
    );
  };

  const toggleOption = (
    filterName: string,
    option: string
  ) => {
    const current =
      selectedFilters[filterName] || [];
    const updated = current.includes(option)
      ? current.filter((val) => val !== option)
      : [...current, option];

    onFilterChange(filterName, updated);
  };

  const removeSelectedOption = (
    filterName: string,
    option: string
  ) => {
    const updated = selectedFilters[
      filterName
    ].filter((val) => val !== option);
    onFilterChange(filterName, updated);
  };

  return (
    <div className="p-4 rounded-xl shadow-lg space-y-6">
      {/* Selected Filter Chips */}
      {Object.entries(selectedFilters).some(
        ([_, vals]) => vals.length > 0
      ) && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(selectedFilters).map(
            ([filterName, values]) =>
              values.map((val) => (
                <div
                  key={`${filterName}-${val}`}
                  className="flex items-center bg-black text-white dark:bg-white dark:text-black text-sm px-3 py-1 rounded-full"
                >
                  {val}
                  <button
                    onClick={() =>
                      removeSelectedOption(
                        filterName,
                        val
                      )
                    }
                    className="ml-2"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))
          )}
        </div>
      )}

      {/* Filter Sections */}
      {filters.map((filter) => (
        <div key={filter.name}>
          <div
            className="flex justify-between items-center cursor-pointer border-b pb-2"
            onClick={() =>
              toggleSection(filter.name)
            }
          >
            <h2 className="text-lg font-medium">
              {filter.name}
            </h2>
            {openSection === filter.name ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>

          {openSection === filter.name && (
            <div className="mt-3 space-y-2">
              {filter.options.map((option) => {
                const selected =
                  selectedFilters[
                    filter.name
                  ]?.includes(option);
                return (
                  <div
                    key={option}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() =>
                      toggleOption(
                        filter.name,
                        option
                      )
                    }
                  >
                    <div
                      className={`w-4 h-4 border flex items-center justify-center ${
                        selected
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "bg-white dark:bg-[#222] border-gray-400"
                      }`}
                    >
                      {selected && (
                        <div className="w-2 h-2 rounded-full bg-current" />
                      )}
                    </div>
                    <span className="text-sm">
                      {option}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
