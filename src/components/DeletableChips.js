import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function DeletableChips(props) {
	const handleDelete = () => {
		console.info('You clicked the delete icon.');
	};

	return (
			<Chip label={props.label} variant="outlined" onDelete={handleDelete}/>
	);
}