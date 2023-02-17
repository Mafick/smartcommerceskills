import * as React from "react";

import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import InteractiveList from "../components/InteractiveList";

import './MyProfile.css';
import SkillSearchTextField from "../components/SkillSearchTextField";
import ColorToggleButton from "../components/ColorToggleButton";
import {Card} from "@mui/material";
import Button from "@mui/material/Button";

function MyProfile() {
	return (

		<div className="myprofile">

			<ResponsiveAppBar/>

			<Typography sx={{mt: 2, mb: 2}} variant="h6" component="div">
				Profil von "Niels Horn"
			</Typography>

			<Card sx={{mt: 2, mb: 2, p: 2, textAlign: "center"}}>
				<TextField
					id="outlined-multiline-static"
					label="Beschreibung"
					multiline
					rows={6}
					fullWidth
				/>
				<Button variant="contained" sx={{mt: 2, mb: 2}}>Speichern</Button>
			</Card>

			<Card sx={{mt: 2, mb: 2, p: 2}}>

				<Box sx={{mt: 2, mb: 2, textAlign: "center"}}>
					<ColorToggleButton/>
				</Box>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<InteractiveList/>
					</Grid>
					<Grid item xs={12} md={6}>
						<SkillSearchTextField/>
					</Grid>
				</Grid>
			</Card>

		</div>
	);
}

export default MyProfile;
