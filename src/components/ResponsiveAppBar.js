import * as React from 'react';
import Menu from '@mui/material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';

import logo from '../pictures/mini_logo.png';
import avatar from '../pictures/dummy/nhorn.png';

import './ResponsiveAppBar.css';


const pages = ['Mein Profil', 'Alle Skills', 'Kontakt'];
const settings = ['Logout'];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static"
		        sx={{
			        background: 'black',
		        }}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters
				>
					<img src={logo} className="App-logo" alt="logo"/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						Skills
					</Typography>

					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/myprofile"
						sx={{
							mr: 2,
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						Mein Profil
					</Typography>

					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/allskills"
						sx={{
							mr: 2,
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						Alle Skills
					</Typography>

					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/contact"
						sx={{
							mr: 2,
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						Kontakt
					</Typography>


					<Box sx={{
						flexGrow: 1,
						textAlign: 'right'
					}}>
						<IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
							<Avatar alt="asdf" src={avatar}/>
						</IconButton>
						<Menu
							sx={{mt: '45px'}}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default ResponsiveAppBar;