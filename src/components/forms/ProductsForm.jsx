import React, { useState, useCallback, useEffect } from 'react';
import { InputField, Button } from '../elements';
import { replaceItemAtIndex } from '../../utils';
import styles from './ProductsForm.module.css';
import { useProducts } from '../../hooks';

const ProductsForm = () => {
	const [updated, setUpdated] = useState([]);
	const { products, updateProduct, deleteProduct } = useProducts();

	const isUpdated = useCallback(
		id => {
			return !!updated.find(product => product.id === id);
		},
		[updated]
	);

	const handleChange = useCallback(
		(product, key, value) => {
			const i = updated.findIndex(({ id }) => id === product.id);
			setUpdated(
				i < 0
					? [...updated, { ...product, [key]: value }]
					: replaceItemAtIndex(updated, i, {
							...updated[i],
							[key]: value,
					  })
			);
		},
		[updated, setUpdated]
	);

	const handleUpdateSubmit = useCallback(
		(e, productId) => {
			e.preventDefault();
			const data = updated.find(product => product.id === productId);
			if (!data) return;
			updateProduct(data).then(() =>
				setUpdated(updated.filter(product => product.id !== productId))
			);
		},
		[updated, setUpdated, products]
	);

	useEffect(() => {
		setUpdated(
			updated.filter(product => {
				const stored = products.findIndex(
					({ id }) => id === product.id
				);
				return !stored
					? false
					: Object.entries(product).reduce(
							(acc, [key, value]) => acc || stored[key] !== value,
							false
					  );
			})
		);
	}, [products]);

	return (
		<div className={styles.container}>
			{products.map(product => {
				const { image, rating, ...data } =
					updated.find(data => data.id === product.id) || product;
				const id = `product-${product.id}`;
				return (
					<form
						className={styles.form}
						key={id}
						onSubmit={e => handleUpdateSubmit(e, product.id)}
					>
						{Object.entries(data).map(([key, value]) => {
							if (key === 'id') {
								return (
									<h4
										key={`${id}-${key}`}
										className={styles.title}
									>
										ID: {value}
									</h4>
								);
							}
							const onChange = input => {
								handleChange(product, key, input);
							};
							return (
								<InputField
									className={styles.input}
									containerClassName={
										styles['input-container']
									}
									key={`${id}-${key}`}
									value={value}
									label={key}
									placeholder={key}
									onChange={onChange}
								/>
							);
						})}
						<div className={styles['btn-container']}>
							<Button
								type="button"
								variant="filled"
								onClick={() => deleteProduct(product.id)}
							>
								Delete
							</Button>
							<Button
								type="submit"
								disabled={!isUpdated(product.id)}
							>
								Update
							</Button>
						</div>
					</form>
				);
			})}
		</div>
	);
};

export default ProductsForm;
