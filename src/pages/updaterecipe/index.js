import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import style from "./style.module.css";
import addImages from "../../asset/images/image.png";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRecipe, recipeUpdate } from "../../redux/action/recipe";

const UpdateRecipe = () => {
	const navigate = useNavigate();
	const hiddenFileInput = useRef(null);
	const [image, setImage] = useState(null);
	const dispatch = useDispatch();
	const handleClick = (event) => {
		hiddenFileInput.current.click();
	};
	const { id_recipe } = useParams();
	//hook useEffect
	useEffect(() => {
		dispatch(getDetailRecipe(id_recipe));
	}, [dispatch, id_recipe]);

	const recipe = useSelector((state) => {
		return state.recipe.data;
	});

	const updateSubmit = (event) => {
		event.preventDefault();
		let formData = new FormData(event.target);
		formData.append("image", image);
		handlePost(Object.fromEntries(formData));
	};
	const updateImage = (event) => {
		const fileUploaded = event.target.files[0];
		document.getElementById("images").innerHTML = fileUploaded.name;
		setImage(fileUploaded);
	};
	const handlePost = (form) => {
		recipeUpdate(form, id_recipe)
			.then((res) => {
				console.log(res);
				setImage("");
				alert("Recipe update successfully");
				return navigate("/profile");
			})
			.catch((err) => {
				console.log(err);
				alert("Failed to update recipe");
			});
	};

	return (
		<>
			<div className="container-fluid row">
				<Navbar />
				<form onSubmit={updateSubmit}>
					<div className={`container-fluid row my-5`}>
						<div className="input-group mb-3 col-12 position-relative start-50 translate-middle-x">
							<div
								className={`input-group-text col-md-7 col-12 start-50 position-relative translate-middle-x ${style.addImage}`}>
								<input
									style={{ display: "none" }}
									src={addImages}
									type="file"
									ref={hiddenFileInput}
									onChange={updateImage}
									className={`start-50 position-relative translate-middle-x`}
								/>
								<div
									type="button"
									id="addPhoto"
									className={`position-relative start-50 translate-middle-x text-center`}>
									<img
										alt=""
										src={addImages}
										className={`mx-auto rounded d-block`}
										id="images"
									/>
									<p
										className={`position-absolute ${style.text}`}
										onClick={handleClick}>
										Add Photo
									</p>
								</div>
							</div>
						</div>
						<div className="my-3 col-md-7 position-relative start-50 translate-middle-x ">
							<input
								className={`${style.input} form-control position-relative start-50 translate-middle-x`}
								type="text"
								placeholder="Title"
								defaultValue={recipe.length === 1 ? recipe.title : ""}
								name="title"
								aria-label="default input example"
							/>
						</div>
						<div className="my-3 col-md-7 position-relative start-50 translate-middle-x ">
							<textarea
								className={`${style.input} ${style.textarea} form-control position-relative start-50 translate-middle-x`}
								type="text"
								placeholder="Ingredients"
								defaultValue={recipe.length === 1 ? recipe.ingredients : ""}
								name="ingredients"></textarea>
						</div>
						<div className="my-3 col-md-7 position-relative start-50 translate-middle-x ">
							<input
								className={`${style.input} form-control position-relative start-50 translate-middle-x`}
								type="text"
								placeholder="Video"
								defaultValue={recipe.length === 1 ? recipe.video : ""}
								name="video"
								aria-label="default input example"
							/>
						</div>
					</div>
					<div className="row start-50 translate-middle-x position-relative text-center col-md-3 col-8 mb-5">
						<button type="submit" className={`${style.tbl}`}>
							Post
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default UpdateRecipe;
