import React, { useState, useCallback, useEffect } from 'react';
import { InputField, Button, Select, TextArea } from '../elements';
import { replaceItemAtIndex } from '../../utils';

import { useProducts } from '../../hooks';
import { useRecoilValue } from 'recoil';
import categoriesState from '../../stores/categories/atom';
import styles from './ProductsForm.module.css';

const ProductsForm = () => {
	const [updated, setUpdated] = useState([]);
	const { products, updateProduct, deleteProduct } = useProducts();
	const categories = useRecoilValue(categoriesState);

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
						<h4 className={styles.title}>ID: {data.id}</h4>
						{['title', 'price'].map(key => (
							<InputField
								key={`${id}-${key}`}
								id={`${id}-${key}`}
								className={styles.input}
								containerClassName={styles['input-container']}
								value={data[key]}
								label={key}
								placeholder={key}
								onChange={value =>
									handleChange(product, key, value)
								}
							/>
						))}
						<TextArea
							value={data.description}
							id={`${id}-description`}
							containerClassName={styles['input-container']}
							label="description"
							placeholder="description"
							onChange={value =>
								handleChange(product, 'description', value)
							}
						/>
						<Select
							containerClassName={styles['input-container']}
							label="category"
							id={`${id}-category`}
							options={categories}
							value={data.category}
							onChange={value =>
								handleChange(product, 'category', value)
							}
						/>

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
