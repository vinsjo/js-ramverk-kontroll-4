import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetails } from '../components/Product';
import { useProducts } from '../hooks';

const SingleProduct = () => {
	const { productId } = useParams();
	const { getProduct } = useProducts();
	const product = getProduct(productId);
	return !product ? (
		'Product not found :('
	) : (
		<ProductDetails product={product} />
	);
};

export default SingleProduct;
