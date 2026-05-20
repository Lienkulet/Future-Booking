import StarIcon from "../icons/StarIcon";
import TestimonialCard, { type Testimonial } from "./TestimonialCard";
import FadeIn from "../ui/FadeIn";

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

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="relative w-full px-6 lg:px-30 pb-24">

      {/* Header */}
      <FadeIn>
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
      </FadeIn>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">

        {/* Left — 2 stacked cards */}
        <div className="flex flex-col gap-4">
          {rest.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <TestimonialCard testimonial={t} />
            </FadeIn>
          ))}
        </div>

        {/* Right — featured card, staggered */}
        <div className="lg:mt-16">
          <FadeIn delay={0.2}>
            <TestimonialCard testimonial={featured} featured />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
