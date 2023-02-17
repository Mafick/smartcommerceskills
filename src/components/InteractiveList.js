import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {Card} from "@mui/material";

import './InteractiveList.css';
import BasicRating from "./BasicRating";

function InteractiveList() {

	return (
		<div>
			<Card sx={{mt: 4, mb: 2, backgroundColor: "#d15fee"}}>

				<Typography variant="h3" sx={{textAlign: "center"}}>
					Management
				</Typography>

				<Typography variant="h6">
					Methode
				</Typography>
				<List>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }
					>
						<ListItemText primary="Agile"/>
						<BasicRating/>
					</ListItem>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }
					>
						<ListItemText primary="SaFe"/>
						<BasicRating/>
					</ListItem>
				</List>

				<Typography variant="h6">
					Tools
				</Typography>
				<List>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }>
						<ListItemText primary="Jira"/>
						<BasicRating/>
					</ListItem>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }>
						<ListItemText primary="Confluence"/>
						<BasicRating/>
					</ListItem>
				</List>
			</Card>


			<Card sx={{mt: 4, mb: 2, backgroundColor: "#90ee90"}}>

				<Typography variant="h3" sx={{textAlign: "center"}}>
					Technik
				</Typography>

				<Typography variant="h6">
					Programmiersprachen
				</Typography>
				<List>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }
					>
						<ListItemText primary="Java"/>
						<BasicRating/>
					</ListItem>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }
					>
						<ListItemText primary="XML"/>
						<BasicRating/>
					</ListItem>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }
					>
						<ListItemText primary="JSP"/>
						<BasicRating/>
					</ListItem>
				</List>

				<Typography variant="h6">
					Frameworks
				</Typography>
				<List>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }
					>
						<ListItemText primary="Hybris"/>
						<BasicRating/>
					</ListItem>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }
					>
						<ListItemText primary="Spring"/>
						<BasicRating/>
					</ListItem>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }
					>
						<ListItemText primary="Commercetools"/>
						<BasicRating/>
					</ListItem>
				</List>
			</Card>

			<Card sx={{mt: 4, mb: 2, backgroundColor: "#00bfff"}}>

				<Typography variant="h3" sx={{textAlign: "center"}}>
					Design
				</Typography>

				<Typography variant="h6">
					Tools
				</Typography>
				<List>
					<ListItem divider
					          secondaryAction={
						          <IconButton edge="end" aria-label="delete">
							          <DeleteIcon/>
						          </IconButton>
					          }
					>
						<ListItemText primary="Photoshop"/>
						<BasicRating />
					</ListItem>
				</List>
			</Card>


		</div>
	);
}

export default InteractiveList;