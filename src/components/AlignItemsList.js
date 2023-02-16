import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import avatar1 from '../pictures/dummy/areyer.png';
import avatar2 from '../pictures/dummy/elinde.png';
import avatar3 from '../pictures/dummy/lgering.png';

export default function AlignItemsList() {
	return (
		<List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="aReyer" src={avatar1}/>
				</ListItemAvatar>
				<ListItemText
					primary="Alberto Reyer"
					secondary={
						<React.Fragment>
							<Typography
								sx={{display: 'inline'}}
								component="span"
								variant="body2"
								color="text.primary"
							>
							</Typography>
							{'Beschreibungs Text von -Mein Profil-'}
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li"/>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="eLinde" src={avatar2}/>
				</ListItemAvatar>
				<ListItemText
					primary="Evelin Linde"
					secondary={
						<React.Fragment>
							<Typography
								sx={{display: 'inline'}}
								component="span"
								variant="body2"
								color="text.primary"
							>
							</Typography>
							{'Beschreibungs Text von -Mein Profil-'}
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li"/>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="lGering" src={avatar3}/>
				</ListItemAvatar>
				<ListItemText
					primary="Lucas Gering"
					secondary={
						<React.Fragment>
							<Typography
								sx={{display: 'inline'}}
								component="span"
								variant="body2"
								color="text.primary"
							>
							</Typography>
							{'Beschreibungs Text von -Mein Profil-'}
						</React.Fragment>
					}
				/>
			</ListItem>
		</List>
	);
}