import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { formatPrice } from "../../utils/formatters";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function FitMarkers({ properties }) {
  const map = useMap();

  useEffect(() => {
    if (!properties || !properties.length) return;
    const valid = properties.filter((p) => p && typeof p.lat === "number" && typeof p.lng === "number");
    if (!valid.length) return;

    if (valid.length === 1) {
      map.setView([valid[0].lat, valid[0].lng], 14);
    } else {
      const bounds = L.latLngBounds(valid.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [30, 30], maxZoom: 14 });
    }
  }, [map, properties]);

  return null;
}

export default function PropertyMap({ properties = [] }) {
  const defaultCenter = [27.5741, 77.6504]; // Vrindavan center
  const validProperties = Array.isArray(properties)
    ? properties.filter((p) => p && typeof p.lat === "number" && typeof p.lng === "number")
    : [];

  return (
    <div className="h-[300px] w-full max-w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <MapContainer
        center={defaultCenter}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full max-w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitMarkers properties={validProperties} />
        {validProperties.map((property) => (
          <Marker key={property.id} position={[property.lat, property.lng]} icon={markerIcon}>
            <Popup>
              <div className="min-w-[190px]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="mb-2 h-20 w-full rounded object-cover"
                />
                <b className="text-xs text-navy block line-clamp-1">{property.title}</b>
                <div className="my-1 text-[11px] text-slate-600 line-clamp-1">{property.location}</div>
                <strong className="text-xs text-[#c48700]">
                  {formatPrice(property.price, property.status, property.type, property.priceLabel)}
                </strong>
                <br />
                <Link
                  to={`/real-estate/${property.id}`}
                  className="mt-1 inline-block text-[11px] font-bold text-navy hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
