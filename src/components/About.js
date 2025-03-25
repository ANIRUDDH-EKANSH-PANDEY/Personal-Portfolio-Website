import React, { useState } from "react";
import {
  AboutSection,
  Title,
  Bio,
  SkillsSection,
  SkillCard,
  SkillList,
} from "../styles/AboutStyles";

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
