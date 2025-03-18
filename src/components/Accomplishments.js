import React, { useState } from "react";
import styled from "styled-components";

const AccomplishmentsSection = styled.section`
  padding: 60px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;
`;

const AccomplishmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const AccomplishmentCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const AccomplishmentTitle = styled.h3`
  color: #0d47a1;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const AccomplishmentDate = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const AccomplishmentDescription = styled.ul`
  color: #333;
  font-size: 1rem;
  margin-top: 15px;
  list-style-type: disc;
  padding-left: 20px;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #0d47a1;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;

  &:hover {
    background-color: #fdd835;
    color: black;
  }
`;

function Accomplishments() {
  const [activeIndex, setActiveIndex] = useState(null); // Track which card is active
  const Accomplishments = [
    {
      title: "BCG Data Science Job Simulation",
      date: "October 2024",
      description: [
        "Completed a customer churn analysis simulation for XYZ Analytics, demonstrating advanced data analytics skills, identifying essential client data and outlining a strategic investigation approach.",
        "Conducted efficient data analysis using Python, including Pandas and NumPy. Employed data visualization techniques for insightful trend interpretation.",
        "Completed the engineering and optimization of a random forest model, achieving an 85% accuracy rate in predicting customer churn.",
        "Completed a concise executive summary for the Associate Director, delivering actionable insights for informed decision-making based on the analysis.",
      ],
      certificate: "./assets/BCG_CERTFICATE.pdf", // Certificate download link
    },
    {
      title: "Accenture Data Analytics and Visualization Simulation",
      date: "September 2024",
      description: [
        "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture.",
        "Cleaned, modeled, and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions.",
        "Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders.",
      ],
      certificate:
        "./assets/Accenture_Data_Analytics_and_Visualization_Simulation.pdf", // Certificate download link
    },
    {
      title: "Tata Data Visualization Simulation",
      date: "September 2024",
      description: [
        "Completed a simulation involving creating data visualizations for Tata Consultancy Services.",
        "Prepared questions for a meeting with client senior leadership.",
        "Created visuals for data analysis to help executives with effective decision-making.",
      ],
      certificate:
        "./assets/Tata_Data_Visualization_Simulation_Certificate.pdf", // Certificate download link
    },
    {
      title: "AWS Solutions Architecture Simulation",
      date: "August 2024",
      description: [
        "Completed a simulation focused on designing scalable AWS cloud solutions for a hypothetical client.",
        "Architected a solution utilizing key AWS services to meet client requirements for performance, security, and cost-efficiency.",
        "Created detailed documentation and presented the solution, highlighting architectural decisions and benefits to stakeholders.",
      ],
      certificate: "./assets/AWS_SOLUTIONS_ARCHITECTURE_SIMULATION.pdf", // Certificate download link
    },
  ];

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the card's description
  };

  return (
    <AccomplishmentsSection>
      <Title>Accomplishments</Title>
      <AccomplishmentsGrid>
        {Accomplishments.map((cert, index) => (
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
              onClick={(e) => e.stopPropagation()} // Prevent card toggle on button click
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
