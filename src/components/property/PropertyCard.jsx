import React from "react";
import { Bath, BedDouble, Heart, MapPin, Maximize, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../common/Badge";
import { formatPrice } from "../../utils/formatters";
import { useLiked } from "../../context/LikedContext";

export default function PropertyCard({ property, variant = "grid" }) {
  const { isLiked, toggleLike } = useLiked();
  const liked = isLiked(property.id);
  const isList = variant === "list";

  const priceText = formatPrice(property.price, property.status, property.type, property.priceLabel);
  const propertyUrl = `/real-estate/${property.id}`;

  if (isList) {
    return (
      <article className="group grid min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
        <div className="relative h-[200px] overflow-hidden sm:h-[200px] lg:h-full lg:min-h-[210px]">
          <Link to={propertyUrl} className="block h-full w-full">
            <img
              src={property.image}
              alt={`${property.title} in ${property.location}`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </Link>
          <div className="absolute left-3 top-3 pointer-events-none">
            <Badge variant={property.status === "For Rent" ? "rent" : "sale"}>
              {property.status}
            </Badge>
          </div>
          <button
            onClick={() => toggleLike(property.id)}
            className={`absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 shadow transition hover:bg-white ${
              liked ? "text-red-500" : "text-slate-400 hover:text-slate-600"
            }`}
            aria-label="Save Property"
            title={liked ? "Remove from Liked Properties" : "Add to Liked Properties"}
          >
            <Heart size={16} fill={liked ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="flex min-w-0 flex-col p-4 sm:p-5">
          <div className="flex min-w-0 items-start justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[10px] font-bold tracking-wider text-gold uppercase">{property.type}</span>
              <h3 className="text-base font-bold text-navy sm:text-lg hover:text-gold transition">
                <Link to={propertyUrl}>{property.title}</Link>
              </h3>
              <p className="mt-1 flex min-w-0 items-start gap-1 text-xs text-slate-600">
                <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
                <span className="line-clamp-1">{property.location}</span>
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-y border-slate-100 py-2.5 text-xs text-slate-600">
            {property.beds > 0 && (
              <span className="flex items-center gap-1">
                <BedDouble size={15} className="text-navy" />
                {property.beds} Beds
              </span>
            )}
            {property.baths > 0 && (
              <span className="flex items-center gap-1">
                <Bath size={15} className="text-navy" />
                {property.baths} Baths
              </span>
            )}
            <span className="flex items-center gap-1">
              <Maximize size={15} className="text-navy" />
              {property.area} Sq.ft
            </span>
            <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">
              {property.furnishing}
            </span>
          </div>

          <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="text-lg font-bold text-[#d89000]">{priceText}</div>
            <Link
              to={propertyUrl}
              className="flex h-9 items-center justify-center gap-1.5 rounded-md border border-gold px-4 text-xs font-bold text-[#bf7c00] transition hover:bg-gold hover:text-white"
            >
              View Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-[180px] xl:h-[220px] 2xl:h-[240px] overflow-hidden">
        <Link to={propertyUrl} className="block h-full w-full">
          <img
            src={property.image}
            alt={`${property.title} in ${property.location}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <div className="absolute left-3 top-3 pointer-events-none">
          <Badge variant={property.status === "For Rent" ? "rent" : "sale"}>
            {property.status}
          </Badge>
        </div>
        <button
          onClick={() => toggleLike(property.id)}
          className={`absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 shadow transition hover:bg-white ${
            liked ? "text-red-500" : "text-slate-400 hover:text-slate-600"
          }`}
          aria-label="Save Property"
          title={liked ? "Remove from Liked Properties" : "Add to Liked Properties"}
        >
          <Heart size={16} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4 xl:p-5 2xl:p-6">
        <div className="flex items-center justify-between">
          <span className="text-[10px] xl:text-xs font-bold tracking-wider text-gold uppercase">{property.type}</span>
          <span className="text-[10px] xl:text-xs text-slate-500 font-medium">{property.furnishing}</span>
        </div>

        <h3 className="mt-1 line-clamp-1 text-base xl:text-lg 2xl:text-xl font-bold text-navy hover:text-gold transition">
          <Link to={propertyUrl}>{property.title}</Link>
        </h3>

        <p className="mt-1 flex items-center gap-1 line-clamp-1 text-xs xl:text-sm text-slate-600">
          <MapPin size={14} className="shrink-0 text-gold" />
          <span className="truncate">{property.location}</span>
        </p>

        <div className="mt-3 flex justify-between gap-2 border-y border-slate-100 py-2.5 xl:py-3 text-[11px] xl:text-xs 2xl:text-sm text-slate-600">
          {property.beds > 0 ? (
            <span className="flex items-center gap-1"><BedDouble size={15} className="text-navy"/>{property.beds} Bed</span>
          ) : (
            <span className="flex items-center gap-1 text-slate-500">Plot</span>
          )}
          {property.baths > 0 && (
            <span className="flex items-center gap-1"><Bath size={15} className="text-navy"/>{property.baths} Bath</span>
          )}
          <span className="flex items-center gap-1"><Maximize size={15} className="text-navy"/>{property.area} Sq.ft</span>
        </div>

        <div className="mt-3.5 flex items-center justify-between">
          <div className="text-base xl:text-lg 2xl:text-xl font-bold text-[#d89000]">{priceText}</div>
          <Link
            to={propertyUrl}
            className="flex h-8 xl:h-9 2xl:h-10 items-center justify-center gap-1 rounded border border-gold px-3 xl:px-4 2xl:px-5 text-[11px] xl:text-xs 2xl:text-sm font-bold text-[#bf7c00] transition hover:bg-gold hover:text-white"
          >
            Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
