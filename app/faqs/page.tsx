import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import StatsSection from "@/components/homepage/StatsSection";

const FAQs = () => {
  return (
    <div>
      <Breadcrumbs title="FAQs" breadcrumbs="Home / FAQs" />
      <TestimonialsSection />
      <StatsSection />
    </div>
  );
};

export default FAQs;
