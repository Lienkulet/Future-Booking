import Navbar from "../layout/Navbar";
import SearchBar from "./SearchBar";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pb-16">
      {/* Full-screen video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Navbar overlay */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6 mt-32 pb-16">
        {/* Tagline Pill */}
        <div
          className="flex items-center gap-2 px-3 h-[38px] rounded-[10px] border mb-8"
          style={{
            background: "rgba(85, 80, 110, 0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderColor: "rgba(164, 132, 215, 0.5)",
          }}
        >
          <span className="bg-[#7b39fc] text-white font-cabin font-medium text-[14px] px-2 py-0.5 rounded-[6px] leading-none">
            New
          </span>
          <span className="font-cabin font-medium text-[14px] text-white whitespace-nowrap">
            Say Hello to Datacore v3.2
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-instrument-serif text-white text-5xl lg:text-[96px] leading-[1.1] max-w-5xl mb-6">
          Book your perfect stay instantly{" "}
          <em className="italic tracking-tight">and</em> hassle-free
        </h1>

        {/* Subtext */}
        <p className="font-inter font-normal text-[18px] text-white/70 max-w-[662px] mb-10 leading-relaxed">
          Discover handpicked hotels, resorts, and stays across your favorite
          destinations. Enjoy exclusive deals, fast booking, and 24/7 support.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="font-cabin font-medium text-[16px] text-white bg-[#7b39fc] rounded-[10px] px-8 py-4 hover:bg-[#6b29ec] transition-colors cursor-pointer w-full sm:w-auto">
            Book a Free Demo
          </button>
          <button className="font-cabin font-medium text-[16px] text-[#f6f7f9] bg-[#2b2344] rounded-[10px] px-8 py-4 hover:bg-[#3b3354] transition-colors cursor-pointer w-full sm:w-auto">
            Get Started Now
          </button>
        </div>
      </div>

      <SearchBar />
    </section>
  );
}
