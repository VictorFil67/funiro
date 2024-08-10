import React from "react";
import {
  TestimonialAuthor,
  TestimonialCard,
  TestimonialsGrid,
  TestimonialsTitle,
  TestimonialsWrapper,
  TestimonialText,
} from "./TestimonialsSection.Styled";

export const TestimonialsSection = () => {
  return (
    <TestimonialsWrapper id="testimonials">
      <TestimonialsTitle>What Our Customers Say</TestimonialsTitle>
      <TestimonialsGrid>
        <TestimonialCard>
          <TestimonialText>
            "Amazing product, excellent quality!"
          </TestimonialText>
          <TestimonialAuthor>John Doe</TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>"I love the design and comfort."</TestimonialText>
          <TestimonialAuthor>Jane Smith</TestimonialAuthor>
        </TestimonialCard>
      </TestimonialsGrid>
    </TestimonialsWrapper>
  );
};
