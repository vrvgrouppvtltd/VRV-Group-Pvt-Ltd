import React from "react";

export default function Badge({ children, variant = "rent" }) {
  const styles =
    variant === "rent"
      ? "bg-navy text-white"
      : variant === "sale"
      ? "bg-emerald-600 text-white"
      : "bg-gold text-white";

  return (
    <span className={`inline-block rounded px-2.5 py-1 text-[10px] font-bold shadow-sm ${styles}`}>
      {children}
    </span>
  );
}
