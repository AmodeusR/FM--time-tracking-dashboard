import styled from "styled-components";

const CardArt = styled.div`
	background: ${props => `var(--theme-${props.iconRef});`}
`;

export default CardArt;