import styled from "styled-components";

export const TestimonialsWrapper = styled.section`
  padding: 60px 20px;
  background-color: #fff;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TestimonialCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TestimonialText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const TestimonialAuthor = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
