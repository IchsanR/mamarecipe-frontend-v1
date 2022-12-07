import React from "react";
import Leftpanel from "../../components/Leftpanel";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Forget = () => {
	return (
		<div className="container-fluid row vh-100 mw-100">
			<Leftpanel />
			<div className={`${style.rightSide} col`}>
				<div className="position-relative top-50 start-50 translate-middle fs-6 col-md-12 col-12">
					<h1 className={`my-4 text-center fs-1 fw-semibold ${style.title}`}>
						Forgot Password?
					</h1>
					<p className={`my-4 text-center ${style.subtitle}`}>
						We just need your registered e-mail address
						<br />
						to send your password resend
					</p>
					<div
						className={`form col col-md-8 col-12 position-relative mx-auto border-top`}>
						<div className="mb-3">
							<label
								htmlFor="exampleFormControlInput1"
								className={`form-label text-start fw-semibold mt-5 ${style.eP}`}>
								Email Address*
							</label>
							<input
								type={`email`}
								className={`form-control col ${style.fill}`}
								id={`exampleFormControlInput1`}
								placeholder={`Enter email address`}
							/>
						</div>
						<div className="col-md-12 col-s-12">
							<Link to="/otp">
								<button
									type="submit"
									className={`tbl mt-4 col-md-12 col-12 col ${style.tbl}`}>
									Send Email
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forget;
