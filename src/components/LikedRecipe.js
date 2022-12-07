import React from "react";
import { Link } from "react-router-dom";
import style from "../asset/style/style.module.css";
import bomb from "../asset/images/Image-1.png";
import bananas from "../asset/images/Image-2.png";

const LikedRecipe = () => {
	return (
		<div className="my-md-3">
			<div className={`collapse col ${style.menuCollapse}`} id="likedRecipe">
				<Link to="/">
					<img src={bomb} alt="" className={`${style.imageRow}`} />
					<p
						className={`${style.desc} ${style.desc1} position-absolute fs-4 ms-md-3`}>
						Bomb
						<br />
						Chicken
					</p>
				</Link>
				<Link to="/">
					<img
						src={bananas}
						alt=""
						className={`ms-md-4 mt-md-0 mt-2 mb-2 ${style.imageRow} ${style.imageRow2}`}
					/>
					<p className={`${style.desc} ${style.desc2} position-absolute fs-4`}>
						Bananas
						<br />
						Pancake
					</p>
				</Link>
			</div>
		</div>
	);
};

export default LikedRecipe;
