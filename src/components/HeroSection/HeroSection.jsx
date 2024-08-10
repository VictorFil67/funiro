import React from "react";
import {
  HeroButton,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  HeroWrapper,
} from "./HeroSection.Styled";

export const HeroSection = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>Design Your Life</HeroTitle>
        <HeroSubtitle>
          With Funiro, the best furniture for your space
        </HeroSubtitle>
        <HeroButton>Shop Now</HeroButton>
      </HeroContent>
    </HeroWrapper>
  );
};
