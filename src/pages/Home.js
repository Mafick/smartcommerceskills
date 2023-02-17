import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SkillSearchTextField from "../components/SkillSearchTextField";
import AlignItemsList from "../components/AlignItemsList";
import {Card} from "@mui/material";

function Home() {
	return (

		<div className="Home">

			<ResponsiveAppBar/>

			<Card sx={{mt: 4, mb: 2}}>
				<h3>Skill Suche</h3>
				<SkillSearchTextField/>
			</Card>

			<Card sx={{mt: 4, mb: 2}}>
				<h3>Mitarbeiter</h3>
				<AlignItemsList/>
			</Card>

		</div>
	);
}

export default Home;
