import Slider from "@mui/material/Slider";

const PriceSlider = ({
  selectedPrice,
  onPriceChange,
  min,
  max,
}: {
  selectedPrice: number[];
  onPriceChange: (newValue: number[]) => void;
  min: number;
  max: number;
}) => {
  return (
    <div className="mt-6 px-6 py-4 sm:px-4">
      <h3 className="font-semibold mb-2">
        Price Range
      </h3>
      <div className="flex items-center justify-between text-sm mb-2">
        <span>₹{selectedPrice[0]}</span>
        <span>₹{selectedPrice[1]}</span>
      </div>
      <Slider
        value={selectedPrice}
        onChange={(
          _: unknown,
          newValue: number[]
        ) => onPriceChange(newValue as number[])}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        sx={{
          color: "#d4af37", // tailwind red-600
        }}
      />
      <p className="text-sm text-gray-600 mt-1">
        ₹{selectedPrice[0]} - ₹{selectedPrice[1]}
      </p>
    </div>
  );
};

export default PriceSlider;
