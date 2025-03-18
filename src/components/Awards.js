import React from "react";
import styled from "styled-components";

const AwardsSection = styled.section`
  padding: 60px;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #0d47a1;
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const AwardCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const AwardTitle = styled.h3`
  color: #0d47a1;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

function Awards() {
  const Awards = [
    {
      title:
        "First Prize in 53rd Youth Parliament Competition, 2018-19 for Delhi Schools.",
    },
    {
      title: "Second Prize in Declamation at National Science Organization.",
    },
    { title: "Black Belt First Dan Martial Artist" },
  ];

  return (
    <AwardsSection>
      <Title>Awards</Title>
      <AwardsGrid>
        {Awards.map((cert, index) => (
          <AwardCard key={index}>
            <AwardTitle>{cert.title}</AwardTitle>
          </AwardCard>
        ))}
      </AwardsGrid>
    </AwardsSection>
  );
}

export default Awards;
