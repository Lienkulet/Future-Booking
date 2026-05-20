import Image from "next/image";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import StarsVideo from "../ui/StarsVideo";

interface Destination {
  number: string;
  name: string;
  country: string;
  propertyCount: number;
  image: string;
}

const destinations: Destination[] = [
  { number: "01", name: "Paris", country: "France", propertyCount: 1240, image: "/destinations/paris.jpg" },
  { number: "02", name: "Bali", country: "Indonesia", propertyCount: 980, image: "/destinations/bali.jpg" },
  { number: "03", name: "Tokyo", country: "Japan", propertyCount: 870, image: "/destinations/tokyo.jpg" },
  { number: "04", name: "Dubai", country: "UAE", propertyCount: 760, image: "/destinations/dubai.jpg" },
  { number: "05", name: "New York", country: "USA", propertyCount: 1480, image: "/destinations/new-york.jpg" },
  { number: "06", name: "Barcelona", country: "Spain", propertyCount: 690, image: "/destinations/barcelona.jpg" },
];

export default function Destinations() {
  return (
    <section className="relative w-full pb-24">
      {/* Section heading — full bleed strip */}
      <div className="relative z-10 flex items-center justify-between px-6 lg:px-30 py-16">
        <h2 className="font-instrument-serif text-white text-5xl lg:text-[80px] leading-none">
          Where to?
        </h2>
        <a
          href="#"
          className="hidden sm:flex items-center gap-2 font-manrope font-semibold text-[14px] text-white/40 hover:text-white transition-colors"
        >
          All destinations
          <ArrowRightIcon />
        </a>
      </div>

      {/* Destination list */}
      <ul className="relative z-10 list-none p-0 m-0">
        {destinations.map((dest) => (
          <li key={dest.name} className="group border-t border-white/[0.07] last:border-b">
            <a
              href="#"
              className="flex items-center gap-6 lg:gap-10 px-6 lg:px-30 py-6 hover:bg-white/2 transition-colors"
            >
              {/* Number */}
              <span className="font-manrope text-[12px] text-white/20 w-6 shrink-0">
                {dest.number}
              </span>

              {/* City name */}
              <h3 className="font-instrument-serif text-white text-3xl lg:text-5xl flex-1 group-hover:translate-x-2 transition-transform duration-300">
                {dest.name}
              </h3>

              {/* Country + count — hidden on mobile */}
              <div className="hidden md:flex items-center gap-12">
                <span className="font-manrope text-[13px] text-white/35 w-24">{dest.country}</span>
                <span className="font-manrope text-[13px] text-white/35 w-28 text-right">
                  {dest.propertyCount.toLocaleString()} stays
                </span>
              </div>

              {/* Thumbnail — appears on hover */}
              <div className="relative w-16 h-12 lg:w-24 lg:h-16 rounded-xl overflow-hidden shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>

              {/* Arrow */}
              <span className="text-white/20 group-hover:text-white/60 transition-colors shrink-0">
                <ArrowRightIcon />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
