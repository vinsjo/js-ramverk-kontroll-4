import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const usersState = atom({
	key: 'UsersState',
	default: [],
	effects: [
		({ setSelf, resetSelf }) => {
			axios
				.get('https://k4backend.osuka.dev/users')
				.then(res =>
					setSelf(
						res.data.map(userData => {
							const { password, ...user } = userData;
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
