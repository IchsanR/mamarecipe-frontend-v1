import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserRecipe, recipeDelete } from "../redux/action/recipe";
import style from "../asset/style/style.module.css";

const MyRecipe = () => {
	// const [dataRecipe, setDataRecipe] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [delRecipe, setDelRecipe] = useState([]);
	const user = JSON.parse(localStorage.getItem("data"));
	const iduser = user.id_user;

	useEffect(() => {
		dispatch(getUserRecipe(iduser));
	}, [iduser]);

	const recipe = useSelector((state) => {
		return state.recipe;
	});
	console.log(recipe.data.length);

	const deleteRecipe = (id_recipe, e) => {
		e.preventDefault();

		recipeDelete(id_recipe)
			.then((res) => {
				console.log(res);

				const posts = delRecipe.filter((item) => item.id_recipe !== id_recipe);
				setDelRecipe({ data: posts });

				alert("Data berhasil dihapus");

				return navigate("/home");
			})
			.catch((err) => {
				console.log(err);
				alert("Failed Delete Data");
			});
	};

	return (
		<>
			{recipe.data.length == undefined ? (
				<h1>No recipe found</h1>
			) : recipe.isLoading ? (
				<h1>Recipe Loading</h1>
			) : recipe == undefined ? (
				<h1>No recipe found</h1>
			) : (
				recipe.data.map((item, index) => (
					<div key={index} className={`my-md-3 ${style.menuCollapse} mx-md-3`}>
						<div className={`collapse col`} id="myRecipe">
							<div className={`${style.block} ${style.flex}`}>
								<Link to={`/detail/${item.id_recipe}`}>
									<img
										src={`${process.env.REACT_APP_BACKEND_URL}/recipe/${item.image}`}
										alt=""
										className={`${style.imageRow}`}
									/>
									<p
										className={`${style.desc} ${style.desc1} position-absolute fs-4 ms-md-3 `}>
										{item.title}
									</p>
								</Link>
								<div className={`ms-2 my-1 ${style.flexMobileButton}`}>
									<div className="mb-3">
										<Link to={`/update/${item.id_recipe}`}>
											<button type="button" className="btn btn-primary me-2">
												Update
											</button>
										</Link>
									</div>
									<div>
										<button
											type="button"
											className="btn btn-danger"
											onClick={(e) => deleteRecipe(item.id_recipe, e)}>
											Delete
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))
			)}
		</>
	);
};

export default MyRecipe;
