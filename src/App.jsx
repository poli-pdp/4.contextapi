import { Container } from '@mui/material';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { MoviesProvider } from './context/MoviesContext';
import { UserProvider } from './context/UserContext';

const App = () => {
	return (
		<div>
			<Container>
				<UserProvider>
					<MoviesProvider>
						<Header />
						<MovieList />
					</MoviesProvider>
				</UserProvider>
			</Container>
		</div>
	);
};

export default App;
