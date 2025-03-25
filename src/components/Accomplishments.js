import React, { useState } from "react";
import {
  AccomplishmentsSection,
  Title,
  AccomplishmentsGrid,
  AccomplishmentCard,
  AccomplishmentTitle,
  AccomplishmentDate,
  AccomplishmentDescription,
  DownloadButton,
} from "../styles/AccomplishmentStyles";

function Accomplishments() {
  const [activeIndex, setActiveIndex] = useState(null); // Track which card is active

  const accomplishments = [
    {
      title: "BCG Data Science Job Simulation",
      date: "October 2024",
      description: [
        "Completed a customer churn analysis simulation for XYZ Analytics, demonstrating advanced data analytics skills.",
        "Conducted efficient data analysis using Python, including Pandas and NumPy.",
        "Engineered and optimized a random forest model, achieving an 85% accuracy rate in predicting customer churn.",
        "Delivered a concise executive summary for the Associate Director with actionable insights.",
      ],
      certificate: "./assets/BCG_CERTFICATE.pdf",
    },
    {
      title: "Accenture Data Analytics and Visualization Simulation",
      date: "September 2024",
      description: [
        "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture.",
        "Cleaned, modeled, and analyzed 7 datasets to uncover insights into content trends.",
        "Prepared a PowerPoint deck and video presentation to communicate key insights for stakeholders.",
      ],
      certificate:
        "./assets/Accenture_Data_Analytics_and_Visualization_Simulation.pdf",
    },
    {
      title: "Tata Data Visualization Simulation",
      date: "September 2024",
      description: [
        "Created data visualizations for Tata Consultancy Services.",
        "Prepared key questions for client senior leadership meetings.",
        "Designed visuals to assist executives in making data-driven decisions.",
      ],
      certificate:
        "./assets/Tata_Data_Visualization_Simulation_Certificate.pdf",
    },
    {
      title: "AWS Solutions Architecture Simulation",
      date: "August 2024",
      description: [
        "Designed scalable AWS cloud solutions for a hypothetical client.",
        "Utilized key AWS services for performance, security, and cost-efficiency.",
        "Created detailed documentation and presented the solution to stakeholders.",
      ],
      certificate: "./assets/AWS_SOLUTIONS_ARCHITECTURE_SIMULATION.pdf",
    },
  ];

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccomplishmentsSection>
      <Title>Accomplishments</Title>
      <AccomplishmentsGrid>
        {accomplishments.map((cert, index) => (
          <AccomplishmentCard
            key={index}
            onClick={() => toggleDescription(index)}
          >
            <AccomplishmentTitle>{cert.title}</AccomplishmentTitle>
            <AccomplishmentDate>{cert.date}</AccomplishmentDate>
            <AccomplishmentDescription isVisible={activeIndex === index}>
              {cert.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </AccomplishmentDescription>
            <DownloadButton
              href={cert.certificate}
              download
              onClick={(e) => e.stopPropagation()} // Prevents toggling when clicking download
            >
              Download Certificate
            </DownloadButton>
          </AccomplishmentCard>
        ))}
      </AccomplishmentsGrid>
    </AccomplishmentsSection>
  );
}

export default Accomplishments;
