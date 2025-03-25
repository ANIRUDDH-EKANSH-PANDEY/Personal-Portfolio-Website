import React from "react";
import {
  CertificationsSection,
  Title,
  CertificationsGrid,
  CertificationCard,
  CertificationTitle,
} from "../styles/CertificationsStyles";

function Certifications() {
  const certifications = [
    { title: "Career Essentials in Generative AI by Microsoft and LinkedIn" },
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
