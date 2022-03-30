import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/containers/Layout';
import {
	Home,
	Products,
	SingleProduct,
	Cart,
	Login,
	Admin,
	Profile,
	NotFound,
} from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route
						path="/products/:productId"
						element={<SingleProduct />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<Login />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/profile" element={<Profile />} />
					<Route element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
