import React, { useState, useEffect } from 'react';
import { isObj } from 'x-is-type';
import styles from './TableForm.module.css';
/**
 *
 * @param {{data: Array<Object>}} props
 * @returns
 */
const TableForm = ({ data, title }) => {
	const [columns, setColumns] = useState([]);
	useEffect(() => {
		setColumns(
			data.reduce((cols, curr) => {
				if (!isObj(curr)) return cols;
				return [
					...cols,
					...Object.keys(curr).filter(key => !cols.includes(key)),
				];
			}, [])
		);
		console.log(
			data.reduce((cols, curr) => {
				if (!isObj(curr)) return cols;
				return [
					...cols,
					...Object.keys(curr).filter(key => !cols.includes(key)),
				];
			}, [])
		);
	}, [data]);
	return !columns.length ? (
		'Loading table...'
	) : (
		<div>
			<h3>{title}</h3>
			<table>
				<thead>
					<tr>
						{columns.map(col => (
							<th key={``}></th>
						))}
					</tr>
				</thead>
			</table>
		</div>
	);
};

export default TableForm;
