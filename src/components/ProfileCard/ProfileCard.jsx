import "./profile-card.scss";
import { images } from "../../constants";
import { useState, useRef, useEffect } from "react";
const ProfileCard = ({ username, setTimeframe, initialTimeframe }) => {
  const [buttons, setButtons] = useState([]);
  const buttonsDiv = useRef("");

  useEffect(() => {
    const buttons = [...buttonsDiv.current.children];
    const InitialSelectedButton = buttons.find(
      (button) => button.innerText === initialTimeframe
    );
    InitialSelectedButton.classList.add("selected");

    setButtons(buttons);
  }, []);

  const handleClick = ({ target }) => {
    if (target.tagName !== "BUTTON") return;

    const buttonText = target.textContent;

    buttons.map((button) => button.classList.remove("selected"));
    const buttonToActivate = buttons.find(
      (button) => button.textContent === buttonText
    );
    buttonToActivate.classList.add("selected");
    setTimeframe(buttonText.toLowerCase());
  };

  return (
    <div className="profile-card">
      <div className="profile-info">
        <img
          src={images.userPicture}
          alt="user picture"
          className="profile-info__picture"
        />
        <div className="username-container">
          <p className="profile-info__subtext">Report for</p>
          <h1 className="profile-info__username">{username}</h1>
        </div>
      </div>
      <div
        className="timeframe-selection"
        ref={buttonsDiv}
        onClick={(e) => handleClick(e)}
      >
        <button type="button" className="timeframe">
          Daily
        </button>
        <button type="button" className="timeframe">
          Weekly
        </button>
        <button type="button" className="timeframe">
          Monthly
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
