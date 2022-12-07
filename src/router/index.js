import React, { useEffect } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Outlet,
} from "react-router-dom";

import Landing from "../pages/Landing/index";
import Home from "../pages/Home";
import Login from "../pages/Login/index";
import Registration from "../pages/registration";
import Forget from "../pages/forgetpassword";
import Otp from "../pages/forgetpassword/otp";
import Reset from "../pages/forgetpassword/createpassword";
import Profile from "../pages/profile";
import AddRecipe from "../pages/addrecipe";
import Detail from "../pages/detailrecipe";
import Video from "../pages/detailrecipe/videorecipe";
import UpdateRecipe from "../pages/updaterecipe";
import Searching from "../pages/search";

const PrivateRoute = () => {
	const token = localStorage.getItem("token");
	if (token) {
		return <Outlet />;
	} else {
		return <Navigate to="/login" />;
	}
};

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Landing />} />
					<Route path="home" element={<PrivateRoute />}>
						<Route index element={<Home />} />
					</Route>
					<Route path="profile" element={<PrivateRoute />}>
						<Route index element={<Profile />} />
					</Route>
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Registration />} />
					<Route path="forgetpassword" element={<Forget />} />
					<Route path="otp" element={<Otp />} />
					<Route path="reset" element={<Reset />} />
					<Route path="get" element={<Searching />} />
					<Route path="addrecipe" element={<PrivateRoute />}>
						<Route index element={<AddRecipe />} />
					</Route>
					<Route path={`detail/:id_recipe`} element={<PrivateRoute />}>
						<Route index element={<Detail />} />
					</Route>
					<Route path="detail/video" element={<PrivateRoute />}>
						<Route index element={<Video />} />
					</Route>
					<Route path="update/:id_recipe" element={<PrivateRoute />}>
						<Route index element={<UpdateRecipe />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
