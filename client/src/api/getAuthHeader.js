import store from 'store2';

export default async () => {
	const authToken = await store.get('authToken');
	if (authToken) {
		return {
		  authorization: `Bearer ${authToken}`,
		};
	}
}