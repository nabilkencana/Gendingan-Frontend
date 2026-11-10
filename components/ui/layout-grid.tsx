"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type Card = {
  id: number;
  content: React.ReactNode;
  className: string;
  thumbnail: string;
  title?: string;
  category?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    if (selected?.id === card.id) {
      setSelected(null);
    } else {
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5 relative">
      {cards.map((card, i) => {
        const isSelected = selected?.id === card.id;
        const isLastSelected = lastSelected?.id === card.id;

        return (
          <div key={i} className={cn(card.className, "min-h-[290px] sm:min-h-[330px]")}>
            <motion.div
              layoutId={`card-${card.id}`}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => handleClick(card)}
              className={cn(
                "group relative overflow-hidden cursor-pointer bg-surface-card",
                isSelected
                  ? "rounded-3xl absolute inset-0 h-[88%] w-[94%] md:w-[78%] lg:w-[70%] m-auto z-50 flex flex-col justify-end shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-white/20"
                  : isLastSelected
                  ? "z-40 rounded-2xl h-full w-full shadow-md"
                  : "z-10 rounded-2xl h-full w-full shadow-sm hover:shadow-md"
              )}
            >
              {/* Standard Image: No competing nested layoutId, completely eliminating the 'ketarik'/stretching artifact */}
              <img
                src={card.thumbnail}
                className={cn(
                  "object-cover object-center absolute inset-0 h-full w-full pointer-events-none select-none",
                  !isSelected && "group-hover:scale-105 transition-transform duration-500 ease-out"
                )}
                alt={card.title || "Dokumentasi Desa Gendingan"}
              />

              {/* Gradient Overlay */}
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-300 pointer-events-none",
                  isSelected
                    ? "bg-gradient-to-t from-surface-dark/95 via-surface-dark/45 to-transparent z-10"
                    : "bg-gradient-to-t from-surface-dark/85 via-surface-dark/25 to-transparent z-10"
                )}
              />

              {/* Expanded Detail Content: smoothly enters on open, disappears on close without dragging */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.12, ease: "easeOut" }}
                  className="relative p-6 sm:p-8 z-30 text-on-primary"
                >
                  {/* Close button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOutsideClick();
                    }}
                    className="absolute top-5 right-5 z-40 px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  >
                    <span>Tutup</span>
                    <span className="text-sm leading-none">✕</span>
                  </button>

                  {card.content}
                </motion.div>
              )}

              {/* Collapsed State Preview */}
              {!isSelected && (
                <div className="relative p-5 sm:p-6 z-20 flex flex-col justify-end h-full text-on-primary pointer-events-none transition-opacity duration-300">
                  {card.category && (
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-primary-fixed tracking-wider mb-1.5 drop-shadow-sm">
                      {card.category}
                    </span>
                  )}
                  {card.title && (
                    <h3 className="font-headline-sm text-headline-sm text-white font-bold leading-snug line-clamp-2 drop-shadow-sm">
                      {card.title}
                    </h3>
                  )}
                  <span className="text-[11px] text-white/70 mt-2 flex items-center gap-1 group-hover:text-primary-fixed transition-colors">
                    <span>Klik untuk melihat detail</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        );
      })}

      {/* Transparent Click-Outside Overlay (No dimming, clean natural feel) */}
      {selected?.id && (
        <div
          onClick={handleOutsideClick}
          className="fixed inset-0 z-30 bg-transparent cursor-pointer"
        />
      )}
    </div>
  );
};
