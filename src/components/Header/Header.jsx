import React from "react";
import { HeaderWrapper, Logo, Nav, NavLink } from "./Header.Styled";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Funiro</Logo>
      <Nav>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#products">Products</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};
