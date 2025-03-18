import React, { useState } from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 60px;
  background-color: #f0f4f8;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
`;

const SkillsSection = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillCard = styled.div`
  background-color: #0d47a1;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  font-size: 1rem;
  width: 200px;
  text-align: center;
  cursor: pointer;
  position: relative;
`;

const SkillList = styled.div`
  background-color: white;
  color: #0d47a1;
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

function About() {
  const [openCategory, setOpenCategory] = useState(null);

  const skills = {
    "Technologies/Frameworks": [
      "React.js",
      "Node.js",
      "Express.js",
      "Streamlit",
      "TensorFlow",
      "GitHub",
    ],
    Databases: ["MongoDB", "MySQL"],
    Languages: ["Python", "JavaScript", "SQL", "Java"],
    "Data Science & Visualization": [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "TensorFlow",
      "Matplotlib",
      "Seaborn",
    ],
    "Cloud Computing": ["AWS (EC2, S3, Lambda, RDS, etc.)"],
    "Analytical Tools": ["Excel", "Power BI", "Power Query"],
  };

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <AboutSection>
      <Title>About Me</Title>
      <Bio>
        Full Stack Developer skilled in MERN Stack, Python, and data science.
        Experienced in building scalable web apps, RESTful APIs, and database
        solutions. Proficient in ML, data visualization, and AWS cloud
        computing.
      </Bio>
      <SkillsSection>
        {Object.entries(skills).map(([category, skillList]) => (
          <SkillCard key={category} onClick={() => toggleCategory(category)}>
            {category}
            <SkillList isOpen={openCategory === category}>
              {skillList.map((skill) => (
                <div key={skill}>{skill}</div>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillsSection>
    </AboutSection>
  );
}

export default About;
