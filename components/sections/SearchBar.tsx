"use client";

import { useState } from "react";
import MapPinIcon from "../icons/MapPinIcon";
import CalendarIcon from "../icons/CalendarIcon";
import UsersIcon from "../icons/UsersIcon";
import SearchIcon from "../icons/SearchIcon";

interface SearchFields {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export default function SearchBar() {
  const [fields, setFields] = useState<SearchFields>({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up search logic
    console.log("Search:", fields);
  }

  return (
    <section className="relative z-20 w-full px-6 lg:px-30 -mt-8">
      <form
        onSubmit={handleSearch}
        className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-0 rounded-2xl p-3 lg:p-2 lg:pr-2"
        style={{
          background: "rgba(20, 15, 40, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(164, 132, 215, 0.25)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        {/* Destination */}
        <fieldset className="flex-1 flex items-center gap-2.5 px-4 py-3 lg:border-r border-white/10 min-w-0">
          <span className="text-purple-300 shrink-0">
            <MapPinIcon />
          </span>
          <div className="flex flex-col min-w-0">
            <label
              htmlFor="destination"
              className="font-manrope text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-0.5"
            >
              Destination
            </label>
            <input
              id="destination"
              type="text"
              placeholder="Where are you going?"
              value={fields.destination}
              onChange={(e) =>
                setFields((f) => ({ ...f, destination: e.target.value }))
              }
              className="bg-transparent font-manrope text-[14px] text-white placeholder:text-white/30 outline-none w-full"
            />
          </div>
        </fieldset>

        {/* Divider — mobile only */}
        <hr className="lg:hidden border-white/10" />

        {/* Check-in */}
        <fieldset className="flex-1 flex items-center gap-2.5 px-4 py-3 lg:border-r border-white/10">
          <span className="text-purple-300 shrink-0">
            <CalendarIcon />
          </span>
          <div className="flex flex-col">
            <label
              htmlFor="check-in"
              className="font-manrope text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-0.5"
            >
              Check-in
            </label>
            <input
              id="check-in"
              type="date"
              value={fields.checkIn}
              onChange={(e) =>
                setFields((f) => ({ ...f, checkIn: e.target.value }))
              }
              className="bg-transparent font-manrope text-[14px] text-white/70 outline-none cursor-pointer"
              style={{ colorScheme: "dark" }}
            />
          </div>
        </fieldset>

        <hr className="lg:hidden border-white/10" />

        {/* Check-out */}
        <fieldset className="flex-1 flex items-center gap-2.5 px-4 py-3 lg:border-r border-white/10">
          <span className="text-purple-300 shrink-0">
            <CalendarIcon />
          </span>
          <div className="flex flex-col">
            <label
              htmlFor="check-out"
              className="font-manrope text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-0.5"
            >
              Check-out
            </label>
            <input
              id="check-out"
              type="date"
              value={fields.checkOut}
              onChange={(e) =>
                setFields((f) => ({ ...f, checkOut: e.target.value }))
              }
              className="bg-transparent font-manrope text-[14px] text-white/70 outline-none cursor-pointer"
              style={{ colorScheme: "dark" }}
            />
          </div>
        </fieldset>

        <hr className="lg:hidden border-white/10" />

        {/* Guests */}
        <fieldset className="flex-1 flex items-center gap-2.5 px-4 py-3">
          <span className="text-purple-300 shrink-0">
            <UsersIcon />
          </span>
          <div className="flex flex-col">
            <label
              htmlFor="guests"
              className="font-manrope text-[11px] font-semibold text-white/40 uppercase tracking-widest mb-0.5"
            >
              Guests
            </label>
            <input
              id="guests"
              type="number"
              min={1}
              max={20}
              value={fields.guests}
              onChange={(e) =>
                setFields((f) => ({
                  ...f,
                  guests: Math.max(1, Number(e.target.value)),
                }))
              }
              className="bg-transparent font-manrope text-[14px] text-white/70 outline-none w-16"
              style={{ colorScheme: "dark" }}
            />
          </div>
        </fieldset>

        {/* Search button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 font-manrope font-semibold text-[15px] text-white bg-[#7b39fc] hover:bg-[#6b29ec] active:bg-[#5b19dc] transition-colors rounded-xl px-8 py-4 shrink-0 cursor-pointer w-full lg:w-auto"
        >
          <SearchIcon />
          Search
        </button>
      </form>
    </section>
  );
}
