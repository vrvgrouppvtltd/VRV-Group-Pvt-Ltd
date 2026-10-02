import React, { useState } from "react";
import { SlidersHorizontal, MapPin, ChevronDown, ChevronUp, RotateCcw, Sparkles } from "lucide-react";
import { PROPERTY_TYPES, FURNISHING_TYPES } from "../../utils/filterHelpers";
import { SITE_CONFIG } from "../../constants/siteConfig";

export default function PropertyFilters({ filters, setFilters, onApply, onClear }) {
  const [open, setOpen] = useState(true);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <aside className="h-fit min-w-0 rounded-xl border border-slate-200 bg-white p-4 xl:p-5 2xl:p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-base xl:text-lg 2xl:text-xl font-bold text-navy">
          <SlidersHorizontal size={18} className="text-gold" />
          Filter Properties
        </h3>
        <div className="flex items-center gap-3">
          <button
            onClick={onClear}
            className="flex items-center gap-1 text-xs xl:text-sm font-semibold text-gold hover:underline"
          >
            <RotateCcw size={12} /> Reset
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-8 w-8 place-items-center rounded-md border border-slate-200 lg:hidden"
            aria-label="Toggle Filters"
          >
            {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      <div className={`${open ? "block" : "hidden"} lg:block mt-4 xl:mt-5 space-y-4 xl:space-y-4.5`}>
        {/* Location Search */}
        <div>
          <label className="mb-1.5 block text-xs xl:text-[13px] 2xl:text-sm font-bold text-slate-700">Location / Locality</label>
          <div className="field">
            <input
              value={filters.location}
              onChange={(e) => updateFilter("location", e.target.value)}
              placeholder="e.g. Omaxe, Prem Mandir, Govind Nagar"
              className="text-xs xl:text-sm"
            />
            <MapPin size={15} className="shrink-0 text-gold" />
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="mb-1.5 block text-xs xl:text-[13px] 2xl:text-sm font-bold text-slate-700">Price Range (₹)</label>
          <div className="grid grid-cols-[minmax(0,1fr)_16px_minmax(0,1fr)] items-center gap-1.5">
            <input
              type="number"
              min="0"
              value={filters.minPrice}
              onChange={(e) => updateFilter("minPrice", e.target.value)}
              placeholder="Min Price"
              className="field w-full text-xs xl:text-sm"
            />
            <span className="text-center text-[10px] text-slate-400">to</span>
            <input
              type="number"
              min="0"
              value={filters.maxPrice}
              onChange={(e) => updateFilter("maxPrice", e.target.value)}
              placeholder="Max Price"
              className="field w-full text-xs xl:text-sm"
            />
          </div>
        </div>

        {/* BHK Select */}
        <div>
          <label className="mb-1.5 block text-xs xl:text-[13px] 2xl:text-sm font-bold text-slate-700">BHK / Bedrooms</label>
          <Select
            value={filters.bhk}
            onChange={(v) => updateFilter("bhk", v)}
            options={[
              ["", "Any BHK"],
              ["1", "1 BHK"],
              ["2", "2 BHK"],
              ["3", "3 BHK"],
              ["4", "4 BHK"],
              ["4+", "4+ BHK"],
            ]}
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="mb-1.5 block text-xs xl:text-[13px] 2xl:text-sm font-bold text-slate-700">Property Type</label>
          <Select
            value={filters.type}
            onChange={(v) => updateFilter("type", v)}
            options={[
              ["", "All Property Types"],
              ...PROPERTY_TYPES.map((t) => [t, t]),
            ]}
          />
        </div>

        {/* Furnishing */}
        <div>
          <label className="mb-1.5 block text-xs xl:text-[13px] 2xl:text-sm font-bold text-slate-700">Furnishing</label>
          <Select
            value={filters.furnishing}
            onChange={(v) => updateFilter("furnishing", v)}
            options={[
              ["", "Any Furnishing"],
              ...FURNISHING_TYPES.map((f) => [f, f]),
            ]}
          />
        </div>

        <button
          onClick={() => onApply(filters)}
          className="mt-2 flex h-10 xl:h-11 w-full items-center justify-center gap-2 rounded-md bg-navy text-xs xl:text-sm font-bold text-white transition hover:bg-[#142143]"
        >
          <SlidersHorizontal size={14} /> Apply Filters
        </button>

        {/* Help Banner */}
        <div className="mt-4 flex min-w-0 items-center gap-3 rounded-lg bg-[#fff8eb] p-3 xl:p-3.5 border border-gold/20">
          <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-lg bg-gold/15 flex items-center justify-center text-gold shrink-0">
            <Sparkles size={16} />
          </div>
          <div className="min-w-0 flex-1">
            <b className="block text-xs xl:text-sm text-navy">Need Custom Advice?</b>
            <span className="text-[10px] xl:text-xs text-slate-600">Speak with our Vrindavan local team</span>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phone1}`}
            className="shrink-0 rounded border border-gold/60 bg-white px-2.5 py-1.5 text-[10px] xl:text-xs font-bold text-[#8d6500] hover:bg-gold hover:text-white transition"
          >
            Call
          </a>
        </div>
      </div>
    </aside>
  );
}

function Select({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="field w-full appearance-none pr-8 cursor-pointer"
      >
        {options.map(([v, l]) => (
          <option key={v} value={v}>
            {l}
          </option>
        ))}
      </select>
      <ChevronDown size={14} className="pointer-events-none absolute right-3 top-3 text-slate-400" />
    </div>
  );
}
