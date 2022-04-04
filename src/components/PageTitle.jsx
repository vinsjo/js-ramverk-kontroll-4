import React, { useMemo } from 'react';
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
const titles = [
	titleObj('/products'),
	titleObj('/login'),
	titleObj('/register'),
	titleObj('/profile'),
	titleObj('/cart'),
	titleObj('/admin'),
];

const PageTitle = ({ baseTitle = 'RSS' }) => {
	const { pathname } = useLocation();
	const currentTitle = useMemo(() => {
		const current = titles.find(({ path }) => pathname.includes(path));
		return !current ? null : current.title;
	}, [pathname]);
	return (
		<Helmet>
			<title>
				{baseTitle}
				{!currentTitle ? '' : ` | ${currentTitle}`}
			</title>
		</Helmet>
	);
};

export default PageTitle;
