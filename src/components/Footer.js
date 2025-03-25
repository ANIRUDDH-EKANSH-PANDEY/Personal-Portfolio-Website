import React from "react";
import {
  FooterSection,
  FooterText,
  SocialLinks,
  SocialLink,
} from "../styles/FooterStyles";

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
