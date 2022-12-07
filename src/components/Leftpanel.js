import React from "react";
import style from "../asset/style/style.module.css";
import logo from "../asset/images/Group 697.png";

const Leftpanel = () => {
	return (
		<div className={`${style.leftSide} col text-center`}>
			<img
				src={logo}
				alt="logo"
				className={`${style.logo} position-relative img-fluid top-50`}
			/>
		</div>
	);
};

export default Leftpanel;
