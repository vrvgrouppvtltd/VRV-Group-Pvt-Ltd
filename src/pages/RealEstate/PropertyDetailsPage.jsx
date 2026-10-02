import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Bath, BedDouble, CheckCircle2, Heart, MapPin, Maximize, Phone, ArrowLeft, Share2, MessageCircle } from "lucide-react";


import PropertyMap from "../../components/property/PropertyMap";
import SEOHead from "../../components/common/SEOHead";
import Badge from "../../components/common/Badge";
import { properties } from "../../data/properties";
import { SITE_CONFIG } from "../../constants/siteConfig";
import { formatPrice } from "../../utils/formatters";
import { useLiked } from "../../context/LikedContext";
import PropertyInquiryForm from "../../components/property/PropertyInquiryForm";
import { ArchitecturalCadastreTexture } from "../../components/common/PageTextures";

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const { isLiked, toggleLike } = useLiked();
  const property = properties.find((item) => String(item.id) === id);
  const liked = property ? isLiked(property.id) : false;

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen bg-page">
        <SEOHead title="Property Not Found" description="The requested property could not be found." />
        
        <div className="mx-auto max-w-4xl p-20 text-center">
          <h1 className="text-3xl font-bold text-navy">Property Not Found</h1>
          <p className="mt-2 text-sm text-slate-500">The listing you are looking for may have been sold or removed.</p>
          <Link to="/real-estate" className="mt-6 inline-block rounded-md bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-[#142143] transition">
            Back to Properties
          </Link>
        </div>
        
      </div>
    );
  }

  const priceText = formatPrice(property.price, property.status, property.type, property.priceLabel);

  const whatsappInquireUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello VRV Group, I am interested in property #${property.id}: ${property.title} in ${property.location} (${priceText}). Please share details.`
  )}`;

  const propertyJsonLd = {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    "name": property.title,
    "description": property.description,
    "image": property.image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": property.location,
      "addressLocality": property.city || "Vrindavan",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": property.lat,
      "longitude": property.lng
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": property.price,
      "businessFunction": property.status === "For Rent" ? "http://purl.org/goodrelations/v1#LeaseOut" : "http://purl.org/goodrelations/v1#Sell"
    }
  };

  return (
    <div className="min-h-screen bg-page">
      <SEOHead
        title={`${property.title} in ${property.location}`}
        description={`${property.description} Contact ${SITE_CONFIG.shortName} at ${SITE_CONFIG.phone1Formatted} for site visits.`}
        ogImage={property.image}
        jsonLd={propertyJsonLd}
      />
      

      <main className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6">
        <div className="mb-4 flex items-center justify-between">
          <Link to="/real-estate" className="flex items-center gap-1.5 text-xs font-bold text-navy hover:text-gold transition">
            <ArrowLeft size={16} /> Back to Properties
          </Link>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: property.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-navy transition"
          >
            <Share2 size={15} /> Share Property
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Main Image */}
          <div className="h-[360px] sm:h-[450px] overflow-hidden rounded-xl bg-white shadow-sm border border-slate-200">
            <img src={property.image} alt={`${property.title} in ${property.location}`} className="h-full w-full object-cover" />
          </div>

          {/* Details Column */}
          <div className="relative overflow-hidden flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-card">
            {/* Architectural Blueprint Cadastre Texture */}
            <ArchitecturalCadastreTexture className="absolute -top-6 -right-6 w-64 h-36 pointer-events-none select-none" opacity={0.12} />

            <div className="relative z-10 flex items-center justify-between">
              <Badge variant={property.status === "For Rent" ? "rent" : "sale"}>
                {property.status}
              </Badge>
              <span className="text-xs font-semibold text-slate-500">{property.floor}</span>
            </div>

            <h1 className="mt-3 font-display text-2xl sm:text-3xl text-navy">{property.title}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm text-slate-600">
              <MapPin size={16} className="text-gold shrink-0" />
              {property.location}
            </p>

            <div className="mt-4 text-2xl font-bold text-[#d89000]">{priceText}</div>

            {/* Spec Features */}
            <div className="my-5 grid grid-cols-3 gap-3 border-y border-slate-100 py-4 text-xs font-medium text-slate-700">
              {property.beds > 0 && (
                <span className="flex items-center gap-1.5"><BedDouble size={16} className="text-navy" />{property.beds} Beds</span>
              )}
              {property.baths > 0 && (
                <span className="flex items-center gap-1.5"><Bath size={16} className="text-navy" />{property.baths} Baths</span>
              )}
              <span className="flex items-center gap-1.5"><Maximize size={16} className="text-navy" />{property.area} Sq.ft</span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{property.description}</p>

            {/* Amenities Grid */}
            {property.amenities && (
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    {amenity}
                  </div>
                ))}
              </div>
            )}

            {/* Call Actions */}
            <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappInquireUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-3 text-center text-xs font-bold text-white hover:bg-emerald-700 transition shadow-sm"
              >
                <MessageCircle size={16} /> WhatsApp Enquiry
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone1}`}
                className="flex-1 flex items-center justify-center gap-2 rounded-md bg-navy px-4 py-3 text-center text-xs font-bold text-white hover:bg-[#142143] transition shadow-sm"
              >
                <Phone size={16} className="text-gold" /> Call Agent
              </a>
              <button
                onClick={() => toggleLike(property.id)}
                className={`grid h-11 w-12 place-items-center rounded-md border border-slate-200 bg-white transition hover:bg-slate-50 ${
                  liked ? "text-red-500" : "text-slate-400"
                }`}
                aria-label="Save Property"
                title={liked ? "Remove from Liked" : "Add to Liked"}
              >
                <Heart size={18} fill={liked ? "currentColor" : "none"} />
              </button>
            </div>
          </div>
        </div>

        {/* Inquiry & Site Visit Lead Form */}
        <div className="mt-8">
          <PropertyInquiryForm
            propertyTitle={property.title}
            propertyLocation={property.location}
            propertyId={property.id}
          />
        </div>

        {/* Map Section */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-base font-bold text-navy">Property Location Map</h2>
          <PropertyMap properties={[property]} />
        </div>
      </main>

      
    </div>
  );
}
