import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StripePay from "../StripePay/StripePay";
import "./Navbar.scss";

class Navbar extends Component {
	userLogin() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a id="nav__link" href="/auth/google">
							Login with Google
						</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<StripePay className="btn" />
					</li>,
					<li key="3">Credits: {this.props.auth.credits}</li>,
					<li key="2">
						<a id="nav__link" href="/api/logout">
							Logout
						</a>
					</li>,
				];
		}
	}

	render() {
		return (
			<nav>
				<div className="nav__header">
					<Link to={this.props.auth ? "/surveys" : "/"} className="logo">
						barua
					</Link>
				</div>
				<ul className="nav__list">{this.userLogin()}</ul>
			</nav>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Navbar);
