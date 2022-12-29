import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { getSearchRecipe } from "../../redux/action/recipe";
import style from "./style.module.css";

const Searching = () => {
	const [queryParam] = useSearchParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [search, setSearch] = useState("");
	const title = queryParam.get("title");
	const defaultPage = 1;
	const defaultSort = "asc";

	// Get data
	const [page, setPage] = useState(1);
	const [sort, setSort] = useState("asc");

	useEffect(() => {
		dispatch(getSearchRecipe(title, sort, page));
	}, [title, sort, page, dispatch]);

	const recipe = useSelector((state) => {
		return state.recipe;
	});

	// pagination

	const nextPage = () => {
		setPage(page + 1);
		dispatch(title, sort, page + 1);
	};

	const prevPage = () => {
		if (page > 1) {
			setPage(page - 1);
			dispatch(title, sort, page - 1);
		}
	};

	const sorting = () => {
		sort === "asc" ? setSort("desc") : setSort("asc");
		dispatch(title, sort, page);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const handleSuccess = () => {
			return navigate(`/get?title=${search}`);
		};

		dispatch(getSearchRecipe(title, defaultSort, defaultPage, handleSuccess));
	};

	return (
		<>
			<Navbar />
			<div className="container-fluid row">
				<div className="text-center">
					<h4>
						Showing results for "<span>{title}</span>"
					</h4>
				</div>
				<form onSubmit={(e) => onSubmitHandler(e)}>
					<div className="col-md-6 col-10 d-flex mx-auto my-4">
						<input
							type="text"
							className="col-12 form-control"
							placeholder="Search new recipe"
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>
				</form>
				{recipe.data.length === 0 || undefined || null ? (
					<h1 className="text-center">No recipe found</h1>
				) : (
					recipe.data.map((item, index) => (
						<div key={index} className="row">
							<Link
								to={`/detail/${item.id_recipe}`}
								className={`${style.links}`}>
								<div
									className={`col-md-8 col-12 row position-relative start-50 translate-middle-x border rounded p-3 mb-2 ${style.mobiles}`}>
									<div className="col-auto">
										<img
											src={`${item.image.split("|&&|")[0]}`}
											alt=""
											className={`${style.imageThumbs} rounded`}
										/>
									</div>
									<div className="col-5">
										<h1 className={`text-dark`}>{item.title}</h1>
										<p className="text-secondary">See Details ..</p>
									</div>
								</div>
							</Link>
						</div>
					))
				)}
				<div className="d-flex justify-content-center mt-4">
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li className="page-item">
								<button className="page-link" onClick={() => prevPage()}>
									Previous
								</button>
							</li>
							<li className="page-item">
								<button className="page-link">{page}</button>
							</li>
							<li className="page-item" disabled={recipe.data <= 0}>
								<button
									className="page-link"
									disabled={recipe.data <= 0}
									onClick={() => nextPage()}>
									Next
								</button>
							</li>
							<li className="page-item">
								<button
									className="page-link"
									aria-label="Next"
									onClick={() => sorting()}>
									<span aria-hidden="true">{sort}</span>
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Searching;
