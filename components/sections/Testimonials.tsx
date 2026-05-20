import MapPinIcon from "../icons/MapPinIcon";
import StarIcon from "../icons/StarIcon";

interface Testimonial {
  property: string;
  location: string;
  headlineRegular: string;
  headlineBold: string;
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    property: "Azure Cliffside Villa",
    location: "Santorini, Greece",
    headlineRegular: "Sophie booked her dream Santorini villa and confirmed",
    headlineBold: "in under two minutes",
    quote:
      '"Linking a stay to the experience was exactly what I was looking for. Confirmation was instant, check-in instructions arrived before I even left home."',
    name: "Sophie Marceau",
    role: "Traveler · Lyon, France",
    avatarColor: "#7b39fc",
    initials: "SM",
  },
  {
    property: "Safari Canopy Lodge",
    location: "Maasai Mara, Kenya",
    headlineRegular: "James found verified listings with",
    headlineBold: "zero surprises, every single time",
    quote:
      '"I\'ve used every major booking platform and nothing comes close. The verified listings mean no catfishing — what you see is exactly what you get."',
    name: "James Okafor",
    role: "Traveler · Lagos, Nigeria",
    avatarColor: "#a855f7",
    initials: "JO",
  },
  {
    property: "Kyoto Garden Ryokan",
    location: "Kyoto, Japan",
    headlineRegular: "Yuki saved",
    headlineBold: "¥48,000 on one single booking",
    quote:
      '"The exclusive member rates are real. I saved ¥48,000 on a three-night ryokan stay compared to the same listing on every other platform."',
    name: "Yuki Tanaka",
    role: "Traveler · Osaka, Japan",
    avatarColor: "#8b5cf6",
    initials: "YT",
  },
];

interface CardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial: t }: CardProps) {
  return (
    <article className="bg-white/4 border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-6">
      {/* Property */}
      <div className="flex items-center gap-1.5 text-white/35">
        <MapPinIcon />
        <span className="font-manrope text-[12px] tracking-wider uppercase">
          {t.property}
        </span>
      </div>

      {/* Headline */}
      <h3 className="font-instrument-serif text-2xl lg:text-[1.65rem] leading-tight">
        <span className="text-white/45">{t.headlineRegular} </span>
        <span className="text-white">{t.headlineBold}</span>
      </h3>

      {/* CTA link */}
      <a
        href="#"
        className="font-manrope font-semibold text-[14px] text-white flex items-center gap-1.5 w-fit hover:text-purple-400 transition-colors"
      >
        View the stay
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>

      {/* Divider */}
      <hr className="border-white/[0.07]" />

      {/* Quote */}
      <blockquote className="font-inter text-[15px] text-white/50 leading-relaxed flex-1">
        {t.quote}
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center font-manrope font-bold text-[12px] text-white shrink-0"
          style={{ background: t.avatarColor }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-manrope font-semibold text-[14px] text-white leading-snug">
            {t.name}
          </p>
          <p className="font-manrope text-[12px] text-white/40 leading-snug mt-0.5">
            {t.role}
          </p>
        </div>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="relative w-full px-6 lg:px-30 pb-24">

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-10">
        <p className="font-manrope font-semibold text-[13px] uppercase tracking-widest text-white/25">
          What travelers say
        </p>
        <div className="hidden sm:flex items-center gap-1 text-yellow-400">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} />
          ))}
          <span className="font-manrope text-[12px] text-white/30 ml-3 tracking-wide">
            5.0 · Verified
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">

        {/* Left — 2 stacked cards */}
        <div className="flex flex-col gap-4">
          {rest.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>

        {/* Right — 1 featured card, offset to stagger */}
        <div className="lg:mt-16">
        <article className="bg-white/4 border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-6">
          {/* Property */}
          <div className="flex items-center gap-1.5 text-white/35">
            <MapPinIcon />
            <span className="font-manrope text-[12px] tracking-wider uppercase">
              {featured.property}
            </span>
          </div>

          {/* Headline — larger for featured */}
          <h3 className="font-instrument-serif text-[clamp(1.75rem,2.8vw,2.6rem)] leading-[1.2]">
            <span className="text-white/45">{featured.headlineRegular} </span>
            <span className="text-white">{featured.headlineBold}</span>
          </h3>

          {/* CTA link */}
          <a
            href="#"
            className="font-manrope font-semibold text-[14px] text-white flex items-center gap-1.5 w-fit hover:text-purple-400 transition-colors"
          >
            View the stay
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          {/* Divider */}
          <hr className="border-white/[0.07]" />

          {/* Quote */}
          <blockquote className="font-inter text-[15px] text-white/50 leading-relaxed flex-1">
            {featured.quote}
          </blockquote>

          {/* Author */}
          <footer className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center font-manrope font-bold text-[12px] text-white shrink-0"
              style={{ background: featured.avatarColor }}
            >
              {featured.initials}
            </div>
            <div>
              <p className="font-manrope font-semibold text-[14px] text-white leading-snug">
                {featured.name}
              </p>
              <p className="font-manrope text-[12px] text-white/40 leading-snug mt-0.5">
                {featured.role}
              </p>
            </div>
          </footer>
        </article>
        </div>
      </div>
    </section>
  );
}
