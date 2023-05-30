import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
const logo = require("../Images/NavImage.png");
const BasicLayout = () => {
	const location = useLocation();
	const active = location.pathname;
	// console.log("active", active.split("/")[1] === "view-records" && "active");
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div
					className="container d-flex align-items-center"
					style={{ display: "flex", justifyContent: "space-between" }}>
					<Link className="navbar-brand" to={"/"}>
						<img
							className="img-fluid navbar-logo"
							src={logo}
							alt="logo"
							style={{ maxWidth: "10%", height: "10%" }}
						/>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link
								to="/view-records"
								className={`nav-link ${active.split("/")[1] === "view-records" && "active"}`}
								aria-current="page">
								View Records
							</Link>
							<Link
								to="/print-invoice"
								className={`nav-link ${active.split("/")[1] === "print-invoice" && "active"}`}>
								Print Invoice
							</Link>
						</div>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default BasicLayout;
