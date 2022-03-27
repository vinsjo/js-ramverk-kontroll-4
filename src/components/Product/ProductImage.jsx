import React from 'react';
import styles from './ProductImage.module.css';

const ProductImage = ({ product }) => {
	return (
		<div className={styles.background}>
			<img
				className={styles.img}
				src={product.image}
				alt={product.title}
			/>
		</div>
	);
};

export default ProductImage;
