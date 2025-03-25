import React from "react";
import {
  HomeSection,
  Title,
  Tagline,
  ProfileImage,
  Button,
} from "../styles/HomeStyles";

function Home() {
  return (
    <HomeSection>
      <Title>Aniruddh Ekansh Pandey</Title>
      <Tagline>
        Full Stack Developer | Data Science & AI Enthusiast | Cloud & AWS
      </Tagline>

      {/* Add Profile Image */}
      <ProfileImage src="./assets/profile.jpg" alt="Aniruddh Ekansh Pandey" />

      {/* Download Resume Button */}
      <Button href="./assets/Aniruddh_Ekansh_Pandey_Resume (4).pdf" download>
        Download Resume
      </Button>
    </HomeSection>
  );
}

export default Home;
