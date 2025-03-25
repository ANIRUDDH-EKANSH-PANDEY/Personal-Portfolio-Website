import styled from "styled-components";

export const AccomplishmentsSection = styled.section`
  padding: 60px;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;
`;

export const AccomplishmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

export const AccomplishmentCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const AccomplishmentTitle = styled.h3`
  color: #0d47a1;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const AccomplishmentDate = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

export const AccomplishmentDescription = styled.ul`
  color: #333;
  font-size: 1rem;
  margin-top: 15px;
  list-style-type: disc;
  padding-left: 20px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const DownloadButton = styled.a`
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
