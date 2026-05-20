import SearchIcon from "../icons/SearchIcon";
import CalendarIcon from "../icons/CalendarIcon";
import KeyIcon from "../icons/KeyIcon";
import StarsVideo from "../ui/StarsVideo";

const steps = [
  {
    number: "01",
    icon: <SearchIcon />,
    title: "Search your destination",
    description:
      "Enter where you want to go, pick your dates, and tell us how many guests. We'll surface the best-matched stays instantly.",
  },
  {
    number: "02",
    icon: <CalendarIcon />,
    title: "Choose & book instantly",
    description:
      "Browse handpicked properties, compare prices and reviews, then confirm your booking in seconds — no hidden fees, ever.",
  },
  {
    number: "03",
    icon: <KeyIcon />,
    title: "Check in & enjoy",
    description:
      "Receive your confirmation and check-in details straight to your inbox. Arrive, unpack, and let the experience begin.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full px-6 lg:px-30 pb-24">

      {/* Header */}
      <header className="relative z-10 text-center mb-16">
        <p className="font-manrope font-semibold text-[13px] uppercase tracking-widest text-purple-400 mb-3">
          Simple as 1 – 2 – 3
        </p>
        <h2 className="font-instrument-serif text-white text-4xl lg:text-[56px] leading-[1.1]">
          How It Works
        </h2>
      </header>

      {/* Steps */}
      <ol className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
        {/* Connector line — desktop only */}
        <div
          aria-hidden
          className="hidden md:block absolute top-13 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(123,57,252,0.35) 0, rgba(123,57,252,0.35) 6px, transparent 6px, transparent 14px)",
          }}
        />

        {steps.map((step) => (
          <li key={step.number} className="flex flex-col items-center text-center">
            {/* Icon ring */}
            <div className="relative mb-8">
              <div
                className="w-26 h-26 rounded-full flex items-center justify-center text-purple-300"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(123,57,252,0.18), rgba(123,57,252,0.06))",
                  border: "1px solid rgba(123,57,252,0.3)",
                  boxShadow: "0 0 32px rgba(123,57,252,0.12)",
                }}
              >
                <span className="scale-[1.6]">{step.icon}</span>
              </div>

              {/* Step number badge */}
              <span
                className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center font-manrope font-bold text-[11px] text-white"
                style={{ background: "#7b39fc" }}
              >
                {step.number.slice(1)}
              </span>
            </div>

            <h3 className="font-manrope font-semibold text-[19px] text-white mb-3 leading-snug">
              {step.title}
            </h3>
            <p className="font-inter text-[15px] text-white/50 leading-relaxed max-w-70">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
