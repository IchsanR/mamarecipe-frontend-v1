import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import style from "./style.module.css";
import addImages from "../../asset/images/image.png";
import { addRecipe } from "../../redux/action/recipe";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
	const hiddenFileInput = useRef(null);
	const user = JSON.parse(localStorage.getItem("data"));
	const id_user = user.id_user;

	const navigate = useNavigate();

	const [form, setForm] = useState({
		iduser: `${id_user}`,
		ingredients: "",
		video: "",
		title: "",
	});

	const [addImage, setAddImage] = useState();

	const handleClick = (event) => {
		hiddenFileInput.current.click();
	};

	const handleChange = (event) => {
		const fileUploaded = event.target.files[0];
		document.getElementById("images").innerHTML = fileUploaded.name;
		setAddImage(fileUploaded);
	};

	const onSubmit = (e) => {
		e.preventDefault();

		let inputForm = new FormData();
		inputForm.append("iduser", form.iduser);
		inputForm.append("title", form.title);
		inputForm.append("ingredients", form.ingredients);
		inputForm.append("image", addImage);
		inputForm.append("video", form.video);

		console.log(form, addImage);
		addRecipe(inputForm)
			.then((response) => {
				console.log(response);
				if (response.data.command === "INSERT") {
					alert("Input berhasil");
				}
				return navigate(`/profile`);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className="container-fluid row">
				<Navbar />
				<form onSubmit={(e) => onSubmit(e)}>
					<div className={`container-fluid row my-5`}>
						<div className="input-group mb-3 col-12 position-relative start-50 translate-middle-x">
							<div
								className={`input-group-text col-md-7  col-12 start-50 position-relative translate-middle-x ${style.addImage}`}>
								<input
									style={{ display: "none" }}
									src={addImages}
									type="file"
									ref={hiddenFileInput}
									onChange={handleChange}
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
						<div className="my-3 col-md-7 col-12 position-relative start-50 translate-middle-x ">
							<input
								className={`${style.input} form-control position-relative start-50 translate-middle-x`}
								type="text"
								placeholder="Title"
								onChange={(e) => {
									setForm({ ...form, title: e.target.value });
								}}
								aria-label="default input example"
							/>
						</div>
						<div className="my-3 col-md-7 col-12 position-relative start-50 translate-middle-x ">
							<textarea
								className={`${style.input} ${style.textarea} form-control position-relative start-50 translate-middle-x`}
								type="text"
								placeholder="Ingredients"
								onChange={(e) => {
									setForm({ ...form, ingredients: e.target.value });
								}}></textarea>
						</div>
						<div className="my-3 col-md-7 col-12 position-relative start-50 translate-middle-x ">
							<input
								className={`${style.input} form-control position-relative start-50 translate-middle-x`}
								type="text"
								placeholder="Video"
								onChange={(e) => {
									setForm({ ...form, video: e.target.value });
								}}
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

export default AddRecipe;
