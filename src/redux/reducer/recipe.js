const initialState = {
	data: [],
	isLoading: false,
	isError: false,
};

const recipeReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_LIST_RECIPE_PENDING":
			return { ...state, isLoading: true };
		case "GET_LIST_RECIPE_FULFILLED":
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data,
			};
		case "GET_LIST_RECIPE_REJECTED":
			return { ...state, isLoading: false, isError: true };
		case "GET_DETAIL_RECIPE_PENDING":
			return { ...state, isLoading: true };
		case "GET_DETAIL_RECIPE_FULFILLED":
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data[0],
			};
		case "GET_DETAIL_RECIPE_REJECTED":
			return { ...state, isLoading: false, isError: true };
		case "GET_SEARCH_RECIPE_REJECTED":
			return { ...state, isLoading: false, isError: true };
		case "GET_SEARCH_RECIPE_PENDING":
			return { ...state, isLoading: true };
		case "GET_SEARCH_RECIPE_FULFILLED":
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data,
			};
		case "GET_USER_RECIPE_FULFILLED":
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data,
			};
		case "GET_USER_RECIPE_REJECTED":
			return { ...state, isLoading: false, isError: true };
		case "GET_USER_RECIPE_PENDING":
			return { ...state, isLoading: true };
		default:
			return state;
	}
};

export default recipeReducer;
