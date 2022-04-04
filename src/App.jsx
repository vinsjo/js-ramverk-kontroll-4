import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/containers/Layout';
import { ProductDetails, ProductGrid } from './components/Product';
import PageTitle from './components/PageTitle';
import {
	Home,
	Products,
	Cart,
	Login,
	Admin,
	Profile,
	Register,
	NotFound,
} from './pages';

const App = () => {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<PageTitle />
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="products" element={<Products />}>
							<Route
								path=":productId"
								element={<ProductDetails />}
							/>
							<Route path="" element={<ProductGrid />} />
						</Route>
						<Route path="cart" element={<Cart />} />
						<Route path="login" element={<Login />} />
						<Route path="admin" element={<Admin />} />
						<Route path="profile" element={<Profile />} />
						<Route path="register" element={<Register />} />
						<Route element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
};

export default App;
