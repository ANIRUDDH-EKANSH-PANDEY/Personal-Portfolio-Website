import React from "react";
import styled from "styled-components";

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  background-color: #f0f4f8;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0d47a1;
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  margin-top: 20px;
  font-weight: bold;
  color: #333;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 30px;
  object-fit: cover;
`;

const Button = styled.a`
  background-color: #fdd835;
  color: black;
  padding: 10px 20px;
  text-decoration: none;
  margin-top: 30px;
  display: inline-block;
  font-size: 1.2rem;
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: #0d47a1;
  }
`;

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
