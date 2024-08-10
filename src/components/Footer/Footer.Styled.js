import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 40px 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

export const FooterLinks = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const FooterLink = styled.a`
  font-size: 16px;
  color: #fff;
  &:hover {
    color: #ff7f50;
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
`;
