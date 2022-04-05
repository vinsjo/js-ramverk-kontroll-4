import React from 'react';
import styles from './Avatar.module.css';
/**
 * @param {{name: String}} props
 */
const Avatar = ({ name }) => {
	const sprite = 'croodles';
	return (
		<div className={styles.container}>
			<img
				className={styles.avatar}
				src={`https://avatars.dicebear.com/api/${sprite}/${encodeURIComponent(
					name
				)}.svg`}
				alt="avatar"
			/>
		</div>
	);
};

export default Avatar;
