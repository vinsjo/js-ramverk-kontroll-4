import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils';
import { Button, NumberInput } from '../elements';
import styles from './CartItem.module.css';

const CartItem = ({ product, count, onCountChange, onDelete }) => {
	return (
		<li className={styles.item}>
			<Button className={styles.delete} onClick={onDelete} variant="icon">
				<IoMdClose />
			</Button>
			<div className={styles.info}>
				<Link
					to={`/product/${product.id}`}
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
