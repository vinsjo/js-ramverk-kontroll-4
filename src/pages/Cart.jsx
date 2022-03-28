import React from 'react';
import Layout from '../components/Layout';
import CartSummary from '../components/CartSummary';
import AuthRequired from '../components/AuthRequired';

const Cart = () => {
	return (
		<Layout>
			<AuthRequired>
				<CartSummary />
			</AuthRequired>
		</Layout>
	);
};

export default Cart;
