import styled from "styled-components";

interface CardProps {

}

const Card = styled.div<CardProps>`
  max-width: 1280px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.14);
  padding: 2.5em;
  margin: 1em auto;
`;

export default Card;
