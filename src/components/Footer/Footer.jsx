import React from "react";
import {
  FooterLink,
  FooterLinks,
  FooterText,
  FooterWrapper,
} from "./Footer.Styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLinks>
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#products">Products</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </FooterLinks>
      <FooterText>&copy; 2024 Funiro. All Rights Reserved.</FooterText>
    </FooterWrapper>
  );
};
