import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, ProductsOverview, ProductDetail, Cart } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/products" element={<ProductsOverview />} />
				<Route path="/product/:productId" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
