import React from 'react';
import { useParams } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import productsState from '../recoil/products/atom';
import Layout from '../components/Layout';
import { ProductDetails } from '../components/Product';
import { useProducts } from '../hooks';

const SingleProduct = () => {
	const { productId } = useParams();
	const { getProduct } = useProducts();
	const product = getProduct(productId);
	return (
		<Layout>
			{!product ? (
				'Product not found :('
			) : (
				<ProductDetails product={product} />
			)}
		</Layout>
	);
};

export default SingleProduct;
