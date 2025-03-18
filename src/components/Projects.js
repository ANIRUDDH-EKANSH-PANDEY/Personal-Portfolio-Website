import React, { useState } from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 60px;
  background-color: #fff;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #f0f4f8;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: #0d47a1;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const DashboardButton = styled.a`
  display: inline-block;
  background-color: #0d47a1;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #fdd835;
    color: black;
  }
`;

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    {
      title: "AI-Based Resume Ranking System",
      description:
        "Developed an AI-powered system using NLP and TensorFlow to analyze and rank resumes based on job requirements.",
      dashboardLink:
        "https://ai-resume-ranking-iap4k7eqjefkxdl4zvkzsw.streamlit.app/",
    },
    {
      title: "AI-Based Language Translator",
      description:
        "Built a multilingual translator that translates entered text and extracts text from uploaded documents, supporting 20+ languages. Allows downloading translated text.",
      dashboardLink:
        "https://ai-language-translator-gmknsdinptzxxeycfyhevv.streamlit.app/",
    },
    {
      title: "BookMyShow Clone",
      description:
        "Designed the UI and integrated Razorpay payments using React.js and TMDB API for real-time movie details.",
      dashboardLink: null,
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio website showcasing projects, skills, and experience using React.js and Styled Components.",
      dashboardLink: null,
    },
  ];

  const toggleDescription = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <ProjectsSection>
      <Title>Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} onClick={() => toggleDescription(index)}>
            <ProjectTitle>{project.title}</ProjectTitle>
            {project.dashboardLink && (
              <DashboardButton
                href={project.dashboardLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevents card click from toggling description
              >
                View Dashboard
              </DashboardButton>
            )}
            <ProjectDescription isOpen={openProject === index}>
              {project.description}
            </ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;
