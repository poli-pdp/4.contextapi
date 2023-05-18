import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Header = () => {
	const { user, login, logout } = useContext(UserContext);
	console.log('Header');
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						{user ? `Hola ${user.name}` : 'Bienvenid@'}
					</Typography>
					{user ? (
						<Button onClick={logout} color='inherit'>
							Logout
						</Button>
					) : (
						<Button onClick={login} color='inherit' variant='outlined'>
							Login
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
