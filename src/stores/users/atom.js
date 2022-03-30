import { atom } from 'recoil';
import { getAllUsers } from '../../utils/api';

const usersState = atom({
	key: 'UsersState',
	default: [],
	effects: [
		({ setSelf, resetSelf }) => {
			getAllUsers()
				.then(res =>
					setSelf(
						res.data.map(userData => {
							const { password, __v, ...user } = userData;
							return user;
						})
					)
				)
				.catch(e => {
					console.error(e);
					resetSelf();
				});
		},
	],
});

export default usersState;
