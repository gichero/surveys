import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

const ErrorPage = () => {
	return (
		<div className="error-page">
			<h1>404</h1>
			<h3>sorry the page you tried cannot be found</h3>
			<Link to="/" className="btn">
				back home
			</Link>
		</div>
	);
};
export default ErrorPage;
