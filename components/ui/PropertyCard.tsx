import Image from "next/image";
import StarIcon from "../icons/StarIcon";
import MapPinIcon from "../icons/MapPinIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

export interface Property {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  pricePerNight: number;
  image: string;
  badge?: string;
  tags: string[];
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { name, location, rating, reviewCount, pricePerNight, image, badge, tags } = property;

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-[#110d24] border border-white/[0.07] hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(123,57,252,0.15)]">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {badge && (
          <span className="absolute top-3 left-3 font-manrope font-semibold text-[11px] uppercase tracking-wider text-white bg-[#7b39fc] px-2.5 py-1 rounded-lg">
            {badge}
          </span>
        )}

        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
          <span className="text-yellow-400">
            <StarIcon />
          </span>
          <span className="font-manrope font-semibold text-[12px] text-white">{rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags */}
        <div className="flex items-center gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-manrope text-[11px] font-medium text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-manrope font-semibold text-[17px] text-white mb-1.5 leading-snug">
          {name}
        </h3>

        <div className="flex items-center gap-1.5 text-white/50 mb-4">
          <MapPinIcon />
          <span className="font-manrope text-[13px]">{location}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.07]">
          <div>
            <span className="font-manrope font-bold text-[20px] text-white">${pricePerNight}</span>
            <span className="font-manrope text-[13px] text-white/40"> / night</span>
            <p className="font-manrope text-[12px] text-white/30 mt-0.5">{reviewCount} reviews</p>
          </div>

          <button className="flex items-center gap-2 font-manrope font-semibold text-[13px] text-white bg-[#7b39fc] hover:bg-[#6b29ec] transition-colors rounded-xl px-4 py-2.5 cursor-pointer">
            Book Now
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </article>
  );
}
