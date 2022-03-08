import "./card.scss";
import IconDots from "../IconDots";
import styled from "styled-components";

const card = ({ title, currentTime, previousTime, icon, lastTimeframe, cardBody }) => {
	const iconRef = icon.match(/(?<=icon-)([\s\S]*)[^.svg]/)[0];
	const CardArt = styled.div`
		background: var(--theme-${iconRef});
	`;

	return (
		<div className="card">
			<CardArt className="card__art">
				<img src={icon} alt="" />
			</CardArt>
			<div className="card__header">
				<h2 className="card__title">{title}</h2>
				<IconDots className="card__dots" />
			</div>

			<div ref={cardBody} className="card__body">
				<p className="card__current-time">{currentTime}hrs</p>
				<p className="card__previous-time">
					Last {lastTimeframe} - {previousTime}hrs
				</p>
			</div>
		</div>
	);
};

export default card;
