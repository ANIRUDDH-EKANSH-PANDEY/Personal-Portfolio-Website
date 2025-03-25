import React, { useState } from "react";
import {
  ProjectsSection,
  Title,
  ProjectsGrid,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  DashboardButton,
} from "../styles/ProjectStyles";

function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    {
      title: "AI-Based Resume Ranking System",
      description: [
        "Developed an AI-powered system using NLP and TensorFlow to analyze and rank resumes based on job requirements.",
        "Implemented NLP algorithms for automated skill extraction & ranking, optimizing recruitment workflows.",
        "Designed an interactive Streamlit dashboard, enabling real-time filtering and analysis of applicant data.",
      ],
      dashboardLink:
        "https://ai-resume-ranking-iap4k7eqjefkxdl4zvkzsw.streamlit.app/",
    },
    {
      title: "AI-Based Language Translator",
      description: [
        "Built a multilingual translator that translates entered text and extracts text from uploaded documents, supporting 20+ languages.",
        "Integrated Optical Character Recognition (OCR) for text extraction from images and scanned documents.",
        "Enabled real-time text translation & downloadable translated documents, improving usability by 40%.",
      ],
      dashboardLink:
        "https://ai-language-translator-gmknsdinptzxxeycfyhevv.streamlit.app/",
    },
    {
      title: "Classification Model Using CNN for CIFAR-10 dataset",
      description: [
        "Built & trained a CNN model, achieving 92% accuracy on the CIFAR-10 dataset.",
        "Optimized model performance by integrating batch normalization & dropout layers, reducing overfitting.",
        "Implemented real-time image classification pipeline, improving inference speed by 30%.",
      ],
      dashboardLink: null,
    },
    {
      title: "BookMyShow Clone",
      description: [
        "Designed the UI and integrated Razorpay payments using React.js and TMDB API for real-time movie details.",
        "Developed a responsive UI & integrated Razorpay, enabling secure movie ticket payments (test environment).",
        "Designed an interactive user interface, reducing navigation time by 25%.",
      ],
      dashboardLink: null,
    },
    {
      title: "Portfolio Website",
      description: [
        "Designed and developed a personal portfolio website showcasing projects, skills, and experience using React.js and Styled Components.",
      ],
      dashboardLink: "https://aniruddh-portfolio-six.vercel.app/",
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
              <ul>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;
