/**
 * Format raw price into INR currency format.
 * Handles both monthly rent and total sale price or per gaj rate.
 */
export function formatPrice(price, status, type, priceLabel) {
  if (priceLabel) return priceLabel;
  if (!price || Number.isNaN(price)) return "Price on Request";

  if (type === "Plot") {
    return `₹${price.toLocaleString("en-IN")}/gaj`;
  }

  const formatted = `₹${price.toLocaleString("en-IN")}`;
  return status === "For Rent" ? `${formatted}/mo` : formatted;
}

/**
 * Truncate long descriptions smoothly.
 */
export function truncateText(text, maxLength = 120) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}
