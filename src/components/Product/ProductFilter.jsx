import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import categoriesState from '../../stores/categories/atom';
import filterState from '../../stores/filter/atom';
import { toggleArrayItem } from '../../utils/';
import { CheckButton } from '../elements';
import styles from './ProductFilter.module.css';

const ProductFilter = () => {
	const categories = useRecoilValue(categoriesState);
	const [filter, setFilter] = useRecoilState(filterState);

	return (
		<div className={styles.container}>
			<h5>Filter by category:</h5>
			<div className={styles['btn-container']}>
				{categories.map(cat => {
					const id = `category-${cat}`;
					return (
						<CheckButton
							key={id}
							checked={filter.cat.includes(cat)}
							onClick={() =>
								setFilter({
									...filter,
									cat: toggleArrayItem(filter.cat, cat),
								})
							}
						>
							{cat}
						</CheckButton>
						// <div key={id} className={styles['check-container']}>
						// 	<label className={styles.label} htmlFor={id}>
						// 		{cat}
						// 	</label>
						// 	<input
						// 		className={styles.checkbox}
						// 		type="checkbox"
						// 		id={id}
						// 		checked={filter.cat.includes(cat)}
						// 		onChange={() => {
						// 			setFilter({
						// 				...filter,
						// 				cat: toggleArrayItem(filter.cat, cat),
						// 			});
						// 		}}
						// 	/>
						// </div>
					);
				})}
			</div>
		</div>
	);
};

export default ProductFilter;
