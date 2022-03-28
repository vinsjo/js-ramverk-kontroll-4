import React from 'react';
import styles from './ProductImage.module.css';

const ProductImage = ({ image, title }) => {
	return (
		<div className={styles.background}>
			<img className={styles.img} src={image} alt={title} />
		</div>
	);
};

export default ProductImage;
