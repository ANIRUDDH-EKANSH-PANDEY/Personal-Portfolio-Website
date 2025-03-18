import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: #0d47a1;
  padding: 40px 0;
  color: white;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #fdd835;
  margin: 0 15px;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterText>
        © 2025 Aniruddh Ekansh Pandey. All Rights Reserved.
      </FooterText>
      <SocialLinks>
        <SocialLink
          href="https://www.linkedin.com/in/aniruddh-ekansh-pandey-447904258"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://github.com/ANIRUDDH-EKANSH-PANDEY"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </SocialLink>
        <SocialLink href="mailto:pandeyekansh1422@gmail.com">Email</SocialLink>
      </SocialLinks>
    </FooterSection>
  );
};

export default Footer;
