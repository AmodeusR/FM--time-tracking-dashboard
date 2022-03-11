import styled from "styled-components";

const CardArt = styled.div`
  border: 2px solid ${props => props.bgcolor};
	background: ${props => `var(--theme-${props.iconRef});`}
`;

export default CardArt;
