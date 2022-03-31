import React from 'react';
import { useRecoilValue } from 'recoil';
import filteredProductsState from '../../stores/filter/filteredProducts';
import { useCart } from '../../hooks';
import ProductGridItem from './ProductGridItem';
import styles from './ProductGrid.module.css';
import ProductFilter from './ProductFilter';

const ProductGrid = () => {
	const cart = useCart();
	const products = useRecoilValue(filteredProductsState);

	return (
		<div className={styles.container}>
			<ProductFilter />
			<div className={styles.grid}>
				{products.map(product => (
					<ProductGridItem
						key={product.id}
						product={product}
						onAdd={() => cart.addItem(product.id)}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductGrid;
