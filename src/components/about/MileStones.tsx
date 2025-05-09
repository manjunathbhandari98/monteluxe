import {
  Aperture,
  Award,
  Clock,
  Watch,
} from "lucide-react";

const MileStones = () => {
  const milestones = [
    {
      icon: (
        <Clock
          size={36}
          className="text-luxury-gold"
        />
      ),
      label: "Years of Excellence",
      value: 125,
      suffix: "+",
    },
    {
      icon: (
        <Award
          size={36}
          className="text-luxury-gold"
        />
      ),
      label: "International Awards",
      value: 50,
      suffix: "+",
    },
    {
      icon: (
        <Watch
          size={36}
          className="text-luxury-gold"
        />
      ),
      label: "Master Craftsmen",
      value: 75,
    },
    {
      icon: (
        <Aperture
          size={36}
          className="text-luxury-gold"
        />
      ),
      label: "Global Boutiques",
      value: 36,
    },
  ];

  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3"
          >
            <div className="mb-2">
              {milestone.icon}
            </div>
            <h2 className="text-3xl md:text-4xl text-luxury-gold font-semibold font-serif">
              {milestone.value}
              {milestone.suffix}
            </h2>
            <p className="text-white text-sm md:text-base font-serif tracking-wide">
              {milestone.label.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MileStones;
