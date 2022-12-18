import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Leftpanel from "../../components/Leftpanel";
import style from "./style.module.css";

import { userLogin } from "../../redux/action/user";
import { useDispatch } from "react-redux";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();

		const body = {
			email: form.email,
			password: form.password,
		};

		const handleSuccess = (response) => {
			if (response.data.code === 200) {
				localStorage.setItem("token", response.data.data.token);
				localStorage.setItem("data", JSON.stringify(response.data.data.data));
				alert(response.data.message);
				return navigate("/home");
			} else {
				alert(response.data.message);
			}
		};

		dispatch(userLogin(body, handleSuccess));
	};

	return (
		<div className="container-fluid row vh-100 mw-100">
			<Leftpanel />
			<div className={`${style.rightSide} col`}>
				<div className="position-relative top-50 start-50 translate-middle fs-6 col-md-12 col-12">
					<h1 className={`my-4 text-center fs-1 fw-bold ${style.title}`}>
						Welcome
					</h1>
					<p className={`my-4 text-center ${style.subtitle}`}>
						Log in into your existing account
					</p>
					<form onSubmit={(e) => onSubmit(e)}>
						<div
							className={`form col col-md-8 col-12 position-relative mx-auto border-top`}>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className={`form-label text-start ${style.eP}`}>
									Email
								</label>
								<input
									type={`email`}
									className={`form-control col ${style.fill}`}
									placeholder={`examplexxx@gmail.com`}
									onChange={(e) => setForm({ ...form, email: e.target.value })}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className={`form-label text-start ${style.eP}`}>
									Password
								</label>
								<input
									type={`password`}
									className={`form-control col ${style.fill}`}
									placeholder={`Password`}
									onChange={(e) =>
										setForm({ ...form, password: e.target.value })
									}
								/>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" />
								<label
									className={`form-check-label ${style.eP}`}
									htmlFor="flexCheckDefault">
									I agree to terms and condition
								</label>
							</div>
							<div className="col-md-12 col-s-12">
								<button
									type="submit"
									className={`tbl mt-4 col-md-12 col-12 col ${style.tbl}`}>
									Log in
								</button>
							</div>
							<div className={`${style.katas}`}>
								<Link
									to="/forgetpassword"
									className={`position-relative d-flex mt-3 justify-content-end ${style.forget}`}>
									Forget password?
								</Link>
								<p className="sign text-center mt-4">
									Dont have account
									<Link to="/signup" className={`${style.sU}`}>
										Sign Up
									</Link>
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
