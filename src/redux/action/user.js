import axios from "axios";

// get pakai reducer
export const getUser = (id_user) => {
	return {
		type: "GET_LIST_USER",
		payload: axios({
			url: `${process.env.REACT_APP_BACKEND_URL}/user/${id_user}`,
			method: "GET",
		}),
	};
};

// registration
export const userRegistration = (form, handleSuccess) => {
	return {
		type: "REGISTER_USER",
		payload: new Promise((resolve, reject) => {
			axios
				.post(`${process.env.REACT_APP_BACKEND_URL}/register`, form)
				.then((response) => {
					handleSuccess();
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};

export const userLogin = (form, handleSuccess) => {
	return {
		type: "LOGIN_USER",
		payload: new Promise((resolve, reject) => {
			axios
				.post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
				.then((response) => {
					handleSuccess(response);
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};
