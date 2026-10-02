import React from "react";
import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";
import { SlidersHorizontal } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function PropertyGrid({ properties, view = "grid", onClearFilters }) {
  if (!properties.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex min-h-[320px] w-full flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm"
      >
        <SlidersHorizontal className="mb-3 h-10 w-10 text-gold" />
        <h3 className="text-lg font-bold text-navy">No matching properties found</h3>
        <p className="mt-1 text-xs text-slate-500 max-w-sm">
          Try resetting or adjusting your filter criteria to see more available listings in Vrindavan &amp; Mathura.
        </p>
        <button
          onClick={onClearFilters}
          className="mt-4 rounded-md bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-[#142143] transition cursor-pointer active:scale-95"
        >
          Reset All Filters
        </button>
      </motion.div>
    );
  }

  if (view === "list") {
    return (
      <motion.div
        key={`list-${properties.length}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid min-w-0 grid-cols-1 gap-4"
      >
        {properties.map((property) => (
          <motion.div key={property.id} variants={itemVariants}>
            <PropertyCard property={property} variant="list" />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      key={`grid-${properties.length}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
    >
      {properties.map((property) => (
        <motion.div key={property.id} variants={itemVariants}>
          <PropertyCard property={property} variant="grid" />
        </motion.div>
      ))}
    </motion.div>
  );
}
