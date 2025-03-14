import { useState } from "react";


export default function Header({onSubmitForm}) {
	const [search, setSearch] = useState('');
	const [type, setType] = useState('all');


	return (
		<nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					React Movies
				</a>
				<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				>
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse  navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="!#">
							Repo
						</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="!#">
								Movie
							</a>
						</li>
					</ul>
					<form className="d-flex" role="search" onSubmit={(e) => {
						e.preventDefault();
						onSubmitForm(search, type);
					}}>
						<select onChange={(e) => setType(e.target.value)} className="form-select" aria-label="All">
							<option value='all'>All</option>
							<option value="movie">Movie</option>
							<option value="series">Series</option>
						</select>
					<input
					className="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					onChange={(e) => setSearch(e.target.value)}
					/>
					<button className="btn btn-outline-light" type="submit">
						Search
					</button>
				</form>
				</div>
			</div>
		</nav>
	);
}
