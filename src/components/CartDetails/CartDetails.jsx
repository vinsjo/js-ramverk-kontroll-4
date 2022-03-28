import React, { useState, useEffect } from 'react';
import { useCart, useProducts } from '../../hooks';
import { classNames, formatPrice } from '../../utils';
import { Button } from '../elements';
import Popup from '../elements/Popup';
import CartItem from './CartItem';
import styles from './CartDetails.module.css';

const CartSummary = () => {
	const cart = useCart();
	const { getProduct } = useProducts();
	const [showPopup, setShowPopup] = useState(false);
	const getTotal = () => {
		return cart.items.reduce((acc, { id, count }) => {
			const product = getProduct(id);
			return !product ? acc : acc + product.price * count;
		}, 0);
	};

	useEffect(() => {
		if (!showPopup) return;
		const timeout = setTimeout(() => {
			setShowPopup(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [showPopup, setShowPopup]);

	return (
		<div className={styles.container}>
			<ul className={styles.items}>
				{!cart.count ? (
					<h4>Cart is empty</h4>
				) : (
					cart.items.map(({ id, count }) => {
						return (
							<CartItem
								key={id}
								productId={id}
								count={count}
								onCountChange={value =>
									cart.setItemCount(id, value)
								}
								onDelete={() => cart.setItemCount(id, 0)}
							/>
						);
					})
				)}
			</ul>
			<div className={styles.total}>
				{!cart.count ? (
					''
				) : (
					<>
						<span>Total:</span>
						<span>${formatPrice(getTotal())}</span>
					</>
				)}
			</div>
			<div className={styles.actions}>
				<Button
					variant="filled"
					onClick={() => cart.empty()}
					disabled={!cart.count}
				>
					Empty Cart
				</Button>
				<Button
					disabled={!cart.count}
					onClick={() => setShowPopup(true)}
				>
					Checkout
				</Button>
			</div>
			<Popup show={showPopup} onClick={() => setShowPopup(false)}>
				<h4 className={styles['popup-content']}>
					Checkout is not available yet... 😥
				</h4>
			</Popup>
		</div>
	);
};

export default CartSummary;
