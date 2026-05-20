import { type ReactNode } from "react";
import ShieldCheckIcon from "../icons/ShieldCheckIcon";
import ZapIcon from "../icons/ZapIcon";
import TagIcon from "../icons/TagIcon";
import HeadphonesIcon from "../icons/HeadphonesIcon";

interface Feature {
  icon: ReactNode;
  accent: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheckIcon />,
    accent: "#7b39fc",
    title: "Verified Properties",
    description:
      "Every listing is manually reviewed by our team. Real photos, accurate descriptions, and no unpleasant surprises on arrival.",
    stat: "12,000+",
    statLabel: "verified listings",
  },
  {
    icon: <ZapIcon />,
    accent: "#a855f7",
    title: "Instant Booking",
    description:
      "Skip the back-and-forth. Confirm your stay in seconds and receive your itinerary immediately — available 24/7.",
    stat: "< 30s",
    statLabel: "average booking time",
  },
  {
    icon: <TagIcon />,
    accent: "#8b5cf6",
    title: "Exclusive Deals",
    description:
      "Members unlock rates unavailable anywhere else — up to 40% off peak-season prices at our partner properties.",
    stat: "Up to 40%",
    statLabel: "off retail rates",
  },
  {
    icon: <HeadphonesIcon />,
    accent: "#c084fc",
    title: "24 / 7 Support",
    description:
      "Real humans on call around the clock. Whether it's a last-minute change or a local recommendation, we've got you.",
    stat: "< 2 min",
    statLabel: "average response time",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full px-6 lg:px-30 pb-24">

      <div className="relative z-10">
      {/* Header */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <p className="font-manrope font-semibold text-[13px] uppercase tracking-widest text-purple-400 mb-3">
            Why travelers choose us
          </p>
          <h2 className="font-instrument-serif text-white text-4xl lg:text-[56px] leading-[1.1] max-w-lg">
            Everything you need, nothing you don't
          </h2>
        </div>
        <p className="font-inter text-[16px] text-white/50 leading-relaxed max-w-sm lg:text-right">
          We built Future around one idea: booking a stay should feel as good as the stay itself.
        </p>
      </header>

      {/* Feature grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 list-none p-0 m-0">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="group relative flex flex-col p-6 rounded-2xl bg-[#0e0a1f] border border-white/[0.07] hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle corner glow */}
            <div
              aria-hidden
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
              style={{ background: feature.accent + "22" }}
            />

            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0"
              style={{
                background: feature.accent + "1a",
                border: `1px solid ${feature.accent}40`,
                color: feature.accent,
              }}
            >
              {feature.icon}
            </div>

            <h3 className="font-manrope font-semibold text-[17px] text-white mb-2">
              {feature.title}
            </h3>

            <p className="font-inter text-[14px] text-white/50 leading-relaxed mb-8 flex-1">
              {feature.description}
            </p>

            {/* Stat */}
            <div className="pt-5 border-t border-white/[0.07]">
              <p
                className="font-manrope font-bold text-[22px] leading-none mb-1"
                style={{ color: feature.accent }}
              >
                {feature.stat}
              </p>
              <p className="font-manrope text-[12px] text-white/35 uppercase tracking-wider">
                {feature.statLabel}
              </p>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
