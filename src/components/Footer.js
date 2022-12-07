import React from "react";
import { Link } from "react-router-dom";
import style from "../asset/style/style.module.css";
import footLogo from "../asset/images/Copyright.png";

const Footer = () => {
	return (
		<div className={`${style.footer} container-fluid mw-100`}>
			<div className={`position-relative text-center ${style.footDesc}`}>
				<h1 className={`${style.footTitle}`}>Eat, Cook, Repeat</h1>
				<p className="mt-5">Share your best recipe by uploading here !</p>
			</div>
			<div className={`${style.footNav}`}>
				<ul className={`text-center`}>
					<li className={`${style.footNavMenu}`}>
						<Link to={`/`} className={`me-3 ${style.footLink}`}>
							Product
						</Link>
					</li>
					<li className={`${style.footNavMenu}`}>
						<Link to={`/`} className={`me-3 ${style.footLink}`}>
							Company
						</Link>
					</li>
					<li className={`${style.footNavMenu}`}>
						<Link to={`/`} className={`me-3 ${style.footLink}`}>
							Learn More
						</Link>
					</li>
					<li className={`${style.footNavMenu}`}>
						<Link to={`/`} className={`me-3 ${style.footLink}`}>
							Get In Touch
						</Link>
					</li>
				</ul>
				<img src={footLogo} alt="" className={`float-end ${style.imgFooter}`} />
			</div>
		</div>
	);
};

export default Footer;
