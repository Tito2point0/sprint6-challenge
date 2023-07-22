import React, { useState } from "react";
import styled, { css } from "styled-components";

const Card = styled.div`



`;
const CharDiv = styled.div`
  
`;

// Styled component for red text
const RedText = styled.span`
  color: red;
  display: flex;
  flex-direction: column;
`;

// Styled component for character container with flex layout and borders

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 13px solid black;
  padding: 10px;
  width: 50%;
  color: white;
  border-radius: 13cqmin;
  margin: 0 auto; /* Add this line to center the container horizontally */
`;


const Character = (props) => {
  const { char } = props;

  // State to track whether details are shown or hidden
  const [detailsVisible, setDetailsVisible] = useState(true);

  // Function to toggle the visibility of details
  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <Card>
      <button onClick={toggleDetails}>
        {detailsVisible ? "Hide Details" : "Show Details"}
      </button>
      {detailsVisible &&
        char.map((charmander) => {
          return (
            <CharacterContainer key={charmander.name}>
              {/* Apply the RedText styled component conditionally */}
              <h3>
                name:{" "}
                {detailsVisible ? <RedText>{charmander.name}</RedText> : charmander.name}
              </h3>
              <p>Gender: {charmander.gender}</p>
              <p>Birth Year: {charmander.birth_year}</p>
              <p>Height: {charmander.height}</p>
              <p>Mass: {charmander.mass}</p>
              <p>Hair Color: {charmander.hair_color}</p>
            </CharacterContainer>
          );
        })}
    </Card>
  );
};

export default Character;

