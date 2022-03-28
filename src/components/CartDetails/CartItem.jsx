import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks';
import { formatPrice } from '../../utils';
import { Button, NumberInput } from '../elements';
import styles from './CartItem.module.css';

const CartItem = ({ productId, count, onCountChange, onDelete }) => {
	const { getProduct } = useProducts();
	const product = getProduct(productId);
	return (
		<li className={styles.item}>
			<Button className={styles.delete} onClick={onDelete} variant="icon">
				<IoMdClose />
			</Button>
			<div className={styles.info}>
				<Link
					to={`/products/${productId}`}
					title="Product Page"
					className={styles.title}
				>
					{product.title}
				</Link>
				<p className={styles.price}>
					${formatPrice(count * product.price)}
				</p>
			</div>
			<NumberInput
				className={styles.input}
				initialValue={count}
				min={0}
				onChange={onCountChange}
				maxLength={4}
			/>
		</li>
	);
};

export default CartItem;
