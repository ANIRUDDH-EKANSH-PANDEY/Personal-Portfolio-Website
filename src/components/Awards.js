import React from "react";
import {
  AwardsSection,
  Title,
  AwardsGrid,
  AwardCard,
  AwardTitle,
} from "../styles/AwardsStyles";

function Awards() {
  const awards = [
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
        {awards.map((award, index) => (
          <AwardCard key={index}>
            <AwardTitle>{award.title}</AwardTitle>
          </AwardCard>
        ))}
      </AwardsGrid>
    </AwardsSection>
  );
}

export default Awards;
