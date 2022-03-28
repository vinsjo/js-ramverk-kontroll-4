import React from 'react';
import { Link } from 'react-router-dom';
import { classNames, formatPrice } from '../../utils';
import { Button } from '../elements';
import ProductImage from './ProductImage';
import styles from './ProductGridItem.module.css';

const ProductGridItem = ({ product, onAdd }) => {
	return (
		<div className={styles.container}>
			<Link className={styles.link} to={`/products/${product.id}`}>
				<div className={classNames(styles.section, styles.img)}>
					<ProductImage product={product} />
				</div>
				<h5 className={styles.title}>{product.title}</h5>
			</Link>
			<div className={classNames(styles.section, styles.bottom)}>
				<p className={styles.price}>${formatPrice(product.price)}</p>
				<Button className={styles.btn} onClick={onAdd}>
					Add To Cart
				</Button>
			</div>
		</div>
	);
};

export default ProductGridItem;
