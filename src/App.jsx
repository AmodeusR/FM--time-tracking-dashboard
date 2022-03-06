import { ProfileCard, Card } from "./components";

function App() {
	return (
		<div className="container">
			{/* <ProfileCard username="Jeremy Robson" /> */}
			<Card title="Work" currentTime={23} previousTime={8} />
		</div>
	);
}

export default App;


  