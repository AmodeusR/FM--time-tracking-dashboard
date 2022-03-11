import styled from "styled-components";

const CardArt = styled.div`
  border: 2px solid ${props => props.bgcolor};
  &:after {
    content: "${props => `${props.iconRef}`}";
  }
`;

export default CardArt;
