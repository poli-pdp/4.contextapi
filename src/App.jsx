import { Container } from '@mui/material';
import Header from './components/Header';
import MovieList from './components/MovieList';
import { UserProvider } from './context/UserContext';

const App = () => {
	return (
		<div>
			<Container>
				<UserProvider>
					<Header />
					<MovieList />
				</UserProvider>
			</Container>
		</div>
	);
};

export default App;
