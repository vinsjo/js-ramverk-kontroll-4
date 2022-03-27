import React from 'react';
import products from '../../data/products.json';
import useCart from '../../hooks/useCart';
import ProductGridItem from './ProductGridItem';
import styles from './ProductGrid.module.css';

const ProductGrid = () => {
	const cart = useCart();
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
