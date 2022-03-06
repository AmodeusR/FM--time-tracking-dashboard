import "./card.scss";
// import { images } from "/src/constants";
import IconDots from "../IconDots";

const card = ({ title, currentTime, previousTime }) => {
	return (
		<div className="card">
			<div className="card__header">
				<h2 className="card__title">{title}</h2>
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
