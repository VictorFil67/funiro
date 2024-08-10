import styled from "styled-components";

export const HeroWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: url("/path/to/your/image.jpg") no-repeat center/cover;
  text-align: center;
`;

export const HeroContent = styled.div`
  color: #fff;
  max-width: 600px;
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

export const HeroButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff7f50;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
