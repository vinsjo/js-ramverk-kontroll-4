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
	NotFound,
} from './pages';
import UserProvider from './providers/UserProvider';

const App = () => {
	return (
		<UserProvider>
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
						<Route element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</UserProvider>
	);
};

export default App;
