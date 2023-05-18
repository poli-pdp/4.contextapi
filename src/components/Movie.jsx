import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Movie = ({ movie }) => {
	const { user } = useContext(UserContext);
	const isFavorite = user?.moviesFavorites?.includes(movie.id);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image={movie.imgURL}
					alt={movie.title}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{movie.title}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size='small'
					color={isFavorite ? 'success' : 'primary'}
					variant={isFavorite ? 'contained' : 'outlined'}
				>
					Favorite
				</Button>
			</CardActions>
		</Card>
	);
};

export default Movie;
