import React, { createContext, useContext, useEffect, useState } from "react";

const LikedContext = createContext();

const STORAGE_KEY = "vrv_liked_properties";

export function LikedProvider({ children }) {
  const [likedIds, setLikedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(likedIds));
    } catch (e) {
      console.error("Failed to save liked properties to localStorage", e);
    }
  }, [likedIds]);

  const toggleLike = (id) => {
    const numericId = Number(id);
    setLikedIds((prev) =>
      prev.includes(numericId)
        ? prev.filter((item) => item !== numericId)
        : [...prev, numericId]
    );
  };

  const isLiked = (id) => likedIds.includes(Number(id));

  return (
    <LikedContext.Provider
      value={{
        likedIds,
        toggleLike,
        isLiked,
        likedCount: likedIds.length,
      }}
    >
      {children}
    </LikedContext.Provider>
  );
}

export function useLiked() {
  const context = useContext(LikedContext);
  if (!context) {
    throw new Error("useLiked must be used within a LikedProvider");
  }
  return context;
}
