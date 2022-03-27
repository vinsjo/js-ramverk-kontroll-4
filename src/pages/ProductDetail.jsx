import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Product from '../components/Product';
import products from '../data/products.json';

const ProductDetails = () => {
	const { productId } = useParams();
	const product = products.find(
		product => product.id.toString() === productId
	);

	return (
		<Layout>
			<Product product={product} />
		</Layout>
	);
};

export default ProductDetails;
