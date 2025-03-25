import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: #0d47a1;
  padding: 40px 0;
  color: white;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const SocialLinks = styled.div`
  margin-top: 20px;
`;

export const SocialLink = styled.a`
  color: #fdd835;
  margin: 0 15px;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;
