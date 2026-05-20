import PropertyCard, { type Property } from "../ui/PropertyCard";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import FadeIn from "../ui/FadeIn";

const properties: Property[] = [
  {
    id: "1",
    name: "The Meridian Penthouse",
    location: "Manhattan, New York",
    rating: 4.9,
    reviewCount: 218,
    pricePerNight: 420,
    image: "/stays/stay-1.jpg",
    badge: "Featured",
    tags: ["Penthouse", "City View"],
  },
  {
    id: "2",
    name: "Azure Cliffside Villa",
    location: "Santorini, Greece",
    rating: 4.8,
    reviewCount: 174,
    pricePerNight: 380,
    image: "/stays/stay-2.jpg",
    badge: "Popular",
    tags: ["Villa", "Sea View"],
  },
  {
    id: "3",
    name: "Kyoto Garden Ryokan",
    location: "Kyoto, Japan",
    rating: 4.9,
    reviewCount: 132,
    pricePerNight: 295,
    image: "/stays/stay-3.jpg",
    tags: ["Ryokan", "Garden"],
  },
  {
    id: "4",
    name: "Safari Canopy Lodge",
    location: "Maasai Mara, Kenya",
    rating: 4.7,
    reviewCount: 89,
    pricePerNight: 510,
    image: "/stays/stay-4.jpg",
    badge: "New",
    tags: ["Lodge", "Wildlife"],
  },
];

export default function FeaturedStays() {
  return (
    <section className="relative w-full px-6 lg:px-30 pt-24 pb-20">
      {/* Header */}
      <FadeIn>
        <header className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-manrope font-semibold text-[13px] uppercase tracking-widest text-purple-400 mb-3">
              Hand-picked for you
            </p>
            <h2 className="font-instrument-serif text-white text-4xl lg:text-[56px] leading-[1.1]">
              Featured Stays
            </h2>
          </div>

          <a
            href="#"
            className="flex items-center gap-2 font-manrope font-semibold text-[14px] text-purple-400 hover:text-purple-300 transition-colors shrink-0 mb-1"
          >
            View all properties
            <ArrowRightIcon />
          </a>
        </header>
      </FadeIn>

      {/* Grid */}
      <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 list-none p-0 m-0">
        {properties.map((property, i) => (
          <li key={property.id}>
            <FadeIn delay={i * 0.1}>
              <PropertyCard property={property} />
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}
