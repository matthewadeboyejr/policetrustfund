import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import StatsSection from "@/components/homepage/StatsSection";

const Testimonials = () => {
  return (
    <div>
      <Breadcrumbs title="Testimonials" breadcrumbs="Home / Testimonials" />
      <TestimonialsSection />
      <StatsSection />
    </div>
  );
};

export default Testimonials;
