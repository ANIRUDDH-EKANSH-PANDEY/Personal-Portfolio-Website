import styled from "styled-components";

export const Section = styled.section`
  padding: 60px;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardHeader = styled.div`
  color: #0d47a1;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CardSubText = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
`;

export const Details = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #eef3fc;
  border-radius: 6px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const DetailPoint = styled.li`
  font-size: 1rem;
  color: #333;
`;

export const CredentialButton = styled.a`
  display: inline-block;
  background-color: #0d47a1;
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  margin-top: ${({ isOpen }) => (isOpen ? "15px" : "0px")};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fdd835;
    color: black;
  }
`;
