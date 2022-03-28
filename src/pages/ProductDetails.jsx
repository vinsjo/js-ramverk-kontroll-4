import React from 'react';
import { useParams } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import productsState from '../recoil/products/atom';
import Layout from '../components/Layout';
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';

const ProductDetails = () => {
	const { productId } = useParams();
	const products = useProducts();
	const product = products.getProduct(productId);
	return (
		<Layout>
			<Product product={product} />
		</Layout>
	);
};

export default ProductDetails;
