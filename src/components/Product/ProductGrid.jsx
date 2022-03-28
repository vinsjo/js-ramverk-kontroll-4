import React from 'react';
import { useProducts, useCart } from '../../hooks';
import ProductGridItem from './ProductGridItem';
import styles from './ProductGrid.module.css';

const ProductGrid = () => {
	const cart = useCart();
	const { products } = useProducts();
	return (
		<div className={styles.grid}>
			{products.map(product => (
				<ProductGridItem
					key={product.id}
					product={product}
					onAdd={() => cart.addItem(product.id)}
				/>
			))}
		</div>
	);
};

export default ProductGrid;
