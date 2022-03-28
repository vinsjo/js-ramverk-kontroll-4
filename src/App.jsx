import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	Home,
	ProductsOverview,
	ProductDetails,
	Cart,
	Login,
	Admin,
	NotFound,
} from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/products" element={<ProductsOverview />} />
				<Route
					path="/products/:productId"
					element={<ProductDetails />}
				/>
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Admin />} />
				<Route element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
