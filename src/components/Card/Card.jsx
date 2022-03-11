import "./card.scss";
import IconDots from "../IconDots";

const card = ({
  title,
  currentTime,
  previousTime,
  icon,
  lastTimeframe,
  cardBody,
}) => {
  const iconRef = title.toLowerCase().replace(" ", "");
  const cardBackground = { background: `var(--theme-${iconRef})` };

  return (
    <div className="card">
      <div style={cardBackground} className="card__art">
        <img src={icon} alt="" />
      </div>
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
