import axios from "axios";

// get pakai reducer
export const getRecipe = () => {
	return {
		type: "GET_LIST_RECIPE",
		payload: axios({
			url: `${process.env.REACT_APP_BACKEND_URL}/recipe`,
			method: "GET",
		}),
	};
};

export const getUserRecipe = (iduser) => {
	return {
		type: "GET_USER_RECIPE",
		payload: axios({
			url: `${process.env.REACT_APP_BACKEND_URL}/recipe/user/${iduser}`,
			method: "GET",
		}),
	};
};

export const getDetailRecipe = (id_recipe) => {
	return {
		type: "GET_DETAIL_RECIPE",
		payload: new Promise((resolve, reject) => {
			axios({
				url: `${process.env.REACT_APP_BACKEND_URL}/recipe/detail/${id_recipe}`,
				method: "GET",
			})
				.then((response) => {
					resolve(response);
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};

export const getSearchRecipe = (title, sort, page, handleSuccess) => {
	return {
		type: "GET_SEARCH_RECIPE",
		payload: new Promise((resolve, reject) => {
			axios({
				url: `${
					process.env.REACT_APP_BACKEND_URL
				}/recipe/search?title=${title}${sort ? `&sortOrd=${sort}` : ""}${
					page ? `&page=${page}` : ""
				}`,
				method: "GET",
			})
				.then((response) => {
					resolve(response);
					handleSuccess();
				})
				.catch((error) => {
					reject(error);
				});
		}),
	};
};

export const addRecipe = (form, addImage) => {
	return new Promise((resolve, reject) => {
		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/recipe`, form, addImage)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const recipeUpdate = (form, id_recipe) => {
	return new Promise((resolve, reject) => {
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_URL}/recipe/update/${id_recipe}`,
				form,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export const recipeDelete = (id_recipe) => {
	return new Promise((resolve, reject) => {
		axios
			.delete(`${process.env.REACT_APP_BACKEND_URL}/recipe/${id_recipe}`)
			.then((response) => {
				resolve(response);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
