export const faker = (state = [], action) => {
	switch (action.type) {
	case 'FAKER_FULFILLED': {
		const { allTodos } = action.data;
		console.log(allTodos);
		return allTodos;
	}

	default:
		return state;
	}
};