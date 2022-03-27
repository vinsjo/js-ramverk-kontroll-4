import React, { useState, useEffect } from 'react';
import useCart from '../../hooks/useCart';
import { classNames, formatPrice } from '../../utils';
import { Button } from '../elements';
import Popup from '../elements/Popup';
import CartItem from './CartItem';
import styles from './CartSummary.module.css';

const CartSummary = () => {
	const cart = useCart();

	const [showPopup, setShowPopup] = useState(false);

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
					cart.items.map(({ product, count }) => (
						<CartItem
							key={product.id}
							product={product}
							count={count}
							onCountChange={value =>
								cart.setItemCount(product, value)
							}
							onDelete={() => cart.setItemCount(product, 0)}
						/>
					))
				)}
			</ul>
			<div className={styles.total}>
				{!cart.count ? (
					''
				) : (
					<>
						<span>Total:</span>{' '}
						<span>${formatPrice(cart.totalPrice)}</span>
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
