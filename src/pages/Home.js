import * as React from "react";

import {Card} from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SkillSearchTextField from "../components/SkillSearchTextField";
import AlignItemsList from "../components/AlignItemsList";
import DeletableChips from "../components/DeletableChips";

function Home() {
	return (

		<div className="Home">

			<ResponsiveAppBar/>

			<Card sx={{mt: 2, mb: 2, p: 2}}>
				<Grid container spacing={2}>

					<Grid item xs={12}>
						<h3>Skill Suche</h3>
						<SkillSearchTextField/>
					</Grid>

					<Grid item xs={9}>
						<Stack direction="row" spacing={1}>
							<DeletableChips label="Hybris"/>
							<DeletableChips label="Spring"/>
							<DeletableChips label="SCRUM"/>
						</Stack>
					</Grid>

					<Grid item xs={3}>
						<Button variant="contained">Letz Go!</Button>
					</Grid>

				</Grid>
			</Card>


			<Card sx={{mt: 2, mb: 2, p: 2}}>
				<h3>Mitarbeiter</h3>
				<AlignItemsList/>
			</Card>

		</div>
	);
}

export default Home;
