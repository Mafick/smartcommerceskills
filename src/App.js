import ResponsiveAppBar from "./components/ResponsiveAppBar";
import SkillSearchTextField from "./components/SkillSearchTextField";
import AlignItemsList from "./components/AlignItemsList";
import Card from "./components/UI/Card";

import './App.css';

function App() {
	return (

		<div className="App">

			<ResponsiveAppBar/>

			<Card>
				<h3>Skill Suche</h3>
				<SkillSearchTextField/>
			</Card>

			<Card>
				<h3>Mitarbeiter</h3>
				<AlignItemsList/>
			</Card>

		</div>
	);
}

export default App;
