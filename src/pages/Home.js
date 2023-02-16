import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SkillSearchTextField from "../components/SkillSearchTextField";
import AlignItemsList from "../components/AlignItemsList";
import Card from "../components/UI/Card";

function Home() {
	return (

		<div className="Home">

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

export default Home;
