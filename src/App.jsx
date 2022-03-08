import { ProfileCard, Card } from "./components";
import { images } from "./constants";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const initialTimeframe = "Weekly";
	const [lastTimeframe, setLastTimeframe] = useState("Week");
	const [cardData, setCardData] = useState([]);
	const [timeframe, setTimeframe] = useState(initialTimeframe.toLowerCase());
	
	useEffect(() => {
		const fetchData = async () => {
			const response = axios.get("/db/data.json");
			const data = (await response).data;

			setCardData(data);
		};

		fetchData();

		// Set Last timeframe data;
		const lastTimeframe =
		timeframe === "daily" ? "Day" : timeframe === "weekly" ? "Week" : "Month";
		setLastTimeframe(lastTimeframe);

		
	}, [timeframe]);

	return (
		<div className="container">
			<ProfileCard
				username="Jeremy Robson"
				timeframe={timeframe}
				setTimeframe={setTimeframe}
				initialTimeframe={initialTimeframe}
			/>
			{cardData.map(({ title, timeframes }, i) => {
				return (
					<Card
						key={i}
						title={title}
						currentTime={timeframes[timeframe].current}
						previousTime={timeframes[timeframe].previous}
						icon={images[title.replace(" ", "").toLowerCase()]}
						lastTimeframe={lastTimeframe}
					/>
				);
			})}
		</div>
	);
}

export default App;
