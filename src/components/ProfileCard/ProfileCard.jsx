import "./profile-card.scss";
import { images } from "../../constants";
import { useState, useRef, useEffect } from "react";

const ProfileCard = ({ username }) => {
	const [timespan, setTimespan] = useState("weekly");
	const [buttons, setButtons] = useState([]);
	const buttonsDiv = useRef("");

	useEffect(() => {
		const buttons = [...buttonsDiv.current.children];

		setButtons(buttons);
	}, []);

	const handleClick = ({ target }) => {
		if (target.tagName !== "BUTTON") return;
	
		const buttonText = target.textContent;

		buttons.map(button => button.classList.remove("selected"));
		const buttonToActivate = buttons.find(button => button.textContent === buttonText);
		buttonToActivate.classList.add("selected");
		setTimespan(buttonText.toLowerCase());
	};

	return (
		<div className="profile-card">
			<div className="profile-info">
				<img
					src={images.userPicture}
					alt="user picture"
					className="profile-info__picture"
				/>
				<p className="profile-info__subtext">Report for</p>
				<h1 className="profile-info__username">{username}</h1>
			</div>
			<div className="timespan-selection" ref={buttonsDiv} onClick={(e) => handleClick(e)}>
				<button type="button" className="timespan">
					Daily
				</button>
				<button type="button" className="timespan selected">
					Weekly
				</button>
				<button type="button" className="timespan">
					Monthly
				</button>
			</div>
		</div>
	);
};

export default ProfileCard;
