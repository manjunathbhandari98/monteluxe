import {
  Gem,
  ShieldCheck,
  Sparkles,
  Globe,
} from "lucide-react";

const BrandHighlights = () => {
  const highlights = [
    {
      icon: (
        <Gem
          size={36}
          className="text-luxury-gold"
        />
      ),
      title: "Timeless Craftsmanship",
      description:
        "Each timepiece is a reflection of our century-old legacy — handcrafted by artisans who blend tradition with precision.",
    },
    {
      icon: (
        <ShieldCheck
          size={36}
          className="text-luxury-gold"
        />
      ),
      title: "Uncompromising Quality",
      description:
        "We source only the finest materials, ensuring every watch meets the highest standards of durability and elegance.",
    },
    {
      icon: (
        <Sparkles
          size={36}
          className="text-luxury-gold"
        />
      ),
      title: "Innovative Spirit",
      description:
        "While rooted in heritage, our designs embrace innovation — combining cutting-edge technology with timeless aesthetics.",
    },
    {
      icon: (
        <Globe
          size={36}
          className="text-luxury-gold"
        />
      ),
      title: "Global Prestige",
      description:
        "Recognized in over 30 countries, Chronomaster continues to shape the future of luxury horology worldwide.",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-5"
          >
            <div className="mt-1">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-serif text-luxury-gold mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base font-serif leading-relaxed text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandHighlights;
