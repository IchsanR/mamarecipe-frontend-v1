import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import contentImage from "../../asset/images/Rectangle 313.jpg";
import style from "./style.module.css";
import bookmark from "../../asset/images/Save.png";
import like from "../../asset/images/Vector.png";
import play from "../../asset/images/s.png";
import profilePic from "../../asset/images/Ellipse 128.png";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRecipe } from "../../redux/action/recipe";

const Detail = () => {
	const dispatch = useDispatch();

	const recipe = useSelector((state) => {
		return state.recipe.data;
	});

	const { id_recipe } = useParams();

	useEffect(() => {
		dispatch(getDetailRecipe(id_recipe));
	}, []);

	return (
		<>
			<div className="container-fluid row mb-md-5">
				<Navbar />
				<div className={`container-fluid row my-md-5 `}>
					<div
						className={`col-12 position-relative start-50 translate-middle-x mt-5 ms-4`}>
						<h1 className={`text-center mb-5 ${style.fontBd} ${style.title}`}>
							{recipe.title}
						</h1>
						<div className={`mt-5 position-relative`}>
							<img
								src={`${process.env.REACT_APP_BACKEND_URL}/recipe/${recipe.image}`}
								alt=""
								className={`${style.contentImage} img-fluid rounded mx-auto d-block position-relative col-md-8 col-10`}
							/>
							<img
								src={bookmark}
								alt=""
								className={`${style.bookmark} position-absolute bottom-0 end-0 mb-3`}
							/>
							<img
								src={like}
								alt=""
								className={`${style.like} position-absolute bottom-0 end-0 mb-3`}
							/>
						</div>
						<div className={`row justify-content-center mt-3 mt-md-5`}>
							<div className={`col-10 mt-md-5`}>
								<h3 className={`${style.fontBd}`}>Ingredients</h3>
							</div>
							<div className={`col-10 mt-3`}>
								<p className={`fs-4`}>{recipe.ingredients}</p>
							</div>
						</div>
						<div className={`row justify-content-center mt-3 mt-md-5`}>
							<div className={`col-10 mb-4 mb-md-5`}>
								<h3 className={`${style.fontBd}`}>Video Step</h3>
							</div>
							<div className={`col-10 mb-4 mb-md-5`}>
								<Link to="/detail/video">
									<button
										type="submit"
										className={`col-md-4 col-8 ${style.buttons}`}>
										<img src={play} alt="" />
									</button>
								</Link>
							</div>
							<div className={`col-10 mb-4 mb-md-5`}>
								<Link to="">
									<button
										type="submit"
										className={`col-md-4 col-8 ${style.buttons}`}>
										<img src={play} alt="" />
									</button>
								</Link>
							</div>
							<div className={`col-10 mb-4 mb-md-5`}>
								<Link to="">
									<button
										type="submit"
										className={`col-md-4 col-8 ${style.buttons}`}>
										<img src={play} alt="" />
									</button>
								</Link>
							</div>
							<div className={`col-10 mb-4 mb-md-5`}>
								<Link to="">
									<button
										type="submit"
										className={`col-md-4 col-8 ${style.buttons}`}>
										<img src={play} alt="" />
									</button>
								</Link>
							</div>
						</div>
						<div className={`row justify-content-center mt-3 mt-md-5`}>
							<div className={`col-10 form-floating`}>
								<textarea
									className={`form-control typing-input ${style.commentInputs}`}
									placeholder="Leave a comment here"
									id="floatingTextarea2"
									style={{ height: "350px" }}></textarea>
								<label
									for="floatingTextarea2"
									className={`${style.labels} ${style.fontBd}`}>
									Comment :
								</label>
								<button
									type="submit"
									className={`col-md-4 col-8 position-relative start-50 translate-middle-x mt-4 mb-5 ${style.buttonSubmit}`}>
									Send
								</button>
							</div>
							<div className={`col-10 mt-5 mb-md-2`}>
								<h3 className={`${style.fontBd}`}>Comment</h3>
							</div>
							<div className={`col-10 d-flex`}>
								<img
									src={profilePic}
									alt=""
									className={`${style.profilePic}`}
								/>
								<div>
									<h4 className={`ms-3 ${style.fontBd}`}>Ayudia</h4>
									<p className={`ms-3 ${style.fontLt} ${style.comments}`}>
										Nice recipe. simple and delicious, thankyou
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Detail;
