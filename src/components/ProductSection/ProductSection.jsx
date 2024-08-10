import React from "react";
import {
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductsGrid,
  SectionTitle,
  SectionWrapper,
} from "./ProductSection.Styled";

export const ProductSection = () => {
  return (
    <SectionWrapper id="products">
      <SectionTitle>Our Products</SectionTitle>
      <ProductsGrid>
        <ProductCard>
          <ProductImage src="/path/to/product1.jpg" alt="Product 1" />
          <ProductName>Product 1</ProductName>
          <ProductPrice>$150</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage src="/path/to/product2.jpg" alt="Product 2" />
          <ProductName>Product 2</ProductName>
          <ProductPrice>$250</ProductPrice>
        </ProductCard>
      </ProductsGrid>
    </SectionWrapper>
  );
};
