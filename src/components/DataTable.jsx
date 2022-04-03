import React, { useState, useEffect, useMemo } from 'react';
import { isNum, isObj, isStr } from 'x-is-type';
import { classNames, flattenObj } from '../utils';
import styles from './DataTable.module.css';

const DataTable = ({ className, data = [] }) => {
	const flatData = useMemo(() => data.map(obj => flattenObj(obj)));

	const columns = useMemo(
		() =>
			flatData.reduce((cols, obj) => {
				return !isObj(obj)
					? cols
					: [
							...cols,
							...Object.keys(obj).filter(
								key => !cols.includes(key)
							),
					  ];
			}, []),
		[flatData]
	);

	return (
		<table className={classNames(styles.table, className)}>
			<thead className={styles.thead}>
				<tr className={styles.row}>
					{columns.map((col, i) => (
						<th key={`col-${i}`} className={styles.th}>
							{col}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{flatData.map((row, i) => {
					const rowKey = `row-${i}`;
					return (
						<tr className={styles.row} key={rowKey}>
							{Object.entries(row).map(([key, value]) => {
								return (
									<td
										key={`${rowKey}-${key}`}
										className={styles.td}
									>
										{value}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default DataTable;
