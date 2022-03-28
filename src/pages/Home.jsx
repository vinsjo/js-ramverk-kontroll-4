import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
	return (
		<Layout>
			<h2>Welcome to Random Stuff Store! 🤪</h2>
			<h3>
				Check out our random stuff <Link to="/products">here</Link>!
			</h3>
		</Layout>
	);
};

export default Home;
