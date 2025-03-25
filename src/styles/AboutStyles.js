import styled from "styled-components";

/* General Section Styling */
export const AboutSection = styled.section`
  padding: 60px;
  background-color: #f0f4f8;
`;

/* Title Styling */
export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

/* Bio (Introduction) Styling */
export const Bio = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

/* Skills Section */
export const SkillsSection = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

/* Skill Card */
export const SkillCard = styled.div`
  background-color: #0d47a1;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  font-size: 1rem;
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 12px;
  }
`;

/* Skill List (Dropdown) */
export const SkillList = styled.div`
  background-color: white;
  color: #0d47a1;
  border-radius: 8px;
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
