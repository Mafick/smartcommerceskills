import ResponsiveAppBar from "../components/ResponsiveAppBar";
import StickyHeadTable from "../components/StickyHeadTable";
import ColorToggleButton from "../components/ColorToggleButton";
import Box from "@mui/material/Box";
import * as React from "react";

function AllSkills() {
	return (

		<div className="allskills">

			<ResponsiveAppBar/>

			<Box sx={{mt: 2, mb: 2, p: 2, textAlign: "center"}}>
				<ColorToggleButton/>
			</Box>

			<Box sx={{mt: 2, mb: 2}}>
				<StickyHeadTable/>
			</Box>

		</div>
	);
}

export default AllSkills;
