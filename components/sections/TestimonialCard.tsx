import MapPinIcon from "../icons/MapPinIcon";

export interface Testimonial {
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

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
}

export default function TestimonialCard({ testimonial: t, featured = false }: TestimonialCardProps) {
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
      <h3
        className={`font-instrument-serif leading-tight ${
          featured
            ? "text-[clamp(1.75rem,2.8vw,2.6rem)]"
            : "text-2xl lg:text-[1.65rem]"
        }`}
      >
        <span className="text-white/45">{t.headlineRegular} </span>
        <span className="text-white">{t.headlineBold}</span>
      </h3>

      {/* CTA link */}
      <a
        href="#"
        className="font-manrope font-semibold text-[14px] text-white flex items-center gap-1.5 w-fit hover:text-purple-400 transition-colors"
      >
        View the stay
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
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
