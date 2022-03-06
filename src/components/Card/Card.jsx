import "./card.scss";
import IconDots from "../IconDots";
import styled from "styled-components";

const card = ({currentTime, previousTime, icon }) => {
	const iconRef = icon.match(/(?<=icon-)([\s\S]*)[^.svg]/)[0];

	const CardArt = styled.div`
		background: var(--theme-${iconRef});
	`;

	const capitalize = text => {
		return text.slice(0, 1).toUpperCase() + text.slice(1);
	};


	
	return (
		<div className="card">
			<CardArt className="card__art" >
				<img src={icon} alt="" />
			</CardArt>
			<div className="card__header">
				<h2 className="card__title">{capitalize(iconRef)}</h2>
				<IconDots className="card__dots" />
			</div>

			<div className="card__body">
				<p className="card__current-time">{currentTime}hrs</p>
				<p className="card__previous-time">Last timespan - {previousTime}hrs</p>
			</div>
		</div>
	);
};

export default card;
