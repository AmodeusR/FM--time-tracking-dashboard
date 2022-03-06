import { ProfileCard, Card } from "./components";
import { images } from "./constants";

function App() {
	return (
		<div className="container">
			<ProfileCard username="Jeremy Robson" />
			<Card currentTime={23} previousTime={8} icon={images.work} />
			<Card currentTime={23} previousTime={8} icon={images.play} />
			<Card currentTime={23} previousTime={8} icon={images.study} />
			<Card currentTime={23} previousTime={8} icon={images.exercise} />
			<Card currentTime={23} previousTime={8} icon={images.social} />
			<Card currentTime={23} previousTime={8} icon={images.selfcare} />
		</div>
	);
}

export default App;


  