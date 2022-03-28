import React from 'react';
import { formatPrice } from '../../utils';
import { useCart } from '../../hooks';
import { Button } from '../elements';
import ProductImage from './ProductImage';
import styles from './ProductDetails.module.css';

const ProductDetails = ({ product }) => {
	const cart = useCart();

	return (
		<div className={styles.container}>
			<div className={styles['img-container']}>
				<ProductImage image={product.image} title={product.title} />
			</div>
			<h3 className={styles.title}>{product.title}</h3>
			<h4 className={styles.price}>${formatPrice(product.price)}</h4>
			<Button
				className={styles.btn}
				onClick={() => cart.addItem(product.id)}
			>
				Add To Cart
			</Button>
			<p className={styles.description}>{product.description}</p>
		</div>
	);
};

export default ProductDetails;
