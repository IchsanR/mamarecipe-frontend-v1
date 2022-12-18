import React, { useState } from "react";
import Leftpanel from "../../components/Leftpanel";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { userRegistration } from "../../redux/action/user";
import { useDispatch } from "react-redux";

const Registration = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		phone: "",
		profile_pic: "",
		checkPassword: "",
	});

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			form.name === "" ||
			form.email === "" ||
			form.password === "" ||
			form.phone === ""
		) {
			alert("Semua form harus diisi");
		} else {
			const body = {
				name: form.name,
				email: form.email,
				password: form.password,
				phone: form.phone,
				profile_pic: form.profile_pic,
			};
			if (form.password !== form.checkPassword) {
				alert("password tidak sama");
			} else {
				const handleSuccess = () => {
					alert("Akun berhasil didaftarkan");
					return navigate("/login");
				};
				dispatch(userRegistration(body, handleSuccess));
			}
		}
	};

	return (
		<div className="container-fluid row vh-100 mw-100">
			<Leftpanel />
			<div className={`${style.rightSide} col`}>
				<div className="position-relative top-50 start-50 translate-middle fs-6 col-md-12 col-12">
					<h1 className={`my-4 text-center fs-1 fw-semibold ${style.title}`}>
						Let's Get Started !
					</h1>
					<p className={`my-4 text-center ${style.subtitle}`}>
						Create new account to access all features
					</p>
					<form onSubmit={(e) => onSubmit(e)}>
						<div
							className={`form col col-md-8 col-12 position-relative mx-auto border-top`}>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className={`form-label text-start fw-semibold ${style.eP}`}>
									Name
								</label>
								<input
									type={`text`}
									className={`form-control col ${style.fill}`}
									onChange={(e) => setForm({ ...form, name: e.target.value })}
									placeholder={`Name`}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className={`form-label text-start fw-semibold ${style.eP}`}>
									Email Address*
								</label>
								<input
									type={`email`}
									className={`form-control col ${style.fill}`}
									onChange={(e) => setForm({ ...form, email: e.target.value })}
									placeholder={`Enter email address`}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className={`form-label text-start fw-semibold ${style.eP}`}>
									Phone Number
								</label>
								<input
									type={`text`}
									className={`form-control col ${style.fill}`}
									onChange={(e) => setForm({ ...form, phone: e.target.value })}
									placeholder={`08xxxxxxxxxx`}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className={`form-label text-start fw-semibold ${style.eP}`}>
									Create New Password
								</label>
								<input
									type={`password`}
									className={`form-control col ${style.fill}`}
									onChange={(e) =>
										setForm({ ...form, password: e.target.value })
									}
									placeholder={`Create New Password`}
								/>
							</div>
							<div className="mb-3">
								<label
									htmlFor="exampleFormControlInput1"
									className={`form-label text-start fw-semibold ${style.eP}`}>
									New Password
								</label>
								<input
									type={`password`}
									className={`form-control col ${style.fill}`}
									onChange={(e) =>
										setForm({ ...form, checkPassword: e.target.value })
									}
									placeholder={`New Password`}
								/>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="flexCheckDefault"
								/>
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
									Register Account
								</button>
							</div>
							<div className={`${style.katas}`}>
								<p className="sign text-center mt-4">
									Already have account?
									<Link to="/login" className={`${style.sU}`}>
										Login here
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

export default Registration;
