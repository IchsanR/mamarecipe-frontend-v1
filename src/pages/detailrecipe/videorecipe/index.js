import React from "react";
import Navbar from "../../../components/Navbar";
import style from "../style.module.css";
import card1 from "../../../asset/images/Card-1.png";
import card2 from "../../../asset/images/Card-2.png";

const Video = () => {
	return (
		<>
			<div className={`container-fluid row float-start`}>
				<Navbar />
				<div className={`position-absolute start-0 ${style.leftPanel}`}></div>
				<div className={`ms-md-5 mt-md-4 mt-4`}>
					<iframe
						className={`mt-md-5 ${style.videoRecipe}`}
						src="https://www.youtube.com/embed/xG_AH1FevxQ"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen></iframe>
				</div>
				<div className={`ms-md-5`}>
					<h1 className={`fs-3 mt-2 ${style.videoTitle}`}>
						Beef Steak with Curry Sauce - [Step 4]
						<br />
						Cut the condiment and then mix it
					</h1>
					<p className={`mt-2 ${style.videoTime}`}>3 month ago</p>
				</div>
			</div>
			<div className={`position-absolute end-0 col-md-3 ${style.rightPanel}`}>
				<div className={` position-relative start-0`}>
					<h1 className={`fs-4`}>Next</h1>
				</div>
				<div className={`${style.videoNext}`}>
					<div className={`card mt-4 ${style.cards}`}>
						<img src={card1} className={`card-img-top`} alt="" />
						<div className={`card-body ${style.cBody}`}>
							<h5 className={`card-title ${style.nextTitle}`}>
								Beef Steak with Curry Sauce - [Step 5] Saute condiments together
								until turn brown
							</h5>
							<p className={`card-text ${style.cText}`}>
								HanaLohana - 3 month ago
							</p>
						</div>
					</div>
				</div>
				<div className={`${style.videoNext}`}>
					<div className={`card mt-4 ${style.cards}`}>
						<img src={card2} className={`card-img-top`} alt="" />
						<div className={`card-body ${style.cBody}`}>
							<h5 className={`card-title ${style.nextTitle}`}>
								Beef Steak with Curry Sauce - [Step 6] Roast beef until it’s
								medium rare
							</h5>
							<p className={`card-text ${style.cText}`}>
								HanaLohana - 3 month ago
							</p>
						</div>
					</div>
				</div>
				<div className={`${style.videoNext}`}>
					<div className={`card mt-4 ${style.cards}`}>
						<img src={card2} className={`card-img-top`} alt="" />
						<div className={`card-body ${style.cBody}`}>
							<h5 className={`card-title ${style.nextTitle}`}>
								Beef Steak with Curry Sauce - [Step 7] Roast beef until it’s
								medium rare
							</h5>
							<p className={`card-text ${style.cText}`}>
								HanaLohana - 3 month ago
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Video;
