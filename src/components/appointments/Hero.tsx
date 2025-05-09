const Hero = () => {
  return (
    <section className="relative h-[50vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/9978931/pexels-photo-9978931.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          }}
        ></div>

        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

        <div className="absolute inset-0 bg-gradient-to-r from-background-darker via-background-darker/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          Book Your{" "}
          <span className="text-luxury-gold">
            Private Consultation
          </span>
        </h1>
        <p className="text-text-muted font-serif text-lg max-w-xl">
          Experience personalized attention from
          our watch experts in an exclusive
          setting.
        </p>
      </div>
    </section>
  );
};

export default Hero;
