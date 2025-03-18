import React from "react";
import styled from "styled-components";

const CertificationsSection = styled.section`
  padding: 60px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const CertificationCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const CertificationTitle = styled.h3`
  color: #0d47a1;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

function Certifications() {
  const certifications = [
    { title: "Career Essentials in Generative Al by Microsoft and LinkedIn" },
    {
      title:
        "Career Essentials in Software Development by Microsoft and LinkedIn",
    },
    { title: "Career Essentials in Data Analysis by Microsoft and LinkedIn" },
    {
      title:
        "Career Essentials in Project Management by Microsoft and LinkedIn",
    },
    {
      title: "Career Essentials in Soft Skills by Microsoft and LinkedIn",
    },
  ];

  return (
    <CertificationsSection>
      <Title>Certifications</Title>
      <CertificationsGrid>
        {certifications.map((cert, index) => (
          <CertificationCard key={index}>
            <CertificationTitle>{cert.title}</CertificationTitle>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </CertificationsSection>
  );
}

export default Certifications;
