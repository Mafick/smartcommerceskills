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

function MyProfile() {
	return (

		<div className="myprofile">

			<ResponsiveAppBar/>

			<Typography sx={{mt: 4, mb: 2}} variant="h6" component="div">
				Profil von "Niels Horn"
			</Typography>

			<Box sx={{mt: 4, mb: 2}}>
				<TextField
					id="outlined-multiline-static"
					label="Beschreibung"
					multiline
					rows={6}
					fullWidth
				/>
			</Box>

			<Box sx={{mt: 4, mb: 2, textAlign: "center"}}>
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

		</div>
	);
}

export default MyProfile;
