import Image from "next/image";
import Button from "../custom/Button";

const Heritage = () => {
  return (
    <section className="px-6 py-12 md:py-20 bg-white dark:bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Description */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-luxury-gold">
            A Heritage of Excellence
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-serif">
            For over a century,{" "}
            <strong>Chronomaster</strong> has
            stood at the forefront of horological
            innovation. Our timepieces are more
            than mere instruments of time; they
            are works of art that embody the
            perfect synthesis of traditional
            craftsmanship and cutting-edge
            technology. Each Chronomaster watch is
            handcrafted in our Swiss atelier by
            master watchmakers who have dedicated
            their lives to the pursuit of
            perfection. Our commitment to
            excellence extends beyond the
            workshop, as we continuously push the
            boundaries of what&apos;s possible in
            luxury watchmaking.
          </p>
          <Button
            size="large"
            className="mt-4 text-black font-semibold"
          >
            Discover Our Collection
          </Button>
        </div>

        {/* Image */}
        <div className="relative w-full h-96 md:h-[550px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://images.pexels.com/photos/9978681/pexels-photo-9978681.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Heritage Watch"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Heritage;
