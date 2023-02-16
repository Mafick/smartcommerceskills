import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SkillSearchTextField() {
	return (
		<Box
			sx={{
				margin: 5,
				maxWidth: '100%',
			}}
		>
			<TextField fullWidth label="Skill Search" id="skillSearch"/>
		</Box>
	);
}