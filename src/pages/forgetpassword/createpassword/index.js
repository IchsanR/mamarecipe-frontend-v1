import React from "react";
import Leftpanel from "../../../components/Leftpanel";
import { Link } from "react-router-dom";
import style from "../style.module.css";
import axios from "axios";

const Reset = () => {
	return (
		<div className="container-fluid row vh-100 mw-100">
			<Leftpanel />
			<div className={`${style.rightSide} col`}>
				<div className="position-relative top-50 start-50 translate-middle fs-6 col-md-12 col-12">
					<div className={`form col col-md-8 col-12 position-relative mx-auto`}>
						<div className="mb-3">
							<label
								htmlFor="exampleFormControlInput1"
								className={`form-label text-start fw-semibold ${style.eP}`}>
								Create New Password
							</label>
							<input
								type={`password`}
								className={`form-control col ${style.fill}`}
								id={`exampleFormControlInput1`}
								placeholder={``}
							/>
						</div>
						<div className="mb-3">
							<label
								htmlFor="exampleFormControlInput2"
								className={`form-label text-start fw-semibold ${style.eP}`}>
								New Password
							</label>
							<input
								type={`password`}
								className={`form-control col ${style.fill}`}
								id={`exampleFormControlInput2`}
								placeholder={``}
							/>
						</div>
						<div className="col-md-12 col-s-12">
							<Link to="/login">
								<button
									type="submit"
									className={`tbl mt-4 col-md-12 col-12 col ${style.tbl}`}>
									Reset Password
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reset;
