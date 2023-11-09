import EndSection from "@/components/endsection/endsection";
import Hero from "@/components/hero/hero";
import Thumbnail from "@/components/thumbnail/thumbnail";
import TrustedBy from "@/components/trustedby/trustedby";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="absolute w-full top-[45.5rem] right-[0rem] left-[0rem] h-[310.6rem] overflow-hidden text-center">
        <TrustedBy />
        <Thumbnail />
        <EndSection />
      </div>
    </>
  );
};

export default Home;
