import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
	Home,
	Products,
	SingleProduct,
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
				<Route path="/products" element={<Products />} />
				<Route
					path="/products/:productId"
					element={<SingleProduct />}
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
