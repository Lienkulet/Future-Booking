import LogoMark from "../icons/LogoMark";
import StarsVideo from "../ui/StarsVideo";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import FacebookIcon from "../icons/FacebookIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

const allLinks = [
  "About Us", "Careers", "Press", "Blog",
  "Hotels", "Villas", "Resorts", "Experiences",
  "Help Center", "Contact Us", "Privacy Policy", "Terms",
];

const socials = [
  { icon: <TwitterIcon />, label: "X / Twitter" },
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <LinkedInIcon />, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/6">

      {/* Opening row — question + brand */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 px-6 lg:px-30 pt-16 pb-14 border-b border-white/6">

        {/* Left — invitation */}
        <div>
          <h2 className="font-instrument-serif text-white text-5xl lg:text-7xl leading-[1.05] mb-8">
            Where are you<br />going next?
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 font-manrope font-semibold text-[15px] text-white bg-[#7b39fc] hover:bg-[#6b29ec] transition-colors rounded-xl px-6 py-3.5 cursor-pointer"
          >
            Start booking
            <ArrowRightIcon />
          </a>
        </div>

        {/* Right — brand block */}
        <div className="flex flex-col lg:items-end gap-5">
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <span className="font-manrope font-semibold text-white text-lg tracking-tight">Future</span>
          </div>
          <p className="font-inter text-[13px] text-white/35 leading-relaxed lg:text-right max-w-56">
            Handpicked stays, instant booking,<br />and 24/7 support — everywhere.
          </p>
          <div className="flex items-center gap-1.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:bg-white/8 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* All links — single flat row, no columns */}
      <nav aria-label="Site links" className="relative z-10 px-6 lg:px-30 py-7 border-b border-white/6">
        <ul className="flex flex-wrap gap-x-7 gap-y-3 list-none p-0 m-0">
          {allLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-manrope text-[13px] text-white/35 hover:text-white/80 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Wordmark — fills width */}
      <div className="relative z-10 px-4 lg:px-6 pt-4 pb-0 overflow-hidden" aria-hidden>
        <p
          className="font-instrument-serif text-white/[0.035] leading-[0.85] select-none whitespace-nowrap"
          style={{ fontSize: "clamp(88px, 17.5vw, 240px)" }}
        >
          Future
        </p>
      </div>

      {/* Copyright bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 lg:px-30 py-4">
        <p className="font-manrope text-[12px] text-white/20">
          © {new Date().getFullYear()} Future, Inc.
        </p>
        <div className="flex items-center gap-1 font-manrope text-[12px] text-white/20">
          {["Privacy", "Terms", "Cookies"].map((item, i) => (
            <span key={item} className="flex items-center gap-1">
              {i > 0 && <span className="opacity-40">·</span>}
              <a href="#" className="hover:text-white/50 transition-colors">{item}</a>
            </span>
          ))}
        </div>
      </div>

    </footer>
  );
}
