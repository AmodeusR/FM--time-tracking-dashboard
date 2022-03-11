import "./card.scss";
import IconDots from "../IconDots";
import CardArt from "../../styles/styled-components";

const card = ({ title, currentTime, previousTime, icon, lastTimeframe, cardBody }) => {
	const iconRef = icon.match(/(?<=icon-)([\s\S]*)[^.svg]/)[0];

	return (
		<div className="card">
			<CardArt iconRef={iconRef} className="card__art" bgcolor="green">
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
