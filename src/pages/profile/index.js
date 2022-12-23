import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import Footer from "../../components/Footer";

import profileImage from "../../asset/images/Photo Profile.png";
import editButton from "../../asset/images/edit-3.png";
import {
	deleteLike,
	deleteSaved,
	getLiked,
	getSaved,
	getUserRecipe,
	recipeDelete,
} from "../../redux/action/recipe";

const Profile = () => {
	const navigate = useNavigate();
	const user = JSON.parse(localStorage.getItem("data"));
	const iduser = user.id_user;
	const [delRecipe, setDelRecipe] = useState([]);
	const [delLike, setDelLike] = useState([]);
	const [delSave, setDelSave] = useState([]);
	const [owned, setOwned] = useState([]);
	const [liked, setLiked] = useState([]);
	const [saved, setSaved] = useState([]);

	useEffect(() => {
		const handleUserRecipe = (response) => {
			setOwned(response.data.data || []);
		};
		getUserRecipe(iduser, handleUserRecipe);

		const handleLiked = (response) => {
			setLiked(response.data.data || []);
		};
		getLiked(iduser, handleLiked);

		const handleSaved = (response) => {
			setSaved(response.data.data || []);
		};
		getSaved(iduser, handleSaved);
	}, [iduser]);

	const deleteRecipe = (id_recipe, e) => {
		e.preventDefault();

		recipeDelete(id_recipe)
			.then(() => {
				const posts = delRecipe.filter((item) => item.id_recipe !== id_recipe);
				setDelRecipe({ data: posts });

				alert("Data berhasil dihapus");

				return navigate("/home");
			})
			.catch(() => {
				alert("Failed Delete Data");
			});
	};

	const deleteLiked = (id_recipe, e) => {
		e.preventDefault();

		deleteLike(id_recipe)
			.then((res) => {
				const posts = delLike.filter((item) => item.id_recipe !== id_recipe);
				setDelLike({ data: posts });
				if (res.data.command === "DELETE") {
					alert("unlike berhasil");
					return navigate("/home");
				} else {
					alert("unlike tidak berhasil");
				}
			})
			.catch(() => {
				alert("Failed Delete Data");
			});
	};

	const deleteSave = (id_recipe, e) => {
		e.preventDefault();

		deleteSaved(id_recipe)
			.then((res) => {
				const posts = delSave.filter((item) => item.id_recipe !== id_recipe);
				setDelSave({ data: posts });
				if (res.data.command === "DELETE") {
					alert("unsaved berhasil");
					return navigate("/home");
				} else {
					alert("unsaved tidak berhasil");
				}
			})
			.catch(() => {
				alert("Failed Delete Data");
			});
	};

	const logout = (e) => {
		e.preventDefault();
		localStorage.clear();
		return navigate("/login");
	};
	const data = JSON.parse(localStorage.getItem("data"));

	return (
		<>
			<div className={`container-fluid row`}>
				<Navbar />
				<div className="container-fluid row position-relative text-center">
					<div className="position-relative my-5 my-md-5">
						<img
							alt=""
							src={profileImage}
							className={`img-fluid mx-auto ms-5 ${style.profilePic}`}
						/>
						<img
							src={editButton}
							alt=""
							className={`${style.editButton}`}
							data-bs-toggle="collapse"
							data-bs-target="#profile-button"
							aria-expanded="false"
							aria-controls="profile-button"
							type="button"
						/>
					</div>
					<div
						className={`buttons position-relative justify-content-center start-50 translate-middle-x col-md-4 col-xxl-2 collapse text-center mb-5 ${style.changeButton} `}
						id="profile-button">
						<button
							type="button"
							className={`btn btn-secondary rounded col-7 mx-auto ms-md-5 ms-xxl-2 ms-4`}
							onClick={(e) => logout(e)}>
							<Link to="#" className={`fw-bold ${style.profileButtonLink}`}>
								{" "}
								Log out{" "}
							</Link>
						</button>
					</div>
					<div className={`text-center ms-4 ms-md-4 ms-xxl-4 ${style.name}`}>
						<h1 className={`text-center fs-5 fw-semibold`}>{data.name}</h1>
					</div>
				</div>
				<div className={`menuRecipe row`}>
					<div className={`position-relative mt-5 ${style.contentTitle}`}>
						<ul className="me-auto mb-2">
							<li className={`${style.titleRecipe}`}>
								<Link
									className={`ms-md-5 me-md-3 me-xxl-5 ${style.menuLink}`}
									data-bs-toggle="collapse"
									data-bs-target="#myRecipe"
									type="button"
									aria-expanded="false"
									aria-controls="myRecipe">
									My Recipe
								</Link>
							</li>
							<li className={`${style.titleRecipe}`}>
								<Link
									className={`mx-md-5 mx-xxl-5 ${style.menuLink}`}
									data-bs-toggle="collapse"
									data-bs-target="#savedRecipe"
									role="button"
									aria-expanded="false"
									aria-controls="savedRecipe">
									Saved Recipe
								</Link>
							</li>
							<li className={`${style.titleRecipe}`}>
								<Link
									className={`mx-md-3 mx-xxl-5 ${style.menuLink}`}
									data-bs-toggle="collapse"
									data-bs-target="#likeRecipe"
									role="button"
									aria-expanded="false"
									aria-controls="likeRecipe">
									Liked Recipe
								</Link>
							</li>
						</ul>
						<div
							className={`border container-fluid mt-4 ${style.sectionLimit}`}></div>
						<div className="collapse" id="myRecipe">
							{owned.length === 0 ? (
								<h1>No Recipe Found</h1>
							) : (
								owned.map((item, index) => (
									<div
										key={index}
										className={`my-md-3 ${style.menuCollapse} mx-md-3`}>
										<div className={`${style.block} ${style.flex}`}>
											<Link to={`/detail/${item.id_recipe}`}>
												<img
													src={`${item.image.split("|&&|")[0]}`}
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
														<button
															type="button"
															className="btn btn-primary me-2">
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
								))
							)}
						</div>
						{saved.length === 0 ? (
							<div className="collapse" id="savedRecipe">
								<h1>No Recipe Found</h1>
							</div>
						) : (
							saved.map((item, index) => (
								<div
									key={index}
									className={`my-md-3 ${style.menuCollapse} mx-md-3 collapse`}
									id="savedRecipe">
									<Link to={`/detail/${item.id_recipe}`}>
										<img
											src={item.image ? `${item.image.split("|&&|")[0]}` : "/"}
											alt=""
											className={`${style.imageRow}`}
										/>
										<p
											className={`${style.desc} ${style.desc1} position-absolute fs-4 ms-md-3 `}>
											{item.title}
										</p>
									</Link>
									<div>
										<button
											type="button"
											className="btn btn-danger my-2"
											onClick={(e) => deleteSave(item.id_recipe, e)}>
											Unsaved
										</button>
									</div>
								</div>
							))
						)}
						{liked.length === 0 ? (
							<div className="collapse" id="likeRecipe">
								<h1>No Recipe Found</h1>
							</div>
						) : (
							liked.map((item, index) => (
								<div
									key={index}
									className={`my-md-3 ${style.menuCollapse} mx-md-3 collapse`}
									id="likeRecipe">
									<Link to={`/detail/${item.id_recipe}`}>
										<img
											src={item.image ? `${item.image.split("|&&|")[0]}` : "/"}
											alt=""
											className={`${style.imageRow}`}
										/>
										<p
											className={`${style.desc} ${style.desc1} position-absolute fs-4 ms-md-3 `}>
											{item.title}
										</p>
									</Link>
									<div>
										<button
											type="button"
											className="btn btn-danger my-2"
											onClick={(e) => deleteLiked(item.id_recipe, e)}>
											Unlike
										</button>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Profile;
