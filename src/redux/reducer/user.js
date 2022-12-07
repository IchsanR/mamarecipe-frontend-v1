const initialState = {
	data: [],
	isLoading: false,
	isError: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_LIST_USER_PENDING":
		case "REGISTER_USER_PENDING":
		case "LOGIN_USER_PENDING":
			return { ...state, isLoading: true };
		case "GET_LIST_USER_FULLFILED":
			return { ...state, isLoading: false, data: action.payload.data };
		case "REGISTER_USER_FULLFILED":
			return { ...state, isLoading: false, data: action.payload.data };
		case "LOGIN_USER_FULLFILED":
			return {
				...state,
				isLoading: false,
				data: action.payload.data.data.data,
			};
		case "GET_LIST_USER_REJECTED":
		case "REGISTER_USER_REJECTED":
		case "LOGIN_USER_REJECTED":
			return { ...state, isLoading: false, isError: true };
		default:
			return state;
	}
};

export default userReducer;
