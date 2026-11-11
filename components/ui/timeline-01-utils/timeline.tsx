"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineItem {
  title: string;
  description: string;
  date: string;
  image?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for filling the center vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      {/* Background static line down the center on desktop */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border z-0" />

      {/* Dynamic Animated Scroll Progress Line that fills down as visitor scrolls */}
      <motion.div
        style={{ height: lineHeight }}
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-primary-container to-primary z-10 origin-top rounded-full shadow-[0_0_12px_rgba(76,175,80,0.5)]"
      />

      <div className="relative z-20">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 relative border-b border-border/70 last:border-b-0 group"
            >
              {/* Center Dot Marker (fills/pulses on view) */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-surface-card border-2 border-text-primary ring-4 ring-surface shadow-xs transition-colors group-hover:border-primary group-hover:bg-primary-container" />
              </div>

              {/* Left Column */}
              <div
                className={cn(
                  "p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center",
                  isEven
                    ? "md:items-end md:text-right order-1"
                    : "md:items-center order-2 md:order-1"
                )}
              >
                {isEven ? (
                  /* Text content on Left (for even items) */
                  <div className="max-w-md space-y-3">
                    <span className="inline-block text-xs md:text-sm font-semibold text-primary px-3 py-1 rounded-full bg-secondary-container border border-primary/20">
                      {item.date}
                    </span>
                    <h3 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-sm sm:text-base text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  /* Image on Left (for odd items) */
                  item.image && (
                    <div className="w-full max-w-md overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-border group-hover:shadow-md transition-all">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  )
                )}
              </div>

              {/* Right Column */}
              <div
                className={cn(
                  "p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center",
                  isEven
                    ? "md:items-center order-2"
                    : "md:items-start md:text-left order-1 md:order-2"
                )}
              >
                {isEven ? (
                  /* Image on Right (for even items) */
                  item.image && (
                    <div className="w-full max-w-md overflow-hidden rounded-2xl md:rounded-3xl shadow-sm border border-border group-hover:shadow-md transition-all">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  )
                ) : (
                  /* Text content on Right (for odd items) */
                  <div className="max-w-md space-y-3">
                    <span className="inline-block text-xs md:text-sm font-semibold text-primary px-3 py-1 rounded-full bg-secondary-container border border-primary/20">
                      {item.date}
                    </span>
                    <h3 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-sm sm:text-base text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
