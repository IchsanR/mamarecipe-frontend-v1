import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import style from "./style.module.css";

import loginImg from "../../asset/images/User icon.png";
import homeImg from "../../asset/images/HomeImg.png";
import midImg from "../../asset/images/ImageSect2.png";
import midImg2 from "../../asset/images/ImageSect3.png";
import first1 from "../../asset/images/Row1-3.png";
import first2 from "../../asset/images/Row1-2.png";
import first3 from "../../asset/images/Row1-1.png";
import second1 from "../../asset/images/Row2-1.png";
import second2 from "../../asset/images/Row2-2.png";
import second3 from "../../asset/images/Row2-3.png";

const Landing = () => {
	return (
		<>
			<div className="container-fluid row">
				<div className={`position-relative`}>
					<div
						className={`position-absolute col-1 top-0 end-0 mt-md-5 me-3  ${style.loginButton}`}>
						<img src={loginImg} alt="" className={`${style.loginIcon}`} />
						<Link
							to="/login"
							className={`ms-md-2 text-center ${style.loginText}`}>
							Login
						</Link>
					</div>
				</div>
				<Navbar />
				<div
					className={`${style.rightPanel} position-absolute end-0 col-3`}></div>
				<div className={`position-relative row justify-content-center mt-5`}>
					<div className={`col-md-6`}>
						<h1 className={`${style.title}`}>
							Discover Recipe
							<br />& Delicious Food
						</h1>
						<div className={`col-10`}>
							<input
								className={`form-control ${style.searchInput}`}
								type="text"
								placeholder="Search Restaurant Food"
								aria-label="default input example"
							/>
						</div>
					</div>
					<div className="col-auto"></div>
					<div className="col-md-4 img-landing">
						<img
							src={homeImg}
							alt="picture"
							className={`${style.landingImage}`}
						/>
					</div>
				</div>
				<div className={`position-relative row justify-content-center my-5`}>
					<div className="col-md-10">
						<h1 className={`p-md-3 ${style.title2}`}>Popular For You !</h1>
					</div>
					<div className="position-relative row justify-content-center mt-5">
						<div className="col-md-6">
							<div className={`${style.borderImg1} position-absolute`}></div>
							<div>
								<img src={midImg} alt="picture" className={`${style.midImg}`} />
							</div>
						</div>
						<div className="col-md-auto"></div>
						<div className="content-2 col-md-4 position-relative my-auto ">
							<div className="">
								<h1 className={`${style.subtitle}`}>
									Healthy Bone Broth
									<br />
									Ramen (Quick & Easy)
								</h1>
							</div>
							<div className={`${style.borderShort}`}></div>
							<div className={`mt-3`}>
								<p className={`${style.description}`}>
									Quick + Easy Chicken Bone Broth Ramen-
									<br />
									Healthy chicken ramen in a hurry? That’s right!
								</p>
							</div>
							<div className="buttons">
								<Link to="/detail">
									<button type="submit" className={`${style.tbl}`}>
										Learn More
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={`position-relative row justify-content-center mt-5`}>
					<div className="col-md-10">
						<h1 className={`p-md-3 ${style.title2}`}>New Recipe</h1>
					</div>
					<div className="position-relative row justify-content-center mt-5">
						<div className="col-md-6">
							<div
								className={`${style.borderImg2} position-absolute col-md-3 start-0`}></div>
							<div className={`mt-md-5`}>
								<img
									src={midImg2}
									alt="picture"
									className={`${style.midImg}`}
								/>
							</div>
						</div>
						<div className="col-md-auto"></div>
						<div className="content-2 col-md-4 position-relative my-auto ">
							<div className="">
								<h1 className={`${style.subtitle}`}>
									Healthy Bone Broth
									<br />
									Ramen (Quick & Easy)
								</h1>
							</div>
							<div className={`${style.borderShort}`}></div>
							<div className={`mt-3`}>
								<p className={`${style.description}`}>
									Quick + Easy Chicken Bone Broth Ramen-
									<br />
									Healthy chicken ramen in a hurry? That’s right!
								</p>
							</div>
							<div className="buttons">
								<Link href="../detail/detail.html">
									<button type="submit" className={`${style.tbl}`}>
										Learn More
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={`position-relative row justify-content-center my-5`}>
					<div className="col-md-10">
						<h1 className={`p-md-3 ${style.title2}`}>Popular Recipe</h1>
					</div>
					<div className={`col-10 ${style.thumbs}`}>
						<Link to="/">
							<img src={first1} alt="" className={`${style.imageRow} me-3`} />
							<p
								className={`${style.desc} ${style.desc1} position-absolute fs-4 ms-md-3`}>
								Kare
								<br />
								Chicken
							</p>
						</Link>
						<Link to="/">
							<img
								src={first2}
								alt=""
								className={`ms-md-4 mt-md-0 mt-2 mb-2 ${style.imageRow} me-3`}
							/>
							<p
								className={`${style.desc} ${style.desc2} position-absolute fs-4`}>
								Bomb
								<br />
								Chicken
							</p>
						</Link>
						<Link to="/">
							<img
								src={first3}
								alt=""
								className={`ms-md-4 mt-md-0 mt-2 mb-2 ${style.imageRow}`}
							/>
							<p
								className={`${style.desc} ${style.desc3} position-absolute fs-4`}>
								Banana
								<br />
								Smoothie Pop
							</p>
						</Link>
					</div>
					<div className={`col-10 ${style.thumbs} mt-3`}>
						<Link to="/">
							<img src={second1} alt="" className={`${style.imageRow} me-3`} />
							<p
								className={`${style.desc} ${style.desc1} position-absolute fs-4 ms-md-3`}>
								Coffee Lava
								<br />
								Cake
							</p>
						</Link>
						<Link to="/">
							<img
								src={second2}
								alt=""
								className={`ms-md-4 mt-md-0 mt-2 mb-2 ${style.imageRow} me-3`}
							/>
							<p
								className={`${style.desc} ${style.desc2} position-absolute fs-4`}>
								Sugar
								<br />
								Salmon
							</p>
						</Link>
						<Link to="/">
							<img
								src={second3}
								alt=""
								className={`ms-md-4 mt-md-0 mt-2 mb-2 ${style.imageRow}`}
							/>
							<p
								className={`${style.desc} ${style.desc3} position-absolute fs-4`}>
								Indian
								<br />
								Salad
							</p>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Landing;
