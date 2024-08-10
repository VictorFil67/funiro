import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;

export const ProductName = styled.h3`
  font-size: 20px;
  margin: 15px 0 10px;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  color: #ff7f50;
`;
