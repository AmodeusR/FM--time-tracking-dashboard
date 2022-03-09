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
			try {
				const response = axios.get("../db/data.json");
				const data = (await response).data;
				console.log(data);
				console.log(data.data);

				setCardData(data.data);
			}	catch (err) {
				// Ideally, we should make a useState to setFetchError,
				// and conditionally render either the content of something related
				// to the fetch error, like a component.
				// For the sake of simplicity, I decided not to do it.  
				console.log(err);
			}

		};

		fetchData();

		// Set Last timeframe data
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
