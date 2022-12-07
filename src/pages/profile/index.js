import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import style from "./style.module.css";
import MyRecipe from "../../components/MyRecipe";
import SavedRecipe from "../../components/SavedRecipe";
import LikedRecipe from "../../components/LikedRecipe";
import Footer from "../../components/Footer";

import profileImage from "../../asset/images/Photo Profile.png";
import editButton from "../../asset/images/edit-3.png";

const Profile = () => {
	const navigate = useNavigate();
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
							className={`${style.profileButton1} mx-auto ms-md-5 ms-xxl-2`}
							onClick={(e) => logout(e)}>
							<Link to="#" className={`fw-bold ${style.profileButtonLink}`}>
								{" "}
								Log out{" "}
							</Link>
						</button>
						<button
							type="button"
							className={`${style.profileButton2} mx-auto ms-md-5 ms-xxl-2`}>
							<Link
								to="/reset"
								className={`fw-bold ${style.profileButtonLink}`}>
								{" "}
								Change Password{" "}
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
									role="button"
									aria-expanded="true"
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
									aria-expanded="true"
									aria-controls="savedRecipe">
									Saved Recipe
								</Link>
							</li>
							<li className={`${style.titleRecipe}`}>
								<Link
									className={`mx-md-3 mx-xxl-5 ${style.menuLink}`}
									data-bs-toggle="collapse"
									data-bs-target="#likedRecipe"
									role="button"
									aria-expanded="true"
									aria-controls="likedRecipe">
									Liked Recipe
								</Link>
							</li>
						</ul>
						<div
							className={`border container-fluid mt-4 ${style.sectionLimit}`}></div>
						<MyRecipe />
						<SavedRecipe />
						<LikedRecipe />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Profile;
