import ArrowRightIcon from "../icons/ArrowRightIcon";
import FadeIn from "../ui/FadeIn";

const stats = [
  { value: "10,000+", label: "travelers" },
  { value: "80+", label: "countries" },
  { value: "4.9★", label: "avg rating" },
];

export default function CTABanner() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 lg:px-30 py-28 lg:py-36"
      style={{
        borderTop: "1px solid rgba(123,57,252,0.15)",
        borderBottom: "1px solid rgba(123,57,252,0.15)",
      }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/stars.mp4" type="video/mp4" />
      </video>

      {/* Overlays — dark base + purple tint */}
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, rgba(18,8,58,0.85) 0%, rgba(8,6,18,0.6) 50%, rgba(13,5,37,0.85) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end gap-16 lg:gap-24">
        {/* Left — headline */}
        <FadeIn className="flex-1">
          <h2 className="font-instrument-serif text-white text-5xl lg:text-7xl xl:text-[88px] leading-[1.05] max-w-2xl">
            Your next<br />
            adventure<br />
            <em className="italic text-purple-400">starts here.</em>
          </h2>
        </FadeIn>

        {/* Right — stats + CTAs */}
        <FadeIn delay={0.15} className="flex flex-col gap-10 lg:max-w-sm w-full">
          {/* Stats row */}
          <div className="flex items-center gap-8 border-b border-white/10 pb-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-manrope font-bold text-[22px] text-white leading-none mb-1">
                  {s.value}
                </p>
                <p className="font-manrope text-[12px] text-white/30 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Copy */}
          <p className="font-inter text-[16px] text-white/50 leading-relaxed">
            Join thousands of travelers who've already found a better way to book — no hidden fees, no hassle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center gap-2 font-cabin font-medium text-[16px] text-white bg-[#7b39fc] hover:bg-[#6b29ec] transition-colors rounded-xl px-7 py-4 cursor-pointer">
              Book a Free Demo
              <ArrowRightIcon />
            </button>
            <button className="font-cabin font-medium text-[16px] text-white/70 hover:text-white border border-white/10 hover:border-white/25 transition-colors rounded-xl px-7 py-4 cursor-pointer">
              Get Started
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
