import { Mail } from "lucide-react";
import Button from "../custom/Button";

const NewsLetter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-background-darker via-background-dark to-background-darker relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold opacity-5 blur-3xl rounded-full"></div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-center items-center">
          {/* Card */}
          <div
            className="rounded-sm max-w-3xl p-10 bg-black flex gap-3
           shadow-luxury-gold shadow-2xl bg-background-darker bg-opacity-70 backdrop-blur-sm md:p-12 shadow-premium"
          >
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <h1 className="font-bold text-3xl font-serif">
                Stay{" "}
                <span className="text-luxury-gold">
                  Informed
                </span>
              </h1>
              <p className="text-gray-300 font-serif text-[16px] font-semibold">
                Subscribe to receive exclusive
                updates on new collections,
                limited editions, and private
                events.
              </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              <div className="flex relative justify-end">
                <Mail
                  size={18}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 text-muted"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border-thin-gold pl-8 pr-3 py-3 focus:outline-none placeholder:text-muted rounded-l-md rounded-r-none"
                />
                <Button className="text-black font-semibold">
                  Subscribe
                </Button>
              </div>
              <div className="text-[13px] text-gray-300/50 w-full">
                By subscribing, you agree to our
                Privacy Policy. You can
                unsubscribe at any time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
