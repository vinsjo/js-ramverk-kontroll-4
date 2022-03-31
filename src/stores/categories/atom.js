import { atom } from 'recoil';
import { getAllCategories } from '../../utils/api';

const categoriesState = atom({
	key: 'CategoriesState',
	default: [],
	effects: [
		({ setSelf, resetSelf }) => {
			getAllCategories()
				.then(res => setSelf(res.data))
				.catch(e => {
					console.error(e);
					resetSelf();
				});
		},
	],
});

export default categoriesState;
