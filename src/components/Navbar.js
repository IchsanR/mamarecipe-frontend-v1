import React from "react";
import { Link } from "react-router-dom";
import style from "../asset/style/style.module.css";

const Navbar = () => {
	return (
		<div>
			<nav className={`navbar navbar-expand-lg ${style.nav}`}>
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className={`nav-item mt-5 mx-5`}>
								<Link
									className={`list fw-semibold ${style.menu} ${style.activeHome}`}
									aria-current="page"
									to="/home">
									Home
								</Link>
							</li>
							<li className={`nav-item mt-5 mx-5`}>
								<Link
									className={`list fw-semibold ${style.menu} ${style.activeAdd}`}
									to="/addrecipe">
									Add Recipe
								</Link>
							</li>
							<li className={`nav-item mt-5 mx-5`}>
								<Link
									className={`list fw-semibold ${style.menu} ${style.activeProfile}`}
									to={`/profile`}>
									Profile
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
