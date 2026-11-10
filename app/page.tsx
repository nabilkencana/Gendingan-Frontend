import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StitchBeranda from "@/components/StitchBeranda";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar />
      <StitchBeranda />
      <Footer />
    </div>
  );
}
