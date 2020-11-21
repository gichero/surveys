import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreators";

import Navbar from "./Navbar/Navbar";
import LandingPage from "../components/LandingPage/LandingPage";
import Dashboard from "../components/Dashboard/Dashboard";
import SurveyNew from "./Surveys/SurveyNew/SurveyNew";
import ErrorPage from "../components/ErrorPage/ErrorPage";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<div>
					<Router>
						<Navbar />
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route exact path="/surveys" component={Dashboard} />
							<Route exact path="/surveys/new" component={SurveyNew} />
							<Route component={ErrorPage} />
						</Switch>
					</Router>
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(App);
