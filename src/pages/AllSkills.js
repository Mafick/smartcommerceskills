import ResponsiveAppBar from "../components/ResponsiveAppBar";
import StickyHeadTable from "../components/StickyHeadTable";
import {Card} from "@mui/material";
import ColorToggleButton from "../components/ColorToggleButton";
import Box from "@mui/material/Box";
import * as React from "react";

function AllSkills() {
	return (

		<div className="allskills">

			<ResponsiveAppBar/>

			<Box sx={{mt: 4, mb: 2, textAlign: "center"}}>
				<ColorToggleButton/>
			</Box>

			<Card sx={{mt: 4, mb: 2}}>
				<StickyHeadTable/>
			</Card>


		</div>
	);
}

export default AllSkills;
