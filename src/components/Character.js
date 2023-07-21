import React from "react";
import styled from "styled-components";

const Card = styled.div``
const CharDiv = styled.div``

const Character = (props) => {
  const { char } = props;
  return (
    <Card>
      {char.map((charmander) => {
        return (
            <CharDiv key={charmander}>
            <h3>name: {charmander.name}</h3>
            <p>Gender: {charmander.gender}</p>
            <p>Birth Year: {charmander.birth_year}</p>
          </CharDiv>
        )
      })}
    </Card>
  )
}
/*
import React from "react";
import styled from "styled-components";

const Card = styled.div;
const CharDiv = styled.div;

const Character = (props) => {
  const { char } = props;
  return (
    <Card>
      {char.map((charmander) => {
        return (
            <CharDiv key={charmander}>
            <h3>name: {charmander.name}</h3>
            <p>Gender: {charmander.gender}</p>
            <p>Birth Year: {charmander.birth_year}</p>
          </CharDiv>
        )
      })}
    </Card>
  )
}
export default Character;


*/


export default Character;
