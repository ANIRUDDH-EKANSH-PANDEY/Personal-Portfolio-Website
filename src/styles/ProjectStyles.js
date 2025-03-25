import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 40px;
  background-color: #fff;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
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

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const ProjectTitle = styled.h3`
  color: #0d47a1;
  font-size: 1.5rem;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const ProjectDescription = styled.div`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
  padding: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: #eef3fc;
  border-radius: 6px;
  text-align: left;

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
    list-style-type: disc;
  }
`;

export const DashboardButton = styled.a`
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

  @media (max-width: 600px) {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
`;
