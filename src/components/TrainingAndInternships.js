import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 60px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  color: #0d47a1;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardSubText = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
`;

const Details = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #eef3fc;
  border-radius: 6px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DetailPoint = styled.li`
  font-size: 1rem;
  color: #333;
`;

const CredentialButton = styled.a`
  display: inline-block;
  background-color: #0d47a1;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: ${({ isOpen }) => (isOpen ? "15px" : "0px")};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fdd835;
    color: black;
  }
`;

function TrainingAndInternships() {
  const [openCard, setOpenCard] = useState(null);

  const internships = [
    {
      company:
        "AICTE - Internship on AI (TechSaksham – Microsoft & SAP Initiative)",
      position: "AI Intern",
      duration: "Feb 2025 – Present",
      credentialPath: "/assets/AI_Internship_Certificate.pdf",
      details: [
        "Developed an AI-powered Resume Screening and Ranking System to enhance recruitment efficiency.",
        "Implemented NLP and Machine Learning algorithms for automated candidate evaluation.",
        "Gained practical exposure to AI-driven decision-making and automation in hiring processes.",
      ],
    },
    {
      company: "AICTE - EduSkills Virtual Internship (AWS Data Engineering)",
      position: "AWS Data Engineering Intern",
      duration: "Jan 2025 – Mar 2025",
      credentialPath:
        "./assets/AICTE_DATA_ENGINEERING_INTERNSHIP_CERTIFICATE.pdf",
      details: [
        "Completed AWS Academy Cloud Foundations certification, gaining expertise in AWS services and cloud architecture.",
        "Completed AWS Academy Data Engineering, focusing on data pipelines, ETL processes, and cloud storage solutions.",
        "Hands-on experience with AWS services like S3, Lambda, Redshift, and Glue for data processing.",
      ],
    },
    {
      company: "Virtual Training cum Internship at DevTown",
      position: "MERN Full Stack Web Developer Intern",
      duration: "May 2024 – Aug 2024",
      credentialPath: "./assets/AWS_DEVTOWN_INTERNSHIP.pdf",
      details: [
        "Developed and deployed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
        "Built and optimized RESTful APIs for seamless data exchange between front-end and back-end.",
        "Collaborated on real-world projects, enhancing performance, security, and scalability.",
      ],
    },
  ];

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <Section>
      <Title>Training & Internships</Title>
      <Grid>
        {internships.map((internship, index) => (
          <Card key={index} onClick={() => toggleCard(index)}>
            <CardHeader>{internship.company}</CardHeader>
            <CardSubText>{internship.position}</CardSubText>
            <CardSubText>{internship.duration}</CardSubText>

            <Details isOpen={openCard === index}>
              <ul>
                {internship.details.map((point, i) => (
                  <DetailPoint key={i}>{point}</DetailPoint>
                ))}
              </ul>
            </Details>

            <CredentialButton
              href={internship.credentialPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevents card click from toggling details
              isOpen={openCard === index} // Moves button down if details are open
            >
              View Credentials
            </CredentialButton>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default TrainingAndInternships;
