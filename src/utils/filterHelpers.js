export const PROPERTY_TYPES = [
  "Apartment",
  "Flat",
  "Villa",
  "Studio",
  "Plot",
  "Guest House",
  "Independent Floor",
];

export const FURNISHING_TYPES = [
  "Unfurnished",
  "Semi Furnished",
  "Fully Furnished",
];

export function filterPropertyList(properties, options = {}) {
  if (!Array.isArray(properties)) return [];
  let result = [...properties];

  const tab = options.tab;
  const filters = options.filters ? options.filters : options;
  const sort = options.sort;

  // Tab filtering
  if (tab === "Buy") {
    result = result.filter((p) => p.status === "For Sale");
  } else if (tab === "Rent") {
    result = result.filter((p) => p.status === "For Rent");
  }

  // Location / Search query
  if (filters && filters.location && typeof filters.location === "string" && filters.location.trim()) {
    const query = filters.location.trim().toLowerCase();
    result = result.filter((p) =>
      `${p.title || ""} ${p.location || ""} ${p.city || ""} ${p.landmark || ""}`
        .toLowerCase()
        .includes(query)
    );
  }

  // Price Range
  if (filters && filters.minPrice !== "" && filters.minPrice != null) {
    const min = Number(filters.minPrice);
    if (!Number.isNaN(min)) result = result.filter((p) => p.price >= min);
  }

  if (filters && filters.maxPrice !== "" && filters.maxPrice != null) {
    const max = Number(filters.maxPrice);
    if (!Number.isNaN(max)) result = result.filter((p) => p.price <= max);
  }

  // BHK Bedrooms
  if (filters && filters.bhk) {
    if (filters.bhk === "4+") {
      result = result.filter((p) => p.beds >= 4);
    } else {
      const bhkNum = Number(filters.bhk);
      result = result.filter((p) => p.beds === bhkNum);
    }
  }

  // Property Type
  if (filters && filters.type) {
    result = result.filter((p) => p.type === filters.type);
  }

  // Furnishing
  if (filters && filters.furnishing) {
    result = result.filter((p) => p.furnishing === filters.furnishing);
  }

  // Sorting
  if (sort === "Price: Low to High") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "Price: High to Low") {
    result.sort((a, b) => b.price - a.price);
  }
  // Otherwise preserve curated properties order (Newest / Default)

  return result;
}
