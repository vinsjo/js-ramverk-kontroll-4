import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<h2>Welcome to Random Stuff Store! 🤪</h2>
			<h3>
				Check out our random stuff <Link to="/products">here</Link>!
			</h3>
		</>
	);
};

export default Home;
