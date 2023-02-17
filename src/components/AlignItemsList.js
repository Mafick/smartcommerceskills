import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import AccountBoxIcon from '@mui/icons-material/AccountBox';

import avatar1 from '../pictures/dummy/areyer.png';
import avatar2 from '../pictures/dummy/elinde.png';
import avatar3 from '../pictures/dummy/lgering.png';

export default function AlignItemsList() {
	return (
		<List>
			<ListItem alignItems="flex-start"
			          secondaryAction={
				          <IconButton edge="end" aria-label="account">
					          <AccountBoxIcon/>
				          </IconButton>}
			>
				<ListItemAvatar>
					<Avatar>
						<Avatar alt="aReyer" src={avatar1}/>
					</Avatar>
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
			<ListItem alignItems="flex-start"
			          secondaryAction={
				          <IconButton edge="end" aria-label="account">
					          <AccountBoxIcon/>
				          </IconButton>}
			>
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
			<ListItem alignItems="flex-start"
			          secondaryAction={
				          <IconButton edge="end" aria-label="account">
					          <AccountBoxIcon/>
				          </IconButton>}
			>
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