import React from 'react';
import { useRecoilValue } from 'recoil';
import productsState from '../../stores/products/atom';
import useCart from '../../hooks/useCart';
import ProductGridItem from './ProductGridItem';
import styles from './ProductGrid.module.css';

const ProductGrid = () => {
	const cart = useCart();
	const products = useRecoilValue(productsState);
	return (
		<div className={styles.grid}>
			{products.map(product => (
				<ProductGridItem
					key={product.id}
					product={product}
					onAdd={() => cart.addItem(product)}
				/>
			))}
		</div>
	);
};

export default ProductGrid;
