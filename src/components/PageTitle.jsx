import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
const titleObj = (path, title) => {
	const output = { path, title };
	if (!output.title) {
		const pathTitle = path.split('/').filter(p => !!p)[0];
		output.title =
			pathTitle.substring(0, 1).toUpperCase() + pathTitle.substring(1);
	}
	return output;
};

const pageTitles = [
	titleObj('/products'),
	titleObj('/login'),
	titleObj('/register'),
	titleObj('/profile'),
	titleObj('/cart'),
	titleObj('/admin'),
];

const PageTitle = ({ defaultTitle = 'RSS' }) => {
	const { pathname } = useLocation();
	const [currentTitle, setCurrentTitle] = useState(null);
	useEffect(() => {
		const current = pageTitles.find(({ path }) => pathname.includes(path));
		setCurrentTitle(!current ? null : current.title);
	}, [pathname]);

	return (
		<Helmet>
			<title>
				{defaultTitle}
				{!currentTitle ? '' : ` | ${currentTitle}`}
			</title>
		</Helmet>
	);
};

export default PageTitle;
